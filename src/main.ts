import "./style.css";

const button = document.createElement("button");

button.innerHTML = "💎";

button.style.fontSize = "64px";
button.style.borderRadius = "50%";
button.style.width = "128px";
button.style.height = "128px";
button.style.display = "flex";
button.style.alignItems = "center";
button.style.justifyContent = "center";

document.body.append(button);