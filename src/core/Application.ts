import Koa from 'koa';
import ApplicationCache from '../data/ApplicationCache';
import { ApplicationConfig, RestControllerConfig } from '../types';
import { getControllerMetadata } from '../Utils';
import AppRouter from './AppRouter';
import { Properties } from './Properties';

/**
 * Entry Point of the Haru-Application.
 * This Class is Responsible for creating and starting the Application
 * with multiple Endpoints using Koa as Web-Framework.
 *
 * @example
 * // create and configure the Application
 * const app = new Application({
 *   propertiesPath = "./app.config.json",
 *   controllers = [ExampleController],
 *  })
 *
 *  // initialize and start your App
 *  app.initialize().start();
 *
 * @class Application
 */
export default class Application {
  /**
   * Instance of the Koa Object.
   *
   * @private
   * @type {Koa}
   * @memberof Application
   */
  private app: Koa;

  /**
   * Instance of the KoaRouter Object.
   *
   * @private
   * @type {KoaRouter}
   * @memberof Application
   */
  private router: AppRouter;

  /**
   * List of Controllers to be registered within the Application.
   *
   * @private
   * @type {NewableFunction[]}
   * @memberof Application
   */
  private controllers: NewableFunction[];

  /**
   * The Properties used by the Application
   *
   * @private
   * @type {Properties}
   * @memberof Application
   */
  private properties: Properties;

  /**
   * Creates an instance of Application.
   * @param {ApplicationConfig} {
   *     propertiesPath = "/haru.config.json",
   *     controllers = [],
   *     defaultPort = 8080,
   *   } configuration used to set up the Application
   * @memberof Application
   */
  constructor({
    propertiesPath = '/haru.config.json',
    controllers = []
  }: ApplicationConfig) {
    this.app = new Koa();
    this.router = new AppRouter();
    this.properties = new Properties(propertiesPath);
    this.controllers = controllers;
  }

  /**
   * Initializes the service by setting up required dependencies
   *
   * @return {Application} the initialized application
   * @memberof KoaService
   */
  public initialize(): Application {
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

      ApplicationCache.set(controllerClass.prototype.name, controllerInstance);
    });

    return this;
  }

  /**
   * Starts the Application.
   *
   * @param {number} [port=8080] the port on which the Application will be started.
   * @return {Promise<void>}
   * @memberof Application
   */
  public async start(port: number = 8080): Promise<void> {
    this.app.use(this.router.routes());
    this.app.use(this.router.allowedMethods());

    this.app.listen(this.getPortFromProperties() ?? port);
  }

  /**
   * Helper function for retrieving the Port from the Applications Properties
   *
   * @private
   * @return {number} the port
   * @memberof Application
   */
  private getPortFromProperties(): number | undefined {
    const port = this.properties.get('port');
    return port ? parseInt(port, 10) : undefined;
  }
}
