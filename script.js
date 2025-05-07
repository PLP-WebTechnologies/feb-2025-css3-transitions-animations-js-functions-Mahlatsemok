const animateBtn = document.getElementById("animateBtn");
const imgElement = document.getElementById("imgElement");

// Default: Enable animations if no preference saved
if (localStorage.getItem("animationEnabled") === null) {
  localStorage.setItem("animationEnabled", "true");
}

function triggerAnimation() {
  const isEnabled = localStorage.getItem("animationEnabled") === "true";
  if (!isEnabled) return;

  // Animate button
  animateBtn.classList.remove("bounce");
  void animateBtn.offsetWidth; // reflow
  animateBtn.classList.add("bounce");

  // Animate image
  imgElement.classList.remove("spin");
  void imgElement.offsetWidth; // reflow
  imgElement.classList.add("spin");
}

function toggleAnimationPref() {
  const current = localStorage.getItem("animationEnabled") === "true";
  localStorage.setItem("animationEnabled", !current);
  alert("Animations are now " + (!current ? "ON" : "OFF"));
}

// Bind animation to button click
animateBtn.addEventListener("click", triggerAnimation);
