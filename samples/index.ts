import { Application } from "../src/index";
import UserController from "./UserController";
import HelloWorldController from "./HelloWorldController";

// create a new Application
const app = new Application({
  propertiesPath: "./samples/config.json",
  controllers: [UserController, HelloWorldController],
});

// launch the application
app
  .initialize()
  .start()
  .then(() => {
    console.log(`Service started`);
  })
  .catch((error) => {
    console.log(`Error while starting: ${error}`);
  });
