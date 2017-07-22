/*
function kvadratas (krastinesIlgis){
var a="#";
var b="<br>"
var c=a;

for (i=1; i<krastinesIlgis; i++){
    c+=a;
}

for (i=0; i<krastinesIlgis; i++){
document.write(c+b);
}

}

function kvadratas2 (krastinesIlgis){
var divas=document.getElementById("pirmas-divas");
var tekstas="";
var paskutinisSimbolis="%";
var paskutinesEilutesPradzia="%";
for (i=0; i<krastinesIlgis; i++){
    var eilute="";    
    paskutinisSimbolis=paskutinesEilutesPradzia;
if (paskutinesEilutesPradzia=== "#"){
    paskutinesEilutesPradzia === "%";
} else {paskutinesEilutesPradzia==="%";}

    for (j=0; j<krastinesIlgis; j++){
        if(paskutinisSimbolis === "%"){
        eilute=eilute+"#";
        paskutinisSimbolis="#"}
        else {eilute=eilute+"%";
        paskutinisSimbolis="%";

        }   
    }




eilute=eilute + "<br>";
tekstas=tekstas+eilute;
}

divas.innerHTML=tekstas;
}

function kvadratas2 (krastinesIlgis){
var divas=document.getElementById("pirmas-divas");
var tekstas="";
var paskutinisSimbolis="%";
var paskutinesEilutesPradzia="%";
for (i=0; i<krastinesIlgis; i++){
    var eilute="";    
    paskutinisSimbolis=paskutinesEilutesPradzia;
if (paskutinesEilutesPradzia=== "#"){
    paskutinesEilutesPradzia === "%";
} else {paskutinesEilutesPradzia==="%";}

    for (j=0; j<krastinesIlgis; j++){
        if(paskutinisSimbolis === "%"){
        eilute=eilute+"#";
        paskutinisSimbolis="#"}
        else {eilute=eilute+"%";
        paskutinisSimbolis="%";

        }   
    }




eilute=eilute + "<br>";
tekstas=tekstas+eilute;
}

divas.innerHTML=tekstas;
}

function kvadratas3 (krastinesIlgis){
var divas=document.getElementById("pirmas-divas");
var tekstas="";
var paskutinisSimbolis="%";
var paskutinesEilutesPradzia="%";
for (i=0; i<krastinesIlgis; i++){
    var eilute="";     

    for (j=0; j<krastinesIlgis; j++){ 
        if (i===j)       {
        eilute=eilute+"#";          
        } else {eilute=eilute+"%";  }
        }   
    




eilute=eilute + "<br>";
tekstas=tekstas+eilute;
}

divas.innerHTML=tekstas;
}

function kvadratas4 (krastinesIlgis){
var divas=document.getElementById("pirmas-divas");
var tekstas="";
var paskutinisSimbolis="%";
var paskutinesEilutesPradzia="%";
for (i=0; i<krastinesIlgis; i++){
    var eilute="";     

    for (j=0; j<krastinesIlgis; j++){ 
        if (i===j)       {
        eilute=eilute+"#";          
    } else if (i<=j) {eilute=eilute+"#";  }
    else if(i<=j){eilute=eilute+"#";  }
    else {{eilute=eilute+"%";  }}
        }   
    




eilute=eilute + "<br>";
tekstas=tekstas+eilute;
}

divas.innerHTML=tekstas;
}
/////////////////////////////////////////////////////

var pug = 1;

function zaidimas (table){
    
if (table.innerText !== ""){
    return;
}
else if (pug==1){ 
 table.innerText="";
 table.innerText="X";
 pug=0;
}
else {
table.innerText="";
table.innerText="O";
pug=1;
}
vyk();
}

kandis=0;                                               //document ready function jquery pradzioj
function vyk (){                                    //masyva daryti 3 masyvai masyve,,  this, 0,0   (table, eilute, stulpelis) board[eilute][stulpelis]="x"
    if (kandis==1){return;}                             //fnkc aa(board){ var visix = true; (ir sita maut i j fora )for (i=0; i<3;i++){  if(lenta[0(j)][i])!=="X(kairysys)"   {visix = false; break;} if (visivienodi && kairysis!==""){return kairysis}      }}
var pirma = document.getElementById("pirma");  //docquaery selecto virsus kaire //// kairysis=lenta[eilute][0]
var antra = document.getElementById("antra");
var trecia = document.getElementById("trecia");
var ketvirta = document.getElementById("ketvirta");
var penkta = document.getElementById("penkta");
var sesta = document.getElementById("sesta");
var septinta = document.getElementById("septinta");
var astunta = document.getElementById("astunta");
var devinta = document.getElementById("devinta");

if (pirma.innerText==="X" && antra.innerText==="X" && trecia.innerText==="X" || pirma.innerText==="O" && antra.innerText==="O" && trecia.innerText==="O"){
pirma.className="under";
antra.className="under";
trecia.className="under1";
kandis=1;
alert("You Won");
}

else if (ketvirta.innerText==="X" && penkta.innerText==="X" && sesta.innerText==="X" || ketvirta.innerText==="O" && penkta.innerText==="O" && sesta.innerText==="O" ){
ketvirta.className="under";
penkta.className="under";
sesta.className="under1";
kandis=1;
alert("You Won");
}

else if (septinta.innerText==="X" && astunta.innerText==="X" && devinta.innerText==="X" || septinta.innerText==="O" && astunta.innerText==="O" && devinta.innerText==="O"){
septinta.className="under";
astunta.className="under";
devinta.className="under1";
kandis=1;
alert("You Won");
}
////
else if (pirma.innerText==="X" && ketvirta.innerText==="X" && septinta.innerText==="X" || pirma.innerText==="O" && ketvirta.innerText==="O" && septinta.innerText==="O"){
pirma.className="under";
ketvirta.className="under";
septinta.className="under2";
kandis=1;
alert("You Won");
}

else if (antra.innerText==="X" && astunta.innerText==="X" && penkta.innerText==="X" || antra.innerText==="O" && astunta.innerText==="O" && penkta.innerText==="O" ){
antra.className="under";
penkta.className="under";
astunta.className="under2";
kandis=1;
alert("You Won");
}

else if (trecia.innerText==="X" && sesta.innerText==="X" && devinta.innerText==="X" || trecia.innerText==="O" && sesta.innerText==="O" && devinta.innerText==="O"){
trecia.className="under1";
sesta.className="under1";
devinta.className="under1";
kandis=1;
alert("You Won");
}
else if (pirma.innerText==="X" && penkta.innerText==="X" && devinta.innerText==="X" || pirma.innerText==="O" && penkta.innerText==="O" && devinta.innerText==="O"){
pirma.className="under";
penkta.className="under";
devinta.className="under1";
kandis=1;
alert("You Won");
}

else if (trecia.innerText==="X" && penkta.innerText==="X" && septinta.innerText==="X" || trecia.innerText==="O" && penkta.innerText==="O" && septinta.innerText==="O"){
trecia.className="under1";
penkta.className="under";
septinta.className="under2";
kandis=1;
alert("You Won");
}

}

function restart (){
    var pirma = document.getElementById("pirma");
var antra = document.getElementById("antra");
var trecia = document.getElementById("trecia");
var ketvirta = document.getElementById("ketvirta");
var penkta = document.getElementById("penkta");
var sesta = document.getElementById("sesta");
var septinta = document.getElementById("septinta");
var astunta = document.getElementById("astunta");
var devinta = document.getElementById("devinta");
pug=1;
kandis=0;
 pirma.innerText="";
 antra.innerText="";
 trecia.innerText=""; 
 ketvirta.innerText="";
 penkta.innerText="";
 sesta.innerText="";
 septinta.innerText="";
astunta.innerText="";
devinta.innerText="";

pirma.className="";
 antra.className="";
 trecia.className="pirma"; 
 ketvirta.className="";
 penkta.className="";
 sesta.className="pirma";
 septinta.className="";
astunta.className="";
devinta.className="pirma";

}

*/
m=[];

//m=["","",""]
//m[0]=["","",""]
//m[1]=["","",""]
//m[2]=["","",""]



$( document ).ready(function() {
    console.log( "ready!" );
});
gameover=0;
function lenta (ilgis,sunkumas){
   m=[]; 
var xx=document.getElementById("tabas");
xx.innerHTML="";
for(i=0; i<ilgis;i++){  
    var c=[];
var naujastr=document.createElement("tr");

for(j=0; j<ilgis;j++){
    c[j]="";
var naujastd=document.createElement("td");
naujastr.appendChild(naujastd);}

m[i]=c;
xx.appendChild(naujastr);}
zaidimas(ilgis,sunkumas);
 }

pug = 1;
function zaidimas (ilgis,sunkumas){
    $("#tabas td")
    .on("click", function(){
        var divas=$("div")[1]
        if (gameover==1){return};
var td =$(this)
console.log(td.index());
console.log(td.parent().index());
stulpelis = td.index();
eilute =td.parent().index();
if (td.text() !== ""){
    return;}

else if (pug==1){ 
 td.text(); 
 td.text("X");
 td.addClass("red") 
 pug=0;
 divas.innerText="It's O turn";
}

else {
td.text();
td.text("O");
td.addClass("green") 
pug=1;
divas.innerText="It's X turn";
}  

m[stulpelis][eilute]= td.text()
vyk(ilgis,sunkumas);
vyka(stulpelis,eilute,sunkumas);
});

}

function vyk (ilgis,sunkumas){
//stulepeliai
  for (i=0; i<ilgis; i++){
   var x=0;
   var y=0;
   
   for (j=0; j<ilgis; j++){
        if (m[i][j]==="X"){
            if(x==sunkumas){break;}
            x=x+1;
           if (y>0){y=y-1;}
        }
         if (m[i][j]==="O"){
            if (x>0){ x=x-1;}
            y=y+1;
            if(y==sunkumas){break;}
             else if (m[i][j]===""){
            y=0;
            x=0;
        }        
            
        }
     
    }
check(x,y,sunkumas);

  }
///eilute

for (i=0; i<ilgis; i++){
   var x=0;
   var y=0;
   for (j=0; j<ilgis; j++){
        if (m[j][i]==="X"){
            x=x+1;
            if(x==sunkumas){break;}
            if (y>0){y=y-1;}
        }
        else if (m[j][i]==="O"){
            y=y+1;
            if(y==sunkumas){break;}
            if (x>0){ x=x-1;}
        }
        else if (m[j][i]===""){
            y=0;
            x=0;
        }
        


     
    }
check(x,y,sunkumas);

  }
//kryzmai
for (i=0; i<1; i++){
   var x=0;
   var y=0;   
   for (j=0; j<ilgis; j++){
        if (m[j][j]==="X"){
            x=x+1;
            if(x==sunkumas){break;}
            if (y>0){y=y-1;}
        }
        else if (m[j][j]==="O"){
            y=y+1;
            if(y==sunkumas){break;}
            if (x>0){ x=x-1;}
        }
         else if (m[j][j]===""){
            y=0;
            x=0;
        }
     
    }
check(x,y,sunkumas);

  }
//kryzmai atvirksciai
for (i=0; i<1; i++){
   var x=0;
   var y=0;   
   for (j=0; j<ilgis; j++){
        if (m[ilgis-1-j][j]==="X"){
            x=x+1;
            if(x==sunkumas){break;}
            if (y>0){y=y-1;}
        }
        else if (m[ilgis-1-j][j]==="O"){
            y=y+1;
            if(y==sunkumas){break;}
            if (x>0){ x=x-1;}
        }
         else if (m[ilgis-1-j][j]===""){
            y=0;
            x=0;
        }
     
    }
check(x,y,sunkumas);

  }

    
}

function restart (){
    var divas=$("div")[1]
    if (gameover==1){
$("#tabas td").text("");
pug=1;
gameover=0;
lenta(m.length,sunkumas);
divas.innerText="It's X turn";
}else (alert("Game not over"))}


function check (x,y,sunkumas){
    var divas=$("div")[1]
if (x==sunkumas)   {alert(" X won"); gameover=1; x=0; y=0; divas.innerText="X WON";} else if (y==sunkumas) {alert(" O won"); gameover=1; x=0; y=0;divas.innerText="O WON";}


}

function startas (){
     var divas=$("div")[1]
     var divas1=$("div")[0]
    star = document.getElementById("put");
    star1 = document.getElementById("put1");
    pug=1;
    gameover=0;
    sunkumas=star1.value;
    lenta(star.value,star1.value);
    divas.innerText="It's X turn";
    divas1.innerText=("Board size: " + star.value +  " Winning Condition: " +star1.value)
    star.value="";
    star1.value="";
    
}

function vyka (stulpelis, eilute, sunkumas){
var zenklas = m[stulpelis][eilute];
var kiek = 0;
for (i=1; i<=stulpelis && i<m.length - eilute; i++){

    if (zenklas === m[stulpelis-i][eilute+i]){
        kiek++;        
    }
        else {kiek = 0;}
check2 (kiek,sunkumas,zenklas);

}
for (i=1; i<=eilute && i<m.length - stulpelis; i++){

    if (zenklas === m[stulpelis+i][eilute-i]){
        kiek++;        
    }
        else {kiek = 0;}
check2 (kiek,sunkumas,zenklas);

}
////
for (i=1; i<=stulpelis && i<=eilute; i++){

    if (zenklas === m[stulpelis-i][eilute-i]){
        kiek++;        
    }
        else {kiek = 0;}
check2 (kiek,sunkumas,zenklas);

}
for (i=1; i<m.length - eilute && i<m.length - stulpelis; i++){

    if (zenklas === m[stulpelis+i][eilute+i]){
        kiek++;        
    }
        else {kiek = 0;}
check2 (kiek,sunkumas,zenklas);

}





}

function check2 (kiek,sunkumas,zenklas){
    var divas=$("div")[1]
if (kiek == sunkumas-1){    
    pug=1;
    gameover=1;
    alert(zenklas + " Won");
    divas.innerText=zenklas + " Won";
}


}