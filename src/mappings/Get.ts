import { RequestType } from "./RequestMappings";
import { createMapping } from "./MappingUtils";

/**
 * Creates an Http-Get Endpoint using the specified path.
 *
 * @param {string} path the path of the Get Endpoint.
 * @return {Function} the decorated function.
 */
export default (path: string): any => {
  return createMapping(RequestType.GET, path);
};
