import 'reflect-metadata';
import { Defaults, MetadataKey, Request, RestControllerConfig } from './types';

/**
 * Helper function for creating a request mapping.
 *
 * @param {RequestType} requestType the type of http method to be used for the endpoint.
 * @param {string} path the path to which endpoint should be mapped.
 * @return {Function} the decorated function.
 */
export const createEndpoint = (requestType: Request, path: string): any => {
  return (
    target: NewableFunction,
    propertyKey: string,
    _: PropertyDescriptor
  ) => {
    const meta: RestControllerConfig =
      getControllerMetadata(target) ?? createControllerMetadata();

    // add Endpoint specific metadata
    meta.routes.push({
      methodName: propertyKey,
      requestType,
      path
    });

    setControllerMetadata(meta, target);
  };
};

/**
 * Helper function for creating the default Controller-Metadata Object
 * @param controllerConfig
 */
export const createControllerMetadata = (basePath = Defaults.BASE_PATH) => ({
  basePath,
  routes: []
});

/**
 * Helper function for retrieving a Controller-Metadata.
 * @param target
 */
export const getControllerMetadata = (target: any) => {
  return Reflect.getMetadata(MetadataKey.CONTROLLER, target);
};

/**
 * Helper function for setting a Controllers Metadata
 * @param metadata
 * @param target
 */
export const setControllerMetadata = (
  metadata: RestControllerConfig,
  target: any
) => {
  return Reflect.defineMetadata(MetadataKey.CONTROLLER, metadata, target);
};
