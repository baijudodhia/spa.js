import { Router } from "../../../framework/router.js";
import ButtonComponent from "../ui/button.js";

function HeaderComponent() {
  const router = new Router();

  const handleOnClick = (route) => {
    router.change(route);
  };

  // Define a custom function to attach event listeners
  function attachEventListeners() {
    const homeButton = document.querySelector("#homeButton");
    const aboutButton = document.querySelector("#aboutButton");
    const contactButton = document.querySelector("#contactButton");

    homeButton.addEventListener("click", () => handleOnClick("/"));
    aboutButton.addEventListener("click", () => handleOnClick("/about"));
    contactButton.addEventListener("click", () => handleOnClick("/contact"));
  }

  // Create the HTML template using a template literal
  const template = `
    <nav>
      ${ButtonComponent({
        id: "homeButton",
        label: "Home"
      })}
      ${ButtonComponent({
        id: "aboutButton",
        label: "About"
      })}
      ${ButtonComponent({
        id: "contactButton",
        label: "Contact"
      })}
    </nav>
  `;

  // Attach event listeners after rendering the component
  setTimeout(attachEventListeners, 0);

  // Return the HTML template as a string
  return template;
}

export default HeaderComponent;
