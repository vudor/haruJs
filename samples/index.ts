import { Application } from "../src";
import UserController from "./UserController";
import HelloWorldController from "./HelloWorldController";

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
