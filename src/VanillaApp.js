export default function VanillaApp() {
  const appContainer = document.createElement("div");

  appContainer.append(AppButton());
  appContainer.append(AppButton());
  appContainer.append(AppButton());

  return appContainer;
}

function AppButton() {
  const appButton = document.createElement("button");
  // type
  appButton.type = "button";
  // textContent
  appButton.textContent = "Klick mich";
  // event listener
  appButton.addEventListener("click", () => console.log("Hello World"));

  return appButton;
}
