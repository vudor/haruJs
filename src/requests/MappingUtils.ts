import ControllerCache from "../data/ControllerCache";
import RequestType from "./RequestType";
import Endpoints from "./Endpoints";

/**
 * Helper function for creating a request mapping.
 *
 * @param {RequestType} mappingType the type of http method to be used for the endpoint.
 * @param {string} path the path to which endpoint should be mapped.
 * @return {Function} the decorated function.
 */
export const createEndpoint = (mappingType: RequestType, path: string): any => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    let controller =
      ControllerCache.get(target.constructor.name) ?? new target.constructor();
    ControllerCache.set(target.constructor.name, controller);

    const mappings = Endpoints.get(mappingType) ?? new Map();
    mappings.set(path, controller[propertyKey]);
    Endpoints.set(mappingType, mappings);
  };
};
