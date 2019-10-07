

var pizza = document.forms.namedItem("myForm");
function bill(){
  
var num = document.getElementById("numb").value;  
 var pep = parseInt(document.getElementById("pepperoni").value);
 var pep1 = parseInt(document.getElementById("pepperoni1").value);
  var chick= parseInt(document.getElementById("chicken").value);
 var chick1 = parseInt(document.getElementById("chicken1").value);
 var mix = parseInt(document.getElementById("mix").value);
 var mix1 =parseInt( document.getElementById("mix1").value);
 
var txt = "";
var i;
var selected = eval(mix+mix1+pep+pep1+chick+chick1);
for (i = 0; i < pizza.length; i++) {
  if (pizza[i].checked) {
    txt = txt + pizza[i].value;
  }
  else{ txt += "+0";}}
  var tot =eval((eval(txt)+selected)*num);
  document.getElementById("bill").innerHTML= "ksh " + tot ;
  if(isNaN(tot)|| tot == 0){ document.getElementById("bill").innerHTML="Nothing has been selceted";}
}

var loca;
function loc() {   loca = prompt("Please Enter Location For Delivery");
}
function fin(){
var   play = "Thanks for odering with us. If you chose to use our delivery service. " +  "Your pizza will be deliverd at " + loca + ".Thank You";
alert(play);
}
function alertFunction(){
  var test = "test";
  var email = "email@domain.com"
  var message = "a message"
  test = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("msg").value;
  if(test=="" || email=="" || message==""){
  alert("All fields are required");
  return
  }else{

  alert("Thank you " + test + " for contacting us  We have received your message ");
  }
}

// function kam (){
//   num = document.getElementById("numb").value;
//   alert(num);
//   pep1  = document.getElementById("pepperoni").innerHTML
//   alert(pep1);
// }
// function Checkout(price, quantity, delivery){
//   this.price = price;
//   this.quantity = quantity;
//   this.delivery = delivery;
//  }