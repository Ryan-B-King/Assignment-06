let row = 1;
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addRow);

function addRow() {
    "use strict";

    let name = document.getElementById("empName").value;
    let title = document.getElementById("empTitle").value;
    let extension = document.getElementById("extension").value;

    if (!name || !title || !extension) {
        window.alert("Please fill all the boxes");
        return;
    };

    let empTable = document.getElementById("empTable");
    let newRow = empTable.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = title;
    cell3.innerHTML = extension;
    cell4.innerHTML = "Delete";

    row++;
    return;
};