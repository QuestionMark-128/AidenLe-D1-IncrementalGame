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
button.style.cursor = "pointer";

button.textContent = "💎";

//counter
const counter = document.createElement("div");

counter.style.fontSize = "32px";

//upgrade button
const upgrade1 = document.createElement("button");
const upgrade1Cost = 10;

upgrade1.disabled = true;

upgrade1.textContent = "Miner: + 1gem/sec Cost: 10 Gems"

//append elements
document.body.append(counter, button, upgrade1);

//gem variables
let gemCount: number = 0;
let delta = 0;

//counter update and upgrade state
function updateCount() {
  counter.textContent = `${gemCount.toFixed(1)} Gems`;
  upgrade1.disabled = gemCount < upgrade1Cost;
}

//gem button
button.addEventListener("click", () => {
  gemCount += 1;
  updateCount();
});

//upgrade button
upgrade1.addEventListener("click", () => {
  if (gemCount >= upgrade1Cost) {
    gemCount -= upgrade1Cost;
    delta += 1;
    updateCount();
  }
});

//automatic clicking with continuous growth
let zero = performance.now();

function animate(time: number) {
  const timePassed = (time - zero) / 1000;
  gemCount += delta * timePassed;
  zero = time;
  updateCount();
  requestAnimationFrame(animate);
};
requestAnimationFrame(animate);

updateCount();