import Router from "koa-router";
import { Class, RestControllerConfig, RouteConfig } from "../types";

/**
 * Custom implementation of Koas Router to provide extended functionality for the Application.
 *
 * @export
 * @class KoaRouter
 * @extends {Router}
 */
export default class KoaRouter extends Router {
  configureEndpoints(
    controller: any,
    routes: Map<string, RouteConfig>,
    basePath?: string
  ): void {
    routes.forEach(({ methodName, requestType, path }) => {
      const middleware = controller[methodName];
      const requestPath = basePath !== "/" ? `${basePath}${path}` : path;
      this[requestType](requestPath, middleware);
    });
  }
}
