import { Application } from "../src";
import HelloWorldController from "./HelloWorldController";
import UserController from "./UserController";

// create a new Application
const app = new Application({
  propertiesPath: "./app.config.json",
  controllers: [UserController, HelloWorldController],
});

// launch the application
app
  .initialize()
  .start()
  .then(() => {
    console.log(`Service started`);
  })
  .catch((error: Error) => {
    console.log(`Error while starting: ${error}`);
  });
