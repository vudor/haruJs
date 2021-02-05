import KoaService from "./KoaService";
import mappingData, { RequestMapping } from "../mappings/Mappings";
import { Middleware } from "koa";

jest.mock("koa");
const Koa = require("koa");

const useFn = jest.fn(() => {});
const listenFn = jest.fn(() => {});
Koa.mockImplementation(() => {
  return {
    use: useFn.bind(this),
    listen: listenFn.bind(this),
  };
});

jest.mock("koa-router");
const Router = require("koa-router");

const getFn = jest.fn(() => {});
const putFn = jest.fn(() => {});
const postFn = jest.fn(() => {});
const deleteFn = jest.fn(() => {});
const routesFn = jest.fn(() => {});
const allowedMethodsFn = jest.fn(() => {});
Router.mockImplementation(() => {
  return {
    get: getFn,
    put: putFn,
    post: postFn,
    delete: deleteFn,
    routes: routesFn,
    allowedMethods: allowedMethodsFn,
  };
});

describe("KoaService", () => {
  let service: KoaService;
  beforeEach(() => {
    service = new KoaService(2121);
  });
  describe("start", () => {
    it("should start a service on the specified port", async () => {
      await service.start();

      expect(listenFn).toHaveBeenCalledWith(1234);
    });

    it.only("should register the routes correctly", async () => {
      const getMapping = new Map<string, Middleware>();
      const testMiddleware = () => {};
      getMapping.set("/test", testMiddleware);
      mappingData.set(RequestMapping.GET, getMapping);

      await service.start();

      expect(getFn).toHaveBeenCalledWith("/test", testMiddleware);
    });
  });
});
