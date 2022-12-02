function start()
{
    let p1 = document.getElementById("player1");
    let p2 = document.getElementById("player2");
    if(!p1.value || !p2.value)
    {
        alert("Vous avez oublié d'indiquer un ou plusieurs nom(s) de joueur(s)");
        return;
    }
    document.getElementById("btnStart").style.display = "none";
    const p4 = new Puissance4("p4");
}
class Puissance4
{
    constructor(element_id)
    {
        this.rows =6;
        this.cols =7;
        this.move = -1;
        this.body = new Array(this.rows);
        this.player1 = 0;
        this.player2 = 0;
        this.winner=null;
        for(let i=0;i<this.rows;i++)
        {
            this.body[i] = new Array(this.cols); //remplissage tableau
            this.body[i].fill(0);
        }

        /*for (var i=0; i < this.rows;i++)
        {
            for (var j=0;j<this.cols;j++)      //Test remplissage
            {
                console.log(this.body[i][j]);
            }
        }*/
        this.element =document.querySelector("#p4");
        this.element.addEventListener('click', (event) => this.handle_click(event));
        this.render(this.element);
    }
    render(table)
{
    table.innerHTML="";
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = 0; i < this.rows; i++) {
        // creates a table row
        const row = document.createElement("tr");
        row.setAttribute("id",i);

        for (let j = 0; j < this.cols; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            if (this.body[i][j] == 0)
            {
               let cell = document.createElement("td");
                row.appendChild(cell);
            }
            else if(this.body[i][j] == 1)
            {
                const cell1 = document.createElement("td")
                cell1.setAttribute("class", "player1");
                row.appendChild(cell1);
            }
            else if(this.body[i][j] == 2)
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
    table.appendChild(tbl);
}
handle_click(event)
{
    if(this.move>=42 || this.winner)
    {
        if(this.winner)
        {
            let playerWin ="player" + ((this.move%2)+1);
            playerWin = document.getElementById(playerWin);
            if((this.move%2)+1 == 1)
            {
                this.player1 ++;
            }
            else if((this.move%2)+1 == 2)
            {
                this.player2 ++;
            }
            alert("The winner is "+ playerWin.value);
            alert("Le score est de " + this.player1 + "- " +this.player2);
        }
        if(confirm("Gamer Over\nVoulez-vous rejouer?.") == true)
        {


            this.restart();
            return;
        }
        else
        {
            return;
        }
    }
    let col = parseInt(event.target.cellIndex);
    this.play(col);
}
play(col)
{
    let row = this.rows-1;
    if(col!="undefined")
    {

        while(this.body[row][col]!= 0)
        {
            row--;
        }
        if(row!="undefined")
        {
            this.move++;
            this.body[row][col] = (this.move%2)+1;


        }
        else
        {
            return;
        }
    }
    else
    {
        return;
    }
    this.render(this.element);
    this.win(row,col,(this.move%2)+1);
}
win(row,col,turn)
{
    let win = 0; //horizontal
    for(let i=0;i<this.cols;i++)
    {

        if(this.body[row][i] == turn)
        {
            win++;
            if(win == 4)
            {
                this.winner = true;
                return;
            }
        }
        else
        {
            win = 0;
        }
    }
    win = 0; //vertical
    for(let i=0;i<this.rows;i++)
    {
        if(this.body[i][col] == turn)
        {
            win++;
            if(win == 4)
            {
                this.winner = true;
                return;
            }
        }
        else
        {
            win = 0;
        }
    }
    win = 0; //oblique
    let diagCol;
    let diagRow
    for(let i=0;i<4;i++)
    {
        diagCol = col-i;
        diagRow = row+i;
        if(this.body[diagRow][diagCol] == turn)
        {
            win++;
          //  console.log(win+"A")
        }
        else
        {
            break;
        }
        if(diagCol ==0||diagRow==5)
        {
            break;
        }

    }
    if(win == 4)
    {
        this.winner = true;
        return;
    }
    for(let i =0;i<4;i++)
    {
       // console.log(win+"B");
        diagRow = row-i;
        diagCol = col+i;
            if(this.body[diagRow][diagCol] == turn)
            {
                if(i>0)
                {

                    win++;
                    if(win == 4)
                    {
                        this.winner = true;
                        return;
                    }
                }
            }
            else
            {
                break;
            }
            if(diagRow == 0||diagCol ==6)
            {
             // console.log("bug");
             break;
            }
    }
    win = 0;     //anti-oblique
    for(let i=0;i<4;i++)
    {
        diagCol = col-i;
        diagRow = row-i;
        if(this.body[diagRow][diagCol] == turn)
        {
            win++;
            //  console.log(win+"A")
        }
        else
        {
            break;
        }
        if(diagCol ==0||diagRow==0)
        {
            break;
        }

    }
    if(win == 4)
    {
        this.winner = true;
        return;
    }
    for(let i =0;i<4;i++)
    {
        // console.log(win+"B");
        diagRow = row+i;
        diagCol = col+i;
        if(this.body[diagRow][diagCol] == turn)
        {
            if(i>0)
            {

                win++;
                if(win == 4)
                {
                    this.winner = true;
                    return;
                }
            }
        }
        else
        {
            break;
        }
        if(diagRow == 5||diagCol ==6)
        {
            // console.log("bug");
            break;
        }
    }
}
restart()
{
    for(let i=0;i<this.rows;i++)
    {
        this.body[i].fill(0);
    }
    this.winner = false;
    this.move = 0;
    this.render(this.element);
}
}