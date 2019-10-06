// var pizzaQuantity= $("input#amount").val();
//          return onePizza() * parseInt(pizzaQuantity);
//        }
//        alert(multiply());
//        alert("Current price is " + multiply());
//        $(".toDeliver").show();

// // Alerting the user that their order has been taken
// @@ -81,10 +81,7 @@ $(document).ready(function(){
//        function addDelivery(){
//         return multiply() + 150;
//     }
//         alert(addDelivery());
//         alert("Thank you for your working with us." + "Your pizza shall be delivered at " + deliveryPlace);
//         alert("Total price is" + addDelivery());
//         alert("Thank you for your working with us." + "Your pizza(s) shall be delivered at " + deliveryPlace);
//   });



// }); 









// var pizzaQuantity= $("input#amount").val();
//          return onePizza() * parseInt(pizzaQuantity);
//        }
//        alert(multiply());
//        alert("Current price is " + multiply());
//        $(".toDeliver").show();

// // Alerting the user that their order has been taken
// @@ -81,10 +81,7 @@ $(document).ready(function(){
//        function addDelivery(){
//         return multiply() + 150;
//     }
//         alert(addDelivery());
//         alert("Thank you for your working with us." + "Your pizza shall be delivered at " + deliveryPlace);
//         alert("Total price is" + addDelivery());
//         alert("Thank you for your working with us." + "Your pizza(s) shall be delivered at " + deliveryPlace);
//   });



// }); 
/*function alertFunction(){
  var test = "test";
  var email = "email@domain.com"
  var message = "a message"
  test = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("msg").value;

  alert("Thank you " + test + " for contacting us  We have received your message ");
}*/

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
var   play = "Thanks for odering with us. If you chose to use our delivery service. " +  "Your pizz will be deliverd at " + loca + ".Thank You";
alert(play);
}





// $(document).ready(function() {
   
// function alertFunction(){
//   var test = "test";
//   var email = "email@domain.com"
//   var message = "a message"
//   test = document.getElementById("name").value;
//   email = document.getElementById("email").value;
//   message = document.getElementById("msg").value;

//   alert("Thank you " + test + " for contacting us  We have received your message ");
// }
// });
// $("#home").click(function() {
//   $("#hide").toggle();
 
// });