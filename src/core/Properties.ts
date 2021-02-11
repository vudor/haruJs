import fs from 'fs';

/**
 * Class responsible for reading, parsing and providing possible Application-Properties.
 *
 * @export
 * @class Properties
 */
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
   * The Logger to be used.
   *
   * @private
   * @type {(any | Console)}
   * @memberof Properties
   */
  private logger: any | Console;

  /**
   * Creates an instance of Properties.
   * @param {string} propertiesPath
   * @memberof Properties
   */
  constructor(propertiesPath: string, logger?: any | Console) {
    this.logger = logger;
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
    } catch (error) {
      this.logger.log('Launching app without Properties: ', error.message);
    }
  }

  /**
   * Retrieve a Property value by given key
   *
   * @param {string} key
   * @return {string}
   * @memberof Properties
   */
  public get(key: string): string | undefined {
    return this.properties.get(key);
  }
}
