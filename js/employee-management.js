// /*eslint-env browser*/
window.document.addEventListener("DOMContentLoaded", init);
function init() {
    "use strict";
    // GLOBAL VARLIABLES
    let row = 1;
    let employee_list;
    employee_list = getEmployees();

    // STORES INITIAL EMPLOYEES LIST
    function getEmployees() {
        "use strict";

        //CREATES LIST ARRAY
        let employee_list = [];
        employee_list[0] = ["Chris Martin", "Web Developer", "1739"];
        employee_list[1] = ["Krystal King", "Receptionist", "1234"];
        employee_list[2] = ["Wes Lee", "Data Scientist", "7845"];
        employee_list[3] = ["Spencer Stevens", "CEO", "8521"];
        employee_list[4] = ["Jackie Smith", "Janitor", "3223"];
    
        return employee_list;
    };

    // DISPLAYS EMPLOYEES LIST AT LOAD
    function display(employee_list) {
        "use strict";
        let i = 0;

        // RUNS THROUGH EACH ARRAY TO SETUP INITIAL TABLE
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

            // DELETE BUTTON CREATED
            let btn = document.createElement("button");
            btn.innerHTML = "Delete";
            cell4.appendChild(btn);

            i++;
            row++;
        });
        window.console.log("");
    };

    // THIS RESETS FORM AFTER VALID ADD
    function clearFields(){
        "use strict";

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

    // VALIDATES AND ADDS NEW ROW TO EMPLOYEE TABLE
    function addRow(e) {
        "use strict";
        e.preventDefault();
        let name = document.getElementById("empName").value;
        let title = document.getElementById("empTitle").value;
        let extension = document.getElementById("extension").value;

        employee_list.push([name, title, extension]);

        // VALIDATES INPUT AND WARNS USER OF ERRORS
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

        // ONCE VALIDATED - A NEW ROW IS ADDED WITH INPUT
        let empTable = document.getElementById("empTable");
        let newRow = empTable.insertRow(row);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);

        cell1.innerHTML = name;
        cell2.innerHTML = title;
        cell3.innerHTML = extension;
        // DELETE BUTTON CREATED
        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        cell4.appendChild(btn);

        row++;

        totalEmp();
        clearFields();
    };

    // UPDATES TOTAL # OF EMPLOYEES
    function totalEmp(){
        "use strict";
        document.getElementById("totalEmp").innerHTML = "Showing " + row + " Employees";
    };


    // PROGRAM IS RAN HERE
    function main() {
        "use strict";
        let addBtn = document.getElementById("addBtn");
        let delBtn = document.getElementsByName("delete");
        display(employee_list);
        addBtn.addEventListener("click", addRow);
        delBtn.addEventListener("click", delRow);
        totalEmp();
});
    };
    main();
};