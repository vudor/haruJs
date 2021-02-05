import { RequestMapping } from "./Mappings";
import { createMapping } from "./MappingUtils";

/**
 * Creates an Http POST Endpoint
 *
 * @param {string} path the path of the endpoint
 * @return {Function} the decorated method.
 */
export default (path: string): any => {
  return createMapping(RequestMapping.POST, path);
};
