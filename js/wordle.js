var height=6;//Number of guesses
var width=5;//length of the word


var row=0;//current guss(attempt #)
var col=0;//current letter for that attempt


var gameOver=false;
var word="SQUID";




window.onload=function(){
    intialize();
}




function intialize(){


    //create the game board
    for(let r=0; r<height;  r++){
        for(let C=0; C<width; C++){
            let tile=document.createElement("span");
            tile.id=r.toString() + "-"+C.toString();
            tile.classList.add("tile");
            tile.innerText="";
            document.getElementById("board").appendChild(tile);
        }
    }


    //Listen for keyup
    document.addEventListener("keyup", (e) => {
        if(gameOver) return;


        //alert(e.code);
        if("KeyA" <= e.code && e.code <= "KeyZ"){
            if (col<width){
                let currentTile=document.getElementById(row.toString()+"-"+col.toString());
                if(currentTile.innerText==""){
                    currentTile.innerText=e.code[3];
                    col++;
                }
                   
            }
        }
            else if(e.code=="Backspace"){
                if(0<col&&col<=width){
                    col--;
                }
                let currentTile=document.getElementById(row.toString()+"-"+col.toString());
                currentTile.innerText="";
        }
        else if (e.code=="Enter"){
            update();
            row++; //start new row
            col=0 //start at 0 for new row
        }


        if(!gameOver&&row==height){
            gameOver=True;
            document.getElementById("answer").innerText=word;


        }
    })
}


function update(){
    let correct=0;
    for (let c=0; c<width; c++){
        let currentTile=document.getElementById(row.toString()+"-"+col.toString());
        let letter=currentTile.innerText;


        //Is it in the corect position?
        if (word[c]==letter){
            tile.classList.add("correct");
            correct++;
        }//Is it in the word?
        else if(word.includes(letter)){
            currentTile.classList.add("present");
        }//Not in the word
        else{
            currentTile.classList.add("absent");
        }


        if(correct==width){
            gameOver=true;
           
        }
}


}

