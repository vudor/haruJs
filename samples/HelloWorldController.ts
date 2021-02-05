import { Context } from "koa";
import { RestController, Get } from "../src";

/**
 * Sample RestController using a basePath and a Get-Mapping for returning Hello-World
 *
 * @export
 * @class HelloWorldController
 */
@RestController({ basePath: "/hello" })
export default class HelloWorldController {
  @Get("/world")
  private hello = async (ctx: Context, next: Function) => {
    console.log(ctx);
    ctx.body = "Hello World!";
    return next();
  };
}
