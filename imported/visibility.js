function afficher(id)
{
	document.getElementById('logic1').style.visibility="visible";
	document.getElementById('logic2').style.visibility="hidden";
	document.getElementById('logic3').style.visibility="hidden";
}
function affiche(id)
{
	document.getElementById('logic1').style.visibility="hidden";
	document.getElementById('logic2').style.visibility="visible";
	document.getElementById('logic3').style.visibility="hidden";
}      
function affichez(id)
{
	document.getElementById('logic1').style.visibility="hidden";
	document.getElementById('logic2').style.visibility="hidden";
	document.getElementById('logic3').style.visibility="visible";
}    
function afficher1(id)
{
	document.getElementById('app11').style.visibility="visible";
} 
function calcull(){
	var cd= parseInt(document.getElementById('champcd').value);
	var p= parseInt(document.getElementById('champp').value);
	var s= parseInt(document.getElementById('champs').value);
	var v= parseInt(document.getElementById('champv').value);
	var d= 0.5*cd*p*s* Math.pow(v,2); 
	document.getElementById('result').innerHTML=" "+ d +" d";	
}                               