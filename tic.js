
var flag=1;
var flag2=1;
function rules(){
    console.log("Called")
    const obj = document.getElementById("ins");
    if(flag){
        obj.innerHTML = "Game starts by just Tap onbox<br><br>First Player starts as <b>Player X </b><br>and<br> SecondPlayer as <b>Player 0</b>"
    }
    else{
        obj.innerHTML = "";
    }
    flag=1-flag;

}

const win_conditions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

function check(){
    for(var i=0;i<win_conditions.length;i++){
        var count=0;
        for(var j=1;j<3;j++){

            if(document.getElementById("b" + win_conditions[i][j]).value==document.getElementById("b" + win_conditions[i][0]).value && document.getElementById("b" + win_conditions[i][0]).value!=""){
                count++;
            }
        }

        if(count==2){
            if(1-flag2){
                console.log("Alertt");
                alert("Player X won!");
            }
            else{
                alert("Player O won!");
            }
        }

    }
}

function myfunc(event){
    if(document.getElementById(event.target.id).value!=""){
        alert("Already occupied cells cannot be changed!");
        return;
    }

    if(flag2){
        document.getElementById(event.target.id).value="X";
        console.log("xx");
    }
    else{
        document.getElementById(event.target.id).value="O";
    }
    flag2=1-flag2;
    check();
}


function myfunc_2(){
    for(var i=1;i<=9;i++){
        document.getElementById("b"+i).value="";
    }
    flag2=1;
    flag=1;
}