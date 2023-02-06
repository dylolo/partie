var a;
var b;

a= prompt ("Veillez saisir le premier nombre:")
b= prompt ("Veillez saisir le deuxieme nombre:")
a=parseInt(a)
b=parseInt(b)
var QuotientEntier
var ResteDivision
var Ratio
if (b==0){
   alert("syntaxe erreur")
}else
{ 
   QuotientEntier = Math.floor(a/b);
   ResteDivision =parseInt(a%b);
   Ratio=parseFloat( a/b);

alert("Le quotient est:" + QuotientEntier);
alert("la reste de la division est:" + ResteDivision);
alert("Le ratio est:" + Ratio)
