import ControllerOptions from "../types/ControllerOptions";

/**
 * Declares a class as a Rest-Controller which can contain Request-Mappings.
 *
 */
export default ({ basePath = "/" }: ControllerOptions = {}): any => {
  return (target: FunctionConstructor) => {
    // instantiate new Controller Object
    // const controllerInstance = new target();

    // make sure it's not already been created
    // if (!ControllerCache.get(target.name)) {
    //   throw new IllegalStateError(
    // `No Instance of Controller ${target.name} found!`
    //   );
    // }

    // add into Controller Cache
    // ControllerCache.set(target.name, controllerInstance);

    return target;
  };
};
