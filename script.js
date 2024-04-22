// Selecting elements from the DOM
const container = document.querySelector("#div-container");
const reset = document.querySelector("#reset");

// create grid based on the number provided by the user
function creatDivs(num) {
  const size = 800 / num;
  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.classList.add("divs");
    container.appendChild(div);
  }
}

// prompt user to input number of grids
function promptUser() {
  let input = parseInt(prompt("Enter the number of grids (max 100):"));
  while (isNaN(input) || input <= 0 || input > 100) {
    input = parseInt(
      prompt("Invalid input! Please enter a number between 1 and 100:")
    );
    if (isNaN(input) || input <= 0 || input > 100) {
      alert("Please choose a number between 1 and 100.");
    }
  }
  creatDivs(input);
}

promptUser();

// generate a random a color
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}

// Select all divs and set their background color to a random color when hovered over
const divs = document.querySelectorAll(".divs");
divs.forEach((div) => {
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = randomColor();
  });
});

// Reset the grid color to white
reset.addEventListener("click", () => {
  divs.forEach((div) => {
    div.style.backgroundColor = "white";
  });
});
