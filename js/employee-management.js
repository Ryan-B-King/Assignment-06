// /*eslint-env browser*/
window.document.addEventListener("DOMContentLoaded", init);
function init() {
    "use strict";
    let row = 1;
    let employee_list;
    employee_list = getEmployees();

    function getEmployees() {
        let employee_list = [];
        employee_list[0] = ["Chris Martin", "Web Developer", "1739"];
        employee_list[1] = ["Krystal King", "Receptionist", "1234"];
        employee_list[2] = ["Wes Lee", "Data Scientist", "7845"];
        employee_list[3] = ["Spencer Stevens", "CEO", "8521"];
        employee_list[4] = ["Jackie Smith", "Janitor", "3223"];
    
        return employee_list;
    };

    function display(employee_list) {

        let i = 0;

        employee_list.forEach(function () {
            
            let empTable = document.getElementById("empTable");
            let newRow = empTable.insertRow(row);
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);
            let cell4 = newRow.insertCell(3);

            cell1.innerHTML = employee_list[i][0];
            cell2.innerHTML = employee_list[i][1];
            cell3.innerHTML = employee_list[i][2];
            cell4.innerHTML = "Delete";

            i++;
            row++;
        });
        window.console.log("");
    };

    function clearFields(){

        document.getElementById("empName").value = "";
        document.getElementById("empTitle").value = "";
        document.getElementById("extension").value = "";

        document.getElementById("empName").style.border="1px solid black";
        document.getElementById("empTitle").style.border="1px solid black";
        document.getElementById("extension").style.border="1px solid black";

        document.getElementById("errName").innerHTML = "";
        document.getElementById("errTitle").innerHTML = "";
        document.getElementById("errExt").innerHTML = "";
    };


    function addRow(e) {
        e.preventDefault();
        let name = document.getElementById("empName").value;
        let title = document.getElementById("empTitle").value;
        let extension = document.getElementById("extension").value;

        employee_list.push([name, title, extension]);

        if (!name || !title || !extension) {
            if (name === ""){
                document.getElementById("empName").style.border="1px solid red";
                document.getElementById("errName").innerHTML = "Complete Field";
            } else {
                document.getElementById("empName").style.border="1px solid black";
            };

            if (title === ""){
                document.getElementById("empTitle").style.border="1px solid red";
                document.getElementById("errTitle").innerHTML = "Complete Field";
            } else {
                document.getElementById("empTitle").style.border="1px solid black";
            };

            if (extension === ""){
                document.getElementById("extension").style.border="1px solid red";
                document.getElementById("errExt").innerHTML = "Complete Field";
            } else {
                document.getElementById("extension").style.border="1px solid black";
            };
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

        totalEmp();
        clearFields();
    };

    function totalEmp(){
        document.getElementById("totalEmp").innerHTML = "Showing " + row + " Employees";
    };


    function main() {
        let addBtn = document.getElementById("addBtn");
        display(employee_list);
        addBtn.addEventListener("click", addRow);
        totalEmp();
    };
    main();
};