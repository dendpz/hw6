const displayText400 = () => {
  const textElement = Array.from(document.getElementsByClassName("400level"));
  textElement.forEach(element => {
    console.log(element.textContent);
  })
}

displayText400();