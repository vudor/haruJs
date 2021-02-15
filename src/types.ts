/**
 * Declares the Interface of a RestController
 *
 * @export
 * @interface RestControllerConfig
 */
export interface RestControllerConfig {
  /**
   * Optional base path of the Endpoint.
   *
   * @type {string}
   * @memberof RestControllerConfig
   */
  basePath: string;
  /**
   * The Routes the Endpoint will use.
   *
   * @type {Array<RouteConfig>}
   * @memberof RestControllerConfig
   */
  routes: RouteConfig[];
}

/**
 * Declares the Interface of an Application
 *
 * @export
 * @interface ApplicationConfig
 */
export interface ApplicationConfig {
  /**
   * Specifies the path to the properties file
   *
   * @type {string}
   * @memberof ApplicationConfig
   */
  propertiesPath?: string;

  /**
   * The Logger Implementation to be used by the Applications Components.
   *
   * @type {Console}
   * @memberof ApplicationConfig
   */
  logger?: Console;

  /**
   * List of available RestControllers within the Application
   *
   * @type {Array<Newable>}
   * @memberof ApplicationConfig
   */
  controllers?: Newable[];
}

export interface RouteConfig {
  /**
   * Name of the method within the Controller being used as middleware.
   *
   * @type {string}
   * @memberof RouteConfig
   */
  methodName: string;
  /**
   * Describes the Http-Request Type this Endpoind will be used for.
   *
   * @type {Request}
   * @memberof RouteConfig
   */
  requestType: Request;
  /**
   * Describes the path of the Endpoint
   *
   * @type {string}
   * @memberof RouteConfig
   */
  path: string;
}

export enum MetadataKey {
  CONTROLLER = 'RestController',
  REQUEST = 'HttpRequest'
}

export const Defaults = Object.freeze({
  BASE_PATH: '/'
});

/**
 * Request represents the supported Http-Request types mapping into the corresponding koa-router request method name.
 *
 * @export
 * @enum {number}
 */
export enum Request {
  GET = 'get',
  PUT = 'put',
  POST = 'post',
  PATCH = 'patch',
  DELETE = 'delete',
  HEAD = 'head'
}

/**
 * Interface for any newable function.
 *
 * @export
 * @interface Newable
 */
export interface Newable {
  new (...args: any[]): any;
}
