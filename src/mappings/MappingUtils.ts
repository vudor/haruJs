import data from "./Mappings";
import { RequestMapping } from "./RequestMapping";

/**
 * Helper function for creating a request mapping.
 *
 * @param {RequestMapping} mappingType the type of http method to be used for the endpoint.
 * @param {string} path the path to which endpoint should be mapped.
 * @return {Function} the decorated function.
 */
export const createMapping = (
  mappingType: RequestMapping,
  path: string
): any => {
  return (
    target: Function,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    // console.log({ target, propertyKey, descriptor });
    // console.log(target.prototype);
    const middleware = target;
    const mappings = data.get(mappingType) ?? new Map();
    mappings.set(path, middleware);
    data.set(mappingType, mappings);
    console.log(data);
  };
};
