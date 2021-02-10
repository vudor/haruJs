# HaruJs
<div style="text-align:center">
  <img src="./logo.png?raw=true" style="background: white;"alt="HaruJs" width="300" height="130"/>
</div>


## Web framework for Node.js based on Koa

This Framework is supposed to bring the Spring-Boot feeling into JavaScript by providing the necessary Decorators for your Node.js Application.

## Available Components

### Modules

- `Application` The Entry Point of the Service, used to configure and set up the App.

### Decorators

- `RestController` Defines a Controller responsible for handling Restful Http-Requests
- `Get`, `Put`, `Post`, `Delete`, `Patch` Defines the Corresponding handling Methods of a Controller

### Configuration

A Configuration File (`haru.config.js` per default) can be provided via path-Parameter to the Application itself. Currenly the Configuration-File supports following Attributes:

- "port": number - the Port of the Application

This Configuration File shall in future be used to provide arbitrary Properties for the Application e.g. `databaseUrl`, `dbUser`, `dbPassword` and even custom Attributes that will be Resolved via `@Property('${foo}')`.

## Examples

Examples can be found in the `/samples` Folder of the Repository. The example Application is configured to start an Application with multiple Controllers and Endpoints using different kinds of configurations.

The very basic way to create a Hello-World example would be:

```ts
@RestController()
class HelloController {
  @Get('/hello')
  helloWorld = async (ctx: Context, next: Function): Promise<Middleware> => {
    ctx.response.body = 'Hello World!';
    return next();
  };
}

const app = new Application({ controllers: [HelloController] });
app.initialize().start();
```
