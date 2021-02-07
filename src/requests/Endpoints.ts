import { Middleware } from "koa";
import { Request } from "../types";

/**
 * Mapping for keeping track of the HttpMethods and Endpoints to be registered to the application.
 * @type {Map<number, Map<string, Middleware>>}
 * */
export default new Map<Request, Map<string, Middleware>>();
