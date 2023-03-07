
var flag=1;
var flag2=1;
var gc=0;

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
            return 1;
        }

    }
    return 0;
}

function myfunc(event){
    if(document.getElementById(event.target.id).value!=""){
        alert("Already occupied cells cannot be changed!");
        return;
    }
    gc++;
    if(flag2){
        document.getElementById(event.target.id).value="X";
        console.log("xx");
    }
    else{
        document.getElementById(event.target.id).value="O";
    }
    flag2=1-flag2;
    var temp = check();
    if(!temp && gc==9){
        alert("Draw!");
        myfunc_2();
    }
}


function myfunc_2(){
    for(var i=1;i<=9;i++){
        document.getElementById("b"+i).value="";
    }
    flag2=1;
    flag=1;
    gc=0;
}