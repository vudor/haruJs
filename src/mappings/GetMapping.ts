import data from "./Mappings";
import { createMapping } from "./MappingUtils";
import { RequestMapping } from "./RequestMapping";

/**
 * Creates an Http-Get Endpoint using the specified path.
 *
 * @param {string} path the path of the Get Endpoint.
 * @return {Function} the decorated function.
 */
const GetMapping = (path: string): any => {
  return createMapping(RequestMapping.GET, path);
};

export default GetMapping;
