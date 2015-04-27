 $(document).ready(function() {

     alert("click the buttons");

     $("h2").hide().show("slow");

     $("h3 span").click(function() {
         alert("For more information, check out www.rebootcoding.com");
     });


     $("#button5").hover(function() {
             var $this = $(this);
             $this.data("color", $this.css("color")).css("background-color", "purple");
         },
         function() {
             var $this = $(this);
             $this.css("color", $this.data("color"));
         }
     );


     $("li").each(function(index) {
         console.log(index + ": " + $(this).text());
     });


     var name = "Jerry";

     function showName(name) {}
     showName(name);


     var myArray = [" Dan", " Doug", " Jerry", " Rashad", " Ricky", " Steve", " Vanessa"];

     for (i = 1; i <= 10; i++) {}
     for (i = 0; i < myArray.length; i++) {}


     var car = {
         doors: 4,
         honk: function() {}
     };
     car.honk();


     $("#button1").click(function() {
         document.getElementById("button1 ").innerHTML = ("Hello! My name is " + name);
         console.log("Hello! My name is " + name);
     });

     $("#button2").click(function() {
         document.getElementById("button2 ").innerHTML = "Another one of our students is named " + (myArray[1]);
         console.log(myArray[1]);
     });

     $("#button3").click(function() {
         document.getElementById("button3 ").innerHTML = "How many students are enrolled in the Front-End Engineering Course? " + (i);
         for (i = 1; i <= 10; i++) {
             console.log(i);
         }
     });

     $("#button4").click(function() {
         document.getElementById("button4 ").innerHTML = "These are the names of our ReBoot students: " + (myArray);
         for (i = 0; i < myArray.length; i++) {
             console.log(myArray[i]);
         }
     });

     $("#button5").click(function() {
         var myArray = ["Dan", "Doug", "Jerry", "Rashad", "Ricky", "Steve", "Vanessa"];
         document.getElementById("button5").addEventListener("click", function() {
             for (j = 0; j < myArray.length; j++) {
                 if (myArray[j].substring(0, 1) === "S") {
                     console.log(myArray[j]);
                     alert(myArray[j] + " is present.");
                 }
             }
         });
     });

     $("#button6").click(function() {
         document.getElementById("button6 ").innerHTML = "" + ("Beep! Beep! ");
         console.log("honk ");
         var car = {
             doors: 4,
             honk: function() {
                 console.log("honk ");
             }
         }
     });


 });
