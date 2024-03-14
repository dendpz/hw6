const addLink = () => {
  const cobElement = document.createElement("li");
  cobElement.id = "cob";
  cobElement.href = "https://www.csulb.edu/college-of-business";
  cobElement.textContent = "College of Business";
  document.getElementById("links").insertBefore(cobElement, document.getElementById("is"));
}

addLink();