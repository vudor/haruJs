import { Context, Middleware } from 'koa';
import { Get, RestController } from '../src/index';

/**
 * Sample RestController using a basePath and a Get-Mapping for returning Hello-World
 *
 * @export
 * @class HelloWorldController
 */
@RestController({ basePath: '/hello' })
export default class HelloWorldController {
  @Get('/world')
  private hello = async (
    ctx: Context,
    next: () => Middleware
  ): Promise<Middleware> => {
    console.log(ctx);
    ctx.body = 'Hello World!';
    return next();
  };
}
