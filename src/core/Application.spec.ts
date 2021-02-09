import path from 'path';
import Application from './Application';

jest.mock('koa');
// tslint:disable-next-line: no-var-requires
import Koa from 'koa';

const useStub = jest.fn();
const listenStub = jest.fn();
(Koa as any).mockImplementation(() => {
  return {
    use: useStub.bind(this),
    listen: listenStub.bind(this)
  };
});

jest.mock('./AppRouter.ts', () => jest.fn());
// tslint:disable-next-line: no-var-requires
import AppRouter from './AppRouter';

const routesStub = jest.fn();
const allowedMethodsStub = jest.fn();
(AppRouter as any).mockImplementation(() => {
  return {
    routes: () => routesStub,
    allowedMethods: () => allowedMethodsStub
  };
});

describe('KoaService', () => {
  let app: Application;
  beforeEach(() => {
    app = new Application({});
  });

  describe('constructor', () => {
    it('should load a properties file from specified path', () => {
      expect(() => {
        // tslint:disable-next-line: no-unused-expression
        new Application({
          propertiesPath: path.join(__dirname, './haru.test.config.json')
        });
      }).not.toThrow();
    });
  });

  describe('initialize', () => {
    // TODO: set up tests once DI and Controller set up is completed
  });

  describe('start', () => {
    it('should use the port from properties if available ', async () => {
      app = new Application({
        propertiesPath: path.join(__dirname, './haru.test.config.json')
      });
      await app.start();

      expect(listenStub).toHaveBeenCalledWith(3030);
    });

    it('should use the default port if no property or arg is provided', async () => {
      await app.start();

      expect(listenStub).toHaveBeenCalledWith(8080);
    });

    it('should use the given port if no property but an arguments is provided', async () => {
      await app.start(2020);

      expect(listenStub).toHaveBeenCalledWith(2020);
    });

    it('should use the routers middlewares', async () => {
      await app.start();

      expect(useStub).toHaveBeenCalledWith(routesStub);
    });

    it('should use the routers allowed methods', async () => {
      await app.start();

      expect(useStub).toHaveBeenCalledWith(allowedMethodsStub);
    });
  });
});
