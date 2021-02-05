import { Context, Middleware } from "koa";
import { Get, Post, Application, RestController } from "../src/index";

/**
 * Specifies a Rest-Service handling Http Requests.
 *
 * @class Service
 */
@Application({ port: 3030 })
class Service {
  /**
   * Fetches all available users.
   *
   * @param {Context} ctx koas context object
   * @param {Middleware} next the next middleware function
   * @memberof Service
   */
  @Get("/user")
  getUser = async (ctx: Context, next: Function): Promise<Middleware> => {
    ctx.response.body = "GET /user";
    return next();
  };

  /**
   * Creates a new User.
   *
   * @param {Context} ctx koas context object
   * @param {Function} next the next middleware function
   * @memberof Service
   */
  @Post("/user")
  createUser = async (ctx: Context, next: Function): Promise<Middleware> => {
    ctx.response.body = "POST /user";
    return next();
  };
}
