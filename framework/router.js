import { Renderer } from "./renderer.js";

let routesRegistry = {};
let routerContainers = {};

class Router {
  constructor() {}

  fix(route) {
    return route.startsWith("/#") ? route : `/#${route}`;
  }

  init(routes) {
    routes.forEach((route) => {
      this.add(route.path, route.page, route?.children);
    });
  }

  add(path, page, children) {
    const fixedPath = this.fix(path);

    if (children && children.length > 0) {
      children.forEach((childRoute) => {
        const childPath = `${fixedPath}${
          childRoute.path.includes("**") ? "/**" : "" + childRoute.path
        }`;

        if (!routerContainers[fixedPath]) {
          routerContainers[fixedPath] = [];
        }

        routerContainers[fixedPath].push(childPath);

        this.add(childPath, childRoute.page, childRoute?.children);
      });
    }

    routesRegistry[fixedPath] = page;

    if (fixedPath.endsWith("**") && !fixedPath.endsWith("/**")) {
      delete routesRegistry[fixedPath];

      routesRegistry[fixedPath.replace("**", "/**")] = page;
    }
  }

  change(pathname) {
    pathname = this.fix(pathname);

    if (!routesRegistry[pathname]) {
      const errorComponent = routesRegistry["/#/**"];

      window.history.pushState(
        { prevUrl: window.location.href },
        pathname,
        window.location.origin + pathname,
      );

      const browserRouter = document.querySelector(
        `[router-id="${this.findRouterContainer(pathname)}"]`,
      );

      new Renderer().update(browserRouter, errorComponent);
    } else if (routesRegistry[pathname]) {
      window.history.pushState(
        { prevUrl: window.location.href },
        pathname,
        window.location.origin + pathname,
      );

      const browserRouter = document.querySelector(
        `[router-id="${this.findRouterContainer(pathname)}"]`,
      );

      new Renderer().update(browserRouter, routesRegistry[pathname]);
    }
  }

  findRouterContainer(pathname) {
    for (const key in routerContainers) {
      console.log(key, pathname);
      console.log(routerContainers[key].includes(pathname));

      if (routerContainers[key].includes(pathname)) {
        return key;
      }
    }
    return "/#/";
  }
}

function BrowserRouter(id, path) {
  return `<div id="${id}" router-id="${new Router().fix(path)}"></div>`;
}

export { BrowserRouter, Router };
