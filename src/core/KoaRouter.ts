import Router from "koa-router";
import { RouteConfig } from "../types";

export default class KoaRouter extends Router {
  configureEndpoints(
    controller: any,
    routes: Map<string, RouteConfig>,
    basePath?: string
  ): void {
    routes.forEach(({ methodName, requestType, path }) => {
      const middleware = controller[methodName];
      const requestPath = basePath !== "/" ? `${basePath}${path}` : path;
      console.log(requestPath);
      this[requestType](requestPath, middleware);
    });
  }
}
