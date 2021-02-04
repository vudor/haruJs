import RestService from "./RestService";
import ServiceOptions from "./types/ServiceOptions";

@RestService({ port: 3030 } as ServiceOptions)
class Service {}

const service = new Service();
