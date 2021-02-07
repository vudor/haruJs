import fs from "fs";
import path from "path";
import Koa from "koa";
import KoaRouter from "./KoaRouter";
import { IApplicationConfig, RestControllerConfig } from "../types";
import { getControllerMetadata } from "../Utils";
import ApplicationCache from "../data/ApplicationCache";

/**
 * Responsible for creating an Application with multiple Endpoints that uses Koa as middleware.
 *
 * @class Application
 */
export default class Application {
  private app: Koa;
  private router: KoaRouter;

  private controllers: Array<any>;

  private propertiesPath: string;
  private properties: Map<string, string>;
  private defaultPort: number;

  /**
   * Creates an instance of Application.
   * @param {IApplicationConfig} {
   *     propertiesPath = "/ya.config.json",
   *     controllers = [],
   *     defaultPort = 8080,
   *   } configuration used to set up the Application
   * @memberof Application
   */
  constructor({
    propertiesPath = "/ya.config.json",
    controllers = [],
    defaultPort = 8080,
  }: IApplicationConfig) {
    this.app = new Koa();
    this.router = new KoaRouter();
    this.properties = new Map();

    this.defaultPort = defaultPort;
    this.controllers = controllers;
    this.propertiesPath = propertiesPath;
  }

  /**
   * Initializes the service by setting up required dependencies
   *
   * @return {Application} the initialized application
   * @memberof KoaService
   */
  public initialize(): Application {
    // TODO: this will have to be enhanced for sure...
    const rawProperties = fs
      .readFileSync(path.join(__dirname, "..", "..", "..", this.propertiesPath))
      .toString();
    try {
      const parsedProperties = JSON.parse(rawProperties);
      Object.keys(parsedProperties).forEach((key) => {
        this.properties.set(key, parsedProperties[key]);
      });
    } catch (error) {
      throw new Error(error);
    }

    this.controllers.forEach((controllerClass) => {
      // instantiate new Controller
      const meta: RestControllerConfig = getControllerMetadata(
        controllerClass.prototype
      );

      const controllerInstance = new controllerClass();
      this.router.configureEndpoints(
        controllerInstance,
        meta.routes,
        meta.basePath
      );

      // TODO: register controller instance in DI container (will be AppCache for now)
      ApplicationCache.set(controllerClass.prototype.name, controllerInstance);
    });
    return this;
  }

  /**
   * Actually starts the Service
   *
   * @memberof KoaService
   */
  public async start(): Promise<void> {
    this.app.use(this.router.routes());
    this.app.use(this.router.allowedMethods());

    const port = this.getPortFromProperties();
    this.app.listen(port ?? this.defaultPort);
  }

  private getPortFromProperties(): number {
    const port = this.properties.get("port");
    if (!port) {
      throw new Error("No Port specified in Properties!");
    }

    return parseInt(port);
  }
}
