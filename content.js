
const style = document.createElement("style");
style.innerHTML = `
  .scraper-hover {
    outline: 2px solid red !important;
    cursor: crosshair !important;
  }
  .scraper-selected {
    outline: 2px solid green !important;
  }
`;
document.head.appendChild(style);

// Event Listeners
let selectedData = []; // Array to store selected fields

function handleMouseOver(event) {
  event.target.classList.add("scraper-hover");
}

function handleMouseOut(event) {
  event.target.classList.remove("scraper-hover");
}

function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();

  const selectedText = event.target.textContent.trim();
  selectedData.push(selectedText);

  console.log(`Selected Data: ${selectedText}`);

  // Apply "selected" class
  event.target.classList.add("scraper-selected");

  alert(`Selected: ${selectedText}`);
}

// Add Event Listeners
document.addEventListener("mouseover", handleMouseOver);
document.addEventListener("mouseout", handleMouseOut);
document.addEventListener("click", handleClick);

// Cleanup function to remove listeners and styles
function cleanupSelectionMode() {
  document.head.removeChild(style);
  document.removeEventListener("mouseover", handleMouseOver);
  document.removeEventListener("mouseout", handleMouseOut);
  document.removeEventListener("click", handleClick);
  console.log("Selection Mode Ended. Collected Data:", selectedData);
}

// Escape key to exit
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    cleanupSelectionMode();
  }
});
