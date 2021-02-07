import { Request } from "../types";
import { createEndpoint } from "../Utils";

/**
 * Creates an Http-Get Endpoint using the specified path.
 *
 * @param {string} path the path of the Get Endpoint.
 * @return {Function} the decorated function.
 */
export const Get = (path: string): any | ClassDecorator => {
  return createEndpoint(Request.GET, path);
};

/**
 * Creates an Http-Post Endpoint
 *
 * @param {string} path the path of the endpoint
 * @return {Function} the decorated method.
 */
export const Post = (path: string): any | ClassDecorator => {
  return createEndpoint(Request.POST, path);
};

/**
 * Creates an Http-Put Endpoint
 *
 * @param {string} path the path of the endpoint
 * @return {Function} the decorated method.
 */
export const Put = (path: string): any | ClassDecorator => {
  return createEndpoint(Request.PUT, path);
};

/**
 * Creates an Http-Delete Endpoint
 *
 * @param {string} path the path of the endpoint
 * @return {Function} the decorated method.
 */
export const Delete = (path: string): any | ClassDecorator => {
  return createEndpoint(Request.DELETE, path);
};
