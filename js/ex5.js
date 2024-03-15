function generateTable() {
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  tblBody.style.textAlign = "center";

  for (let i = 0; i < 12; i++) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const cellText = document.createTextNode(`${i+1}`);
    cell.appendChild(cellText);
    row.appendChild(cell);

    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}

generateTable();