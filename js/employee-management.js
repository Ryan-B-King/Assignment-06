/*eslint-env browser*/
window.document.addEventListener("DOMContentLoaded", init);
function init() {
    "use strict";
    function getEmployees() {
        "use strict";
        let employee_list = [];
        employee_list[0] = ["Chris Martin", "Web Developer", 1739];
        employee_list[1] = ["Krystal King", "Receptionist", 1234];
        employee_list[2] = ["Wes Lee", "Data Scientist", 7845];
        employee_list[3] = ["Spencer Stevens", "CEO", 8521];
        employee_list[4] = ["Jackie Smith", "Janitor", 3223];
    
        return employee_list;
    };

    function display(employee_list) {
        "use strict";
        let i = 1;

        employee_list.forEach(function (employee) {
            window.console.log(String(i) + ". " + employee);
            i += 1;
        });
        window.console.log("");
    };

    function del(employee_list) {
        "use strict";
        let num;
        let employee;
        num = parseInt(window.prompt("Employee number to delete"), 10);
        if (num < 1 || num > employee_list.length) {
            window.alert("Invalid employee number.");
        } else {
            employee = employee_list.splice(num - 1, 1);
            window.console.log(employee + ' was deleted.');
            /* OR
            delete employee_list[num - 1];
            window.console.log("Employee number " + num + " was deleted.");
            */
        }
    };

    function main() {
        "use strict";
        let employee_list;
        let addBtn = document.getElementById("addBtn");

        employee_list = getEmployees();

        addBtn.addEventListener("click", () => {
            let empTable = document.getElementById("empTable");
            let rowCount = empTable.rows.length;
            let tr = empTable.insertRow(rowCount);

            for (let c = 0; c < employee_list.length; c++) {
                let td = document.createElement('td');
                td = tr.insertCell(c);
            }

            if (c == 0) {           // FIRST COLUMN.
                // ADD A BUTTON.
                let button = document.createElement('input');

                // SET INPUT ATTRIBUTE.
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Delete');

                // ADD THE BUTTON's 'onclick' EVENT.
                button.setAttribute('onclick', 'removeRow(this)');

                td.appendChild(button);
            }
            else {
                // CREATE AND ADD TEXTBOX IN EACH CELL.
                let ele = document.createElement('input');
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', '');

                td.appendChild(ele);
            }

        });

        display(employee_list);
        
    };
    main();
};


