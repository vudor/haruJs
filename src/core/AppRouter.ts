import Router from "koa-router";
import { Defaults, RouteConfig } from "../types";
import { posix } from "path";

/**
 * Custom implementation of Koas Router to provide extended functionality for the Application.
 *
 * @export
 * @class AppRouter
 * @extends {Router}
 */
export default class AppRouter extends Router {
  configureEndpoints(
    routes: Map<string, RouteConfig>,
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
