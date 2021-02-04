import KoaService from "./service/KoaService";
import ServiceOptions from "./types/ServiceOptions";

/**
 * Defines the annotated class as application
 *
 * @param {ServiceOptions} [options={ port: 8080, propertiesPath: "/env.json" }]
 * @return {*}
 */
const Application = ({
  port = 8080,
  propertiesPath = "/env.json",
}: ServiceOptions): any => {
  console.log(port, propertiesPath);
  return (target: Function) => {
    // TODO: resolve all mappings and pass into service
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

    console.log(target);
    return target;
  };
};

export default Application;
