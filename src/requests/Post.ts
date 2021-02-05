import RequestType from "./RequestType";
import { createEndpoint } from "./MappingUtils";

/**
 * Creates an Http POST Endpoint
 *
 * @param {string} path the path of the endpoint
 * @return {Function} the decorated method.
 */
export default (path: string): any => {
  return createEndpoint(RequestType.POST, path);
};
