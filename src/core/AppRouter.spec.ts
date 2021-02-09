import { Request, RouteConfig } from '../types';
import AppRouter from './AppRouter';

const getStub = jest.fn();
const putStub = jest.fn();
const postStub = jest.fn();
const patchStub = jest.fn();
const deleteStub = jest.fn();

const controller = {
  getTest: jest.fn,
  postTest: jest.fn,
  putTest: jest.fn,
  patchTest: jest.fn,
  deleteTest: jest.fn
};

describe.only('AppRouter', () => {
  let router: AppRouter;
  beforeEach(() => {
    router = new AppRouter();
    router.get = getStub as any;
    router.put = putStub as any;
    router.post = postStub as any;
    router.patch = patchStub as any;
    router.delete = deleteStub as any;
  });

  describe('configureEndpoints', () => {
    let routes: RouteConfig[];
    beforeEach(() => {
      routes = [];
    });

    it('should register GET Requests properly', () => {
      routes.push({
        methodName: 'getTest',
        requestType: Request.GET,
        path: '/get'
      });

      router.configureEndpoints(routes, controller);

      expect(getStub).toHaveBeenCalledWith('/get', controller.getTest);
    });

    it('should register PUT Requests properly', () => {
      routes.push({
        methodName: 'putTest',
        requestType: Request.PUT,
        path: '/put'
      });

      router.configureEndpoints(routes, controller);

      expect(putStub).toHaveBeenCalledWith('/put', controller.putTest);
    });

    it('should register POST Requests properly', () => {
      routes.push({
        methodName: 'postTest',
        requestType: Request.POST,
        path: '/post'
      });

      router.configureEndpoints(routes, controller);

      expect(postStub).toHaveBeenCalledWith('/post', controller.postTest);
    });

    it('should register DELETE Requests properly', () => {
      routes.push({
        methodName: 'deleteTest',
        requestType: Request.DELETE,
        path: '/delete'
      });

      router.configureEndpoints(routes, controller);

      expect(deleteStub).toHaveBeenCalledWith('/delete', controller.deleteTest);
    });

    it('should register PATCH Requests properly', () => {
      routes.push({
        methodName: 'patchTest',
        requestType: Request.PATCH,
        path: '/patch'
      });

      router.configureEndpoints(routes, controller);

      expect(patchStub).toHaveBeenCalledWith('/patch', controller.patchTest);
    });
  });
});
