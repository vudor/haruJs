import "reflect-metadata";
import { Defaults, RestControllerConfig } from "../types";
import {
  createControllerMetadata,
  getControllerMetadata,
  setControllerMetadata,
} from "../Utils";

/**
 * Decorator for declaring a Class as Rest-Controller which will be responsible for handling Http-Requests of an Application.
 *
 * @example
 * @RestController()
 * class Controller {
 *   // your Implementation here
 * }
 *
 * @example
 * @RestController({basePath: '/user'})
 * class UserController {
 *   // your Implementation here
 * }
 *
 * @param {controllerConfig} [{
 *   basePath = Defaults.BASE_PATH,
 * }={}]
 * @returns {ClassDecorator} the Decorator used to define a Rest-Controller
 */
const RestController = ({
  basePath = Defaults.BASE_PATH,
} = {}): ClassDecorator => {
  return (target: Function): void => {
    const meta: RestControllerConfig =
      getControllerMetadata(target.prototype) ??
      createControllerMetadata(basePath);

    meta.basePath = basePath;

    setControllerMetadata(meta, target.prototype);
  };
};

export default RestController;
