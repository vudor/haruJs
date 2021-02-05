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
    Object.keys(RequestMapping).forEach((requestMapping: any) => {
      mappingData.get(requestMapping)?.forEach((value, key) => {
        switch (requestMapping) {
          case RequestMapping.GET:
            router.get(key, value);
            break;
          case RequestMapping.PUT:
            router.put(key, value);
            break;
          case RequestMapping.POST:
            router.post(key, value);
            break;
          case RequestMapping.DELETE:
            router.delete(key, value);
            break;
          default:
            return;
        }
      });
    });

    app.use(router.routes()).use(router.allowedMethods());

    app.listen(this.port);
  }
}
