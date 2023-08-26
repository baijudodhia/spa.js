import { Renderer } from "./framework/renderer.js";
import { Router } from "./framework/router.js";
import { AppComponent } from "./src/app.js";

window.onload = () => {
  new Renderer().init("#root", AppComponent);
};

window.onpopstate = () => {
  const pathname = window.location.pathname + window.location.hash;
  new Router().change(pathname);
};
