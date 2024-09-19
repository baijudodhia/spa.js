import { BrowserRouter, Router } from "../../framework/router.js";
import ButtonComponent from "../components/ui/button.js";

function ContactComponent() {
  const router = new Router();

  const handleOnClick = (route) => {
    router.change(route);
  };

  // Create the HTML template using a template literal
  const template = `
    <nav>
      <div>Contact Page</div>
      ${ButtonComponent({
        id: "emailButton",
        label: "Email"
      })}
      ${ButtonComponent({
        id: "socalMediaButton",
        label: "Social Media"
      })}
      <div>${BrowserRouter("contact", "/contact")}</div>
    </nav>
  `;

  // Attach event listeners after rendering the component
  const attachEventListeners = () => {
    const emailButton = document.querySelector("#emailButton");
    const socalMediaButton = document.querySelector("#socalMediaButton");

    emailButton.addEventListener("click", () => handleOnClick("/contact/email"));
    socalMediaButton.addEventListener("click", () => handleOnClick("/contact/social-media"));
  };

  // Call attachEventListeners after the DOM is ready
  setTimeout(attachEventListeners, 0);

  // Return the HTML template as a string
  return template;
}

export default ContactComponent;
