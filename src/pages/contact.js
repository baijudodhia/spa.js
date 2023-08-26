import { BrowserRouter, Router } from "../../framework/router.js";

function ContactComponent() {
  const router = new Router();

  const handleOnClick = (route) => {
    router.change(route);
  };

  // Define a custom function to attach event listeners
  function attachEventListeners() {
    const emailButton = document.querySelector("#emailButton");
    const socalMediaButton = document.querySelector("#socalMediaButton");

    emailButton.addEventListener("click", () => handleOnClick("/contact/email"));
    socalMediaButton.addEventListener("click", () => handleOnClick("/contact/social-media"));
  }

  // Create the HTML template using a template literal
  const template = `
    <nav>
      <div>Contact Page</div>
      <button id="emailButton">Email</button>
      <button id="socalMediaButton">Social Media</button>
      <div>${BrowserRouter("contact", "/contact")}</div>
    </nav>
  `;

  // Attach event listeners after rendering the component
  setTimeout(attachEventListeners, 0);

  // Return the HTML template as a string
  return template;
}

export default ContactComponent;
