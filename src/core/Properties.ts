import fs from "fs";
import path from "path";

export class Properties {
  /**
   * All available properties provided by the configuration file
   *
   * @private
   * @type {Map<string, string>}
   * @memberof Properties
   */
  private properties: Map<string, string>;

  /**
   * Creates an instance of Properties.
   * @param {string} propertiesPath
   * @memberof Properties
   */
  constructor(propertiesPath: string) {
    this.properties = new Map();
    this.load(propertiesPath);
  }

  /**
   * Helper function for loading all values from the specified Properties file.
   *
   * @private
   * @param {string} propertiesPath
   * @memberof Properties
   */
  private load(propertiesPath: string) {
    try {
      const rawProperties = fs.readFileSync(propertiesPath).toString();
      const parsedProperties = JSON.parse(rawProperties);
      Object.keys(parsedProperties).forEach((key) => {
        this.properties.set(key, parsedProperties[key]);
      });
    } catch ({ message }: any) {
      console.log("Launching app without Properties", { message });
    }
  }

  /**
   * Retrieve a Property value by given key
   *
   * @param {string} key
   * @return {any}
   * @memberof Properties
   */
  public get(key: string) {
    return this.properties.get(key);
  }
}
