import { RequestType } from "./RequestMappings";
import { createMapping } from "./MappingUtils";

/**
 * Creates an Http POST Endpoint
 *
 * @param {string} path the path of the endpoint
 * @return {Function} the decorated method.
 */
export default (path: string): any => {
  return createMapping(RequestType.POST, path);
};
