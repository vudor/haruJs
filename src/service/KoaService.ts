import Koa from "koa";
import Router from "koa-router";
import RequestMappings, { RequestType } from "../mappings/RequestMappings";

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
    Object.values(RequestType).forEach((requestType) => {
      if (typeof requestType === "string") return;
      const requestMappings = RequestMappings.get(requestType) ?? new Map();
      requestMappings.forEach((middleware, path) => {
        switch (requestType) {
          case RequestType.GET:
            router.get(path, middleware);
            break;
          case RequestType.PUT:
            router.put(path, middleware);
            break;
          case RequestType.POST:
            router.post(path, middleware);
            break;
          case RequestType.DELETE:
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
