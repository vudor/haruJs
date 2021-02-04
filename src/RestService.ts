import ServiceOptions from "./types/ServiceOptions";

/**
 *
 *
 * @param {ServiceOptions} [options={ port: 8080, propertiesPath: "/env.json" }]
 * @return {*}
 */
const RestService = (
  options: ServiceOptions = { port: 8080, propertiesPath: "/env.json" }
) => {
  console.log(options);
  return (target: Function) => {
    console.log(target);
  };
};

export default RestService;
