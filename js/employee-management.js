// /*eslint-env browser*/
// window.document.addEventListener("DOMContentLoaded", init);
// function init() {
//     "use strict";
    // function getEmployees() {
    //     "use strict";
    //     let employee_list = [];
    //     employee_list[0] = ["Chris Martin", "Web Developer", 1739];
    //     employee_list[1] = ["Krystal King", "Receptionist", 1234];
    //     employee_list[2] = ["Wes Lee", "Data Scientist", 7845];
    //     employee_list[3] = ["Spencer Stevens", "CEO", 8521];
    //     employee_list[4] = ["Jackie Smith", "Janitor", 3223];
    
    //     return employee_list;
    // };

    // function display(employee_list) {
    //     "use strict";
    //     let i = 1;

    //     employee_list.forEach(function (employee) {
    //         window.console.log(String(i) + ". " + employee);
    //         i += 1;
    //     });
    //     window.console.log("");
    // };

    // function main() {
        // "use strict";
        // let employee_list;
        let row = 1;
        let addBtn = document.getElementById("addBtn");

        // employee_list = getEmployees();

        addBtn.addEventListener("click", addRow);

        function addRow() {
            "use strict";

            let name = document.getElementById("empName").value;
            let title = document.getElementById("empTitle").value;
            let extension = document.getElementById("extension").value;

            // if (!name || !title || !extension) {
            //     window.alert("Please fill all the boxes");
            //     return;
            // };

            let empTable = document.getElementById("empTable");
            let newRow = empTable.insertRow(1);
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);
            let cell4 = newRow.insertCell(3);

            cell1.innerHTML = name;
            cell2.innerHTML = title;
            cell3.innerHTML = extension;
            cell4.innerHTML = "Delete";

            row++;
        };

        // display(employee_list);
        
    // };
    // main();
// };


