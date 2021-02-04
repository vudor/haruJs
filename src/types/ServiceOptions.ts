export default interface ServiceOptions {
  /**
   * Specifies the Port of the Service (defaults to 8080)
   *
   * @type {number}
   * @memberof ServiceOptions
   */
  port: number;

  /**
   * Specifies the path to the properties file (defaults to env.json)
   *
   * @type {string}
   * @memberof ServiceOptions
   */
  propertiesPath: string;
}
