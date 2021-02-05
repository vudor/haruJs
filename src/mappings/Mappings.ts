import { Middleware } from "koa";

/**
 * Enum defining all possible Http-Request-Mappings.
 *
 * @export
 * @enum {number}
 */
export enum RequestMapping {
  GET,
  PUT,
  POST,
  DELETE,
}

/**
 * Mapping for keeping track of the HttpMethods and Endpoints to be registered to the application.
 * @type {Map<number, Map<string, Middleware>>}
 * */
export default new Map<RequestMapping, Map<string, Middleware>>();
