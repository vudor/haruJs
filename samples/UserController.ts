import { Context } from "koa";
import { Delete, Get, Post, Put, RestController } from "../src";

@RestController()
export default class UserController {
  @Get("/user")
  private getUser = async (ctx: Context, next: Function) => {
    ctx.body = "GET /user";
    return next();
  };

  @Post("/user")
  private createUser = async (ctx: Context, next: Function) => {
    ctx.body = "POST /user";
    return next();
  };

  @Put("/user")
  private updateUser = async (ctx: Context, next: Function) => {
    ctx.body = "UPDATE /user";
    return next();
  };

  @Delete("/user")
  private deleteUser = async (ctx: Context, next: Function) => {
    ctx.body = "DELETE /user";
    return next();
  };
}
