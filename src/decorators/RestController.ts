import "reflect-metadata";
import { RestControllerConfig } from "../types";
import {
  createControllerMetadata,
  getControllerMetadata,
  setControllerMetadata,
} from "../Utils";

/**
 * Declares a class as a Rest-Controller which can contain Request-Mappings.
 */
export default ({ basePath = "/" } = {}): ClassDecorator => {
  return (target: Function): void => {
    const meta: RestControllerConfig =
      getControllerMetadata(target.prototype) ??
      createControllerMetadata(basePath);

    meta.basePath = basePath;

    setControllerMetadata(meta, target.prototype);
  };
};
