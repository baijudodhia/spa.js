import { Renderer } from "../framework/renderer.js";
import { BrowserRouter, Router } from "../framework/router.js";
import FooterComponent from "./components/layouts/footer.js";
import HeaderComponent from "./components/layouts/header.js";
import AboutComponent from "./pages/about.js";
import ContactComponent from "./pages/contact.js";
import EmailComponent from "./pages/contact/email.js";
import SocialMediaComponent from "./pages/contact/social-media.js";
import FacebookComponent from "./pages/contact/social-media/facebook.js";
import TwitterComponent from "./pages/contact/social-media/twitter.js";
import HomeComponent from "./pages/home.js";

function AppComponent() {
  const router = new Router();

  const routes = [
    {
      path: "/",
      page: HomeComponent,
    },
    {
      path: "/about",
      page: AboutComponent,
    },
    {
      path: "/contact",
      page: ContactComponent,
      children: [
        {
          path: "/email",
          page: EmailComponent,
        },
        {
          path: "/social-media",
          page: SocialMediaComponent,
          children: [
            {
              path: "/facebook",
              page: FacebookComponent,
            },
            {
              path: "/twitter",
              page: TwitterComponent,
            },
            {
              path: "**",
              page: FacebookComponent,
            },
          ],
        },
        {
          path: "**",
          page: SocialMediaComponent,
        },
      ],
    },
    {
      path: "**",
      page: HomeComponent,
    },
  ];

  router.init(routes);

  return new Renderer().render(`
    <div>
      <div>${HeaderComponent()}</div>
      <div>${BrowserRouter("home", "/")}</div>
      <div>${FooterComponent()}</div>
    </div>
  `);
}

export { AppComponent };
