const launch = new Date("August 1, 2026 18:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = launch-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML=
days+"d "
+hours+"h "
+minutes+"m "
+seconds+"s";

},1000);
