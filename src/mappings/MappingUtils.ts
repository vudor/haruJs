import ControllerCache from "../data/ControllerCache";
import mappingData, { RequestMapping } from "./Mappings";

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
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    let controller =
      ControllerCache.get(target.constructor.name) ?? new target.constructor();
    ControllerCache.set(target.constructor.name, controller);

    const mappings = mappingData.get(mappingType) ?? new Map();
    mappings.set(path, controller[propertyKey]);
    mappingData.set(mappingType, mappings);
  };
};
