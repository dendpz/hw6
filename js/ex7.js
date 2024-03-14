const userInput1 = prompt("Enter an integer: ");
const userInput2 = prompt("Enter another integer: ");
const numSum = Number(userInput1) + Number(userInput2);
const paraElement = document.createElement("p");
const spanElement = document.createElement("span");
const contentElement = document.getElementById("content");

if (Number(userInput1) % 1 === 0 && Number(userInput2) % 1 === 0) {
  paraElement.appendChild(document.createTextNode(`${userInput1} + ${userInput2} = `));
  spanElement.textContent = numSum;
  spanElement.style.fontWeight = "bold";
  spanElement.style.color = "red";
  paraElement.appendChild(spanElement);

  contentElement.appendChild(paraElement);
}
else {
  spanElement.textContent = "Error!";
  spanElement.style.fontWeight = "bold";
  spanElement.style.color = "red";
  paraElement.appendChild(spanElement);
  paraElement.innerHTML += ` You must enter integers. You entered "${userInput1}" and "${userInput2}". Try again.`;

  contentElement.appendChild(paraElement);

  console.log("This is a decimal and/or alphabet.");
}