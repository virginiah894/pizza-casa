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
function alertFunction(){
  var test = "test";
  var email = "email@domain.com"
  var message = "a message"
  test = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("msg").value;

  alert("Thank you " + test + " for contacting us  We have received your message ");
}