function generateTable(table)
{
    const p = document.getElementById("p4");
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = 0; i < 6; i++) {
        // creates a table row
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            if (table[i][j] == 0)
            {
                const cell = document.createElement("td");
                row.appendChild(cell);
            }
            else if(table[i][j] == 1)
            {
                const cell1 = document.createElement("td")
                cell1.setAttribute("class", "player1");
                row.appendChild(cell1);
            }
            else if(table[i][j] == 2)
            {
                const cell2 = document.createElement("td")
                cell2.setAttribute("class", "player2");
                row.appendChild(cell2);
            }
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    p.appendChild(tbl);
}
function createTable()
{
    let table = new Array(6);
    for(let i=0;i<6;i++)
    {
        table[i] = new Array(7);
        if (i%2 == 0)
        {
            table[i].fill(2);
        }
        else
        {
            table[i].fill(1);
        }
    }
    generateTable(table);
}