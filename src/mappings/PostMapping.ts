import { createMapping } from "./MappingUtils";
import { RequestMapping } from "./RequestMapping";

/**
 * Creates an Http POST Endpoint
 *
 * @param {string} path the path of the endpoint
 * @return {Function} the decorated method.
 */
const PostMapping = (path: string): any => {
  return createMapping(RequestMapping.POST, path);
};

export default PostMapping;
