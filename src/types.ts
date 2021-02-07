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
   * @type {Map<string, RouteConfig>}
   * @memberof RestControllerConfig
   */
  routes: Map<string, RouteConfig>;
}

/**
 * Declares the Interface of an Application
 *
 * @export
 * @interface IApplication
 */
export interface IApplicationConfig {
  /**
   * Specifies the Port of the Service
   *
   * @type {number}
   * @memberof ServiceOptions
   */
  defaultPort?: number;

  /**
   * Specifies the path to the properties file
   *
   * @type {string}
   * @memberof ServiceOptions
   */
  propertiesPath?: string;

  /**
   * List of available RestControllers within the Application
   *
   * @type {any[]}
   * @memberof IApplication
   */
  controllers?: any[];
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
  CONTROLLER = "RestController",
  REQUEST = "HttpRequest",
}

/**
 * Requests represents the supported Http-Request types mapping into the corresponding koa-router request method name.
 *
 * @export
 * @enum {number}
 */
export enum Request {
  GET = "get",
  PUT = "put",
  POST = "post",
  PATCH = "patch",
  DELETE = "delete",
  HEAD = "head",
}
