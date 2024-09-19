import { BrowserRouter, Router } from "../../../framework/router.js";
import ButtonComponent from "../../components/ui/button.js";


function SocialMediaComponent() {
  const router = new Router();

  const handleOnClick = (route) => {
    router.change(route);
  };

  // Create the HTML template using a template literal
  const template = `
    <nav>
      <div>Social Media Page</div>
      ${ButtonComponent({
        id: "twitterButton",
        label: "Twitter"
      })}
      ${ButtonComponent({
        id: "facebookButton",
        label: "Facebook"
      })}
      <div>${BrowserRouter("social-media", "/contact/social-media")}</div>
    </nav>
  `;

  // Define a custom function to attach event listeners
  function attachEventListeners() {
    const twitterButton = document.querySelector("#twitterButton");
    const facebookButton = document.querySelector("#facebookButton");

    twitterButton.addEventListener("click", () => handleOnClick("/contact/social-media/twitter"));
    facebookButton.addEventListener("click", () => handleOnClick("/contact/social-media/facebook"));
  }

  // Attach event listeners after rendering the component
  setTimeout(attachEventListeners, 0);

  // Return the HTML template as a string
  return template;
}

export default SocialMediaComponent;
