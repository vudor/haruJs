import Router from "koa-router";
import { posix } from "path";
import { Defaults, RouteConfig } from "../types";

/**
 * Custom implementation of Koas Router to provide extended functionality for the Application.
 *
 * @export
 * @class AppRouter
 * @extends {Router}
 */
export default class AppRouter extends Router {
  /**
   * Registers given routes of the Controller as the Koa-Routers middlewares.
   *
   * @param {Map<string, RouteConfig>} routes all routes that shall be handled by the Controller
   * @param {any} controller Instance of the Controller responsible to handle given routes
   * @param {string} [basePath=Defaults.BASE_PATH] optional basePath of the Controller
   * @memberof AppRouter
   */
  configureEndpoints(
    routes: RouteConfig[],
    controller: any,
    basePath = Defaults.BASE_PATH
  ): void {
    routes.forEach(({ methodName, requestType, path }) => {
      const middleware = controller[methodName];
      posix.join();
      const requestPath =
        basePath !== Defaults.BASE_PATH ? posix.join(basePath, path) : path;
      this[requestType](requestPath, middleware);
    });
  }
}
