import appCache from "./data/ApplicationCache";
import KoaService from "./service/KoaService";
import ApplicationOptions from "./types/ApplicationOptions";

/**
 * Declares a class as an Rest-Service Application
 *
 * @param {ApplicationOptions} [options={ port: 8080, propertiesPath: "/env.json" }]
 * @return {FunctionConstructor} the decorated Class
 */
export default ({
  port = 8080,
  propertiesPath = "/env.json",
}: ApplicationOptions): any => {
  return (target: FunctionConstructor): FunctionConstructor => {
    const instance = new target();
    appCache.set("Application", instance);

    const launchable = new Promise((resolve, reject) => {
      const service = new KoaService(port);
      service
        .start()
        .then(() => {
          resolve(service);
        })
        .catch((error) => {
          reject(error);
        });
    });

    launchable
      .then(() => {
        console.log(`Service started on port ${port}`);
      })
      .catch((error) => {
        console.log(`Error while starting: ${error}`);
      });

    return target;
  };
};
