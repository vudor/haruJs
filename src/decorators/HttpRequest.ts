import { Request } from '../types';
import { createEndpoint } from '../Utils';

/**
 * Creates an Http-Get Endpoint using the specified path.
 *
 * @example
 * ＠Get("/user")
 * fetchAll = async (ctx, next) => {
 *   ctx.response.body = "GET USER";
 *   return next();
 * }
 *
 * @param {string} path the path of the Get Endpoint.
 * @return {ClassDecorator} the decorated function.
 */
export const Get = (path: string): any | ClassDecorator => {
  return createEndpoint(Request.GET, path);
};

/**
 * Creates an Http-Post Endpoint
 *
 * @example
 * ＠Post("/user")
 * create = async (ctx, next) => {
 *   ctx.response.body = "POST USER";
 *   return next();
 * }
 * @param {string} path the path of the endpoint
 * @return {ClassDecorator} the decorated method.
 */
export const Post = (path: string): any | ClassDecorator => {
  return createEndpoint(Request.POST, path);
};

/**
 * Creates an Http-Patch Endpoint
 *
 * @example
 * ＠Patch("/user/:id")
 * update = async (ctx, next) => {
 *   ctx.response.body = "PATCH USER";
 *   return next();
 * }
 *
 * @param {string} path the path of the endpoint
 * @return {ClassDecorator} the decorated method.
 */
export const Patch = (path: string): any | ClassDecorator => {
  return createEndpoint(Request.PATCH, path);
};

/**
 * Creates an Http-Put Endpoint
 *
 * @example
 * ＠Put("/user/:id")
 * update = async (ctx, next) => {
 *   ctx.response.body = "PUT USER";
 *   return next();
 * }
 *
 * @param {string} path the path of the endpoint
 * @return {ClassDecorator} the decorated method.
 */
export const Put = (path: string): any | ClassDecorator => {
  return createEndpoint(Request.PUT, path);
};

/**
 * Creates an Http-Delete Endpoint
 * @example
 * ＠Delete("/user/:id")
 * delete = async (ctx, next) => {
 *   ctx.response.body = "DELETE USER";
 *   return next();
 * }
 *
 * @param {string} path the path of the endpoint
 * @return {ClassDecorator} the decorated method.
 */
export const Delete = (path: string): any | ClassDecorator => {
  return createEndpoint(Request.DELETE, path);
};
