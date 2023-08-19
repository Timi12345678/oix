var tura = document.querySelector('#tura');
console.log(tura);

var p1 = document.querySelector('#p1');
console.log(p1);
var p2 = document.querySelector('#p2');
console.log(p2);

var p3 = document.querySelector('#p3');
console.log(p3);

var p4 = document.querySelector('#p4');
console.log(p4);

var p5 = document.querySelector('#p5');
console.log(p5);

var p6 = document.querySelector('#p6');
console.log(p6);

var p7 = document.querySelector('#p7');
console.log(p7);

var p8 = document.querySelector('#p8');
console.log(p8);

var p9 = document.querySelector('#p9');
console.log(p9);
var wygrana = document.querySelector('#wygrana');
console.log(wygrana);
var turaGracza = "O";
tura.innerHTML = "Tura"+turaGracza;
function spr(){
    if( p1.innerHTML==p2.innerHTML&& p2.innerHTML==p3.innerHTML && p1.innerHTML!='-'||
        p4.innerHTML==p5.innerHTML&& p5.innerHTML==p6.innerHTML&& p4.innerHTML!='-' ||
        p7.innerHTML==p8.innerHTML&& p8.innerHTML==p9.innerHTML&& p7.innerHTML!='-' ||
        p1.innerHTML==p4.innerHTML&& p4.innerHTML==p7.innerHTML&& p1.innerHTML!='-' ||
        p2.innerHTML==p5.innerHTML&& p5.innerHTML==p8.innerHTML&& p2.innerHTML!='-' ||
        p3.innerHTML==p6.innerHTML&& p6.innerHTML==p9.innerHTML&& p3.innerHTML!='-' ||
        p1.innerHTML==p5.innerHTML&& p5.innerHTML==p9.innerHTML&& p1.innerHTML!='-' ||
        p3.innerHTML==p5.innerHTML&& p5.innerHTML==p7.innerHTML&& p3.innerHTML!='-'
        ){
        return true;
    } else {
        return false;
    }
}
p1.onclick = function(){
    if(turaGracza == "O"){
        p1.innerHTML = "O";
        turaGracza = "X";
    }else{
        p1.innerHTML = "X";
        turaGracza = "O";
    }
    if(spr()){
        if(turaGracza == "X"){
            turaGracza = "O"
        }else{
            turaGracza = "X"
        }
        wygrana.innerHTML = "Wygrał gracz"+turaGracza;
    }else{
        tura.innerHTML = "Tura "+turaGracza;
    }

    
}
p2.onclick = function(){
    if(turaGracza == "O"){
        p2.innerHTML = "O";
        turaGracza = "X";
    }else{
        p2.innerHTML = "X";
        turaGracza = "O";
    }
    if(spr()){
        if(turaGracza == "X"){
            turaGracza = "O"
        }else{
            turaGracza = "X"
        }
        wygrana.innerHTML = "Wygrał gracz"+turaGracza;
    }else{
        tura.innerHTML = "Tura "+turaGracza;
    }

    
}
p3.onclick = function(){
    if(turaGracza == "O"){
        p3.innerHTML = "O";
        turaGracza = "X";
    }else{
        p3.innerHTML = "X";
        turaGracza = "O";
    }
    if(spr()){
        if(turaGracza == "X"){
            turaGracza = "O"
        }else{
            turaGracza = "X"
        }
        wygrana.innerHTML = "Wygrał gracz"+turaGracza;
    }else{
        tura.innerHTML = "Tura "+turaGracza;
    }

    
}
p4.onclick = function(){
    if(turaGracza == "O"){
        p4.innerHTML = "O";
        turaGracza = "X";
    }else{
        p4.innerHTML = "X";
        turaGracza = "O";
    }
    if(spr()){
        if(turaGracza == "X"){
            turaGracza = "O"
        }else{
            turaGracza = "X"
        }
        wygrana.innerHTML = "Wygrał gracz"+turaGracza;
    }else{
        tura.innerHTML = "Tura "+turaGracza;
    }
    
}
p5.onclick = function(){
    if(turaGracza == "O"){
        p5.innerHTML = "O";
        turaGracza = "X";
    }else{
        p5.innerHTML = "X";
        turaGracza = "O";
    }
    if(spr()){
        if(turaGracza == "X"){
            turaGracza = "O"
        }else{
            turaGracza = "X"
        }
        wygrana.innerHTML = "Wygrał gracz"+turaGracza;
    }else{
        tura.innerHTML = "Tura "+turaGracza;
    }

    
}
p6.onclick = function(){
    if(turaGracza == "O"){
        p6.innerHTML = "O";
        turaGracza = "X";
    }else{
        p6.innerHTML = "X";
        turaGracza = "O";
    }
    if(spr()){
        if(turaGracza == "X"){
            turaGracza = "O"
        }else{
            turaGracza = "X"
        }
        wygrana.innerHTML = "Wygrał gracz"+turaGracza;
    }else{
        tura.innerHTML = "Tura "+turaGracza;
    }

    
}
p7.onclick = function(){
    if(turaGracza == "O"){
        p7.innerHTML = "O";
        turaGracza = "X";
    }else{
        p7.innerHTML = "X";
        turaGracza = "O";
    }
    if(spr()){
        if(turaGracza == "X"){
            turaGracza = "O"
        }else{
            turaGracza = "X"
        }
        wygrana.innerHTML = "Wygrał gracz"+turaGracza;
    }else{
        tura.innerHTML = "Tura "+turaGracza;
    }

    
}
p8.onclick = function(){
    if(turaGracza == "O"){
        p8.innerHTML = "O";
        turaGracza = "X";
    }else{
        p8.innerHTML = "X";
        turaGracza = "O";
    }
    if(spr()){
        if(turaGracza == "X"){
            turaGracza = "O"
        }else{
            turaGracza = "X"
        }
        wygrana.innerHTML = "Wygrał gracz"+turaGracza;
    }else{
        tura.innerHTML = "Tura "+turaGracza;
    }

    
}
p9.onclick = function(){
    if(turaGracza == "O"){
        p9.innerHTML = "O";
        turaGracza = "X";
    }else{
        p9.innerHTML = "X";
        turaGracza = "O";
    }
    if(spr()){
        if(turaGracza == "X"){
            turaGracza = "O"
        }else{
            turaGracza = "X"
        }
        wygrana.innerHTML = "Wygrał gracz"+turaGracza;
    }else{
        tura.innerHTML = "Tura "+turaGracza;
    }

    
}



