import RequestType from "./RequestType";
import { createEndpoint } from "./MappingUtils";

/**
 * Creates an Http PUT Endpoint
 *
 * @param {string} path the path of the endpoint
 * @return {Function} the decorated method.
 */
export default (path: string): any => {
  return createEndpoint(RequestType.PUT, path);
};
