function pole ()
{
    var a = document.getElementById("bok1").value;
   
    var b = document.getElementById("bok2").value;
   
    var c = document.getElementById("bok3").value;
   
    var obwod = parseInt(a) + parseInt(b) + parseInt(c);
    
    var obwod_polowa = parseInt(obwod)/2;
    
    var pole = Math.sqrt (parseInt (obwod_polowa)*((parseInt(obwod_polowa)-parseInt(a))*(parseInt(obwod_polowa)-parseInt(b))*(parseInt(obwod_polowa)-parseInt(c))));
    
    document.getElementById("wynik").innerHTML = pole;
}

