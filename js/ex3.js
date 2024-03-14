const paraStyles = () => {
const paraElements = document.getElementsByTagName("p");
Array.from(paraElements).forEach(para => {
  para.style.fontWeight = "bold";
  para.style.backgroundColor = "yellow";
})
}

paraStyles()