// Clear all elements on the page
document.body.innerHTML = "";

// Change the title of the page
document.title = "Error";

// Create and display the error message
const errorMessage = document.createElement("div");
errorMessage.textContent = "Your file cannot be loaded";
errorMessage.style.fontFamily = "Arial, sans-serif";
errorMessage.style.fontSize = "24px";
errorMessage.style.color = "red";
errorMessage.style.textAlign = "center";
errorMessage.style.marginTop = "20vh";

document.body.appendChild(errorMessage);
