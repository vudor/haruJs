import Koa from "koa";
import Router from "koa-router";
import mappingData, { RequestMapping } from "../mappings/Mappings";

/**
 * Responsible for creating a Service that uses Koa as middleware.
 *
 * @class KoaService
 */
export default class KoaService {
  /**
   * Creates an instance of KoaService.
   * @param {number} port the port on which the service will be launched
   * @memberof KoaService
   */
  constructor(private port: number) {}

  /**
   * Starts the Service
   *
   * @memberof KoaService
   */
  async start() {
    const app = new Koa();
    const router = new Router();

    // register routes using available requestMappings
    Object.values(RequestMapping).forEach((value) => {
      if (typeof value === "string") return;
      const requestMappings = mappingData.get(value) ?? new Map();
      requestMappings.forEach((middleware, path) => {
        switch (value) {
          case RequestMapping.GET:
            router.get(path, middleware);
            break;
          case RequestMapping.PUT:
            router.put(path, middleware);
            break;
          case RequestMapping.POST:
            router.post(path, middleware);
            break;
          case RequestMapping.DELETE:
            router.delete(path, middleware);
            break;
          default:
            return;
        }
      });
    });

    app.use(router.routes());
    app.use(router.allowedMethods());

    app.listen(this.port);
  }
}
