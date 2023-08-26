import { Router } from "./router.js";

class Renderer {
  constructor() {}

  init(rootId, rootComponent) {
    const root = document.querySelector(rootId);

    root.innerHTML = "";
    root.appendChild(rootComponent());

    const router = new Router();

    const pathname = window.location.pathname + window.location.hash;
    router.change(pathname);
  }

  update(parent, child) {
    console.log(parent);
    if (typeof child === "function") {
      parent.innerHTML = child();
    } else {
      parent.innerHTML = child;
    }
  }

  render(htmlString) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    return template.content.firstElementChild;
  }
}

export { Renderer };
