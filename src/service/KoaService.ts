import Koa from "koa";
import Router from "koa-router";
import { stringify } from "querystring";
import Mappings from "../mappings/Mappings";
import data from "../mappings/Mappings";
import { RequestMapping } from "../mappings/RequestMapping";

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

    // TODO: go through keys of data and register middlewares to router
    data.get(RequestMapping.GET)?.forEach((value, key) => {
      router.get(key, value);
    });
    data.get(RequestMapping.PUT)?.forEach((value, key) => {
      router.get(key, value);
    });
    data.get(RequestMapping.POST)?.forEach((value, key) => {
      router.get(key, value);
    });
    data.get(RequestMapping.DELETE)?.forEach((value, key) => {
      router.get(key, value);
    });

    app.use(router.routes()).use(router.allowedMethods());

    app.listen(this.port);
  }
}
