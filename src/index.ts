import { Context } from "koa";
import RestService from "./Application";
import GetMapping from "./mappings/GetMapping";
import PostMapping from "./mappings/PostMapping";

@RestService({ port: 3030 })
class Service {
  @GetMapping("/user")
  getUser = async (ctx: Context, next: Function) => {
    ctx.response.body = "GET /user";
    return next();
  };

  @PostMapping("/user")
  createUser = async (ctx: Context, next: Function) => {
    ctx.response.body = "POST /user";
    return next();
  };
}
console.log(Service.prototype.createUser);
console.log(Service.prototype.getUser);

new Service();
