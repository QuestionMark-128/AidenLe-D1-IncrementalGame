import "./style.css";
//button
const button = document.createElement("button");

button.style.fontSize = "64px";
button.style.borderRadius = "50%";
button.style.width = "128px";
button.style.height = "128px";
button.style.display = "flex";
button.style.alignItems = "center";
button.style.justifyContent = "center";

button.innerHTML = "💎";

//counter
const counter = document.createElement("div");

counter.style.fontSize = "32px";

let gemCount: number = 0;
function updateCount() {
  counter.textContent = `${gemCount} Gems`;
}
updateCount();

button.addEventListener("click", () => {
  gemCount += 1;
  updateCount();
});

//automatic clicking
setInterval(() => {
  gemCount += 1;
  updateCount();
}, 1000);

document.body.append(counter, button);
