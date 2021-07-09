//var v=document.getElementsByClassName("seat");
var book=0;
var rem=document.getElementsByClassName("seat").length;
bs=document.getElementById("bs");

function update(){
    bs.innerHTML=book;
    rs.innerHTML=rem;
}
update();
function myFun(v)
{
    if(v.style.backgroundColor!="rgb(197, 197, 197)")
    {
        v.style.backgroundColor="rgb(197, 197, 197)";
        book++;
        rem--;
        update();
    }
    else{
        v.style.backgroundColor="black";
        rem++;
        book--;
        update();
    }
    
}

