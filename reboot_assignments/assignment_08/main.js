$(document).ready(function() {

    alert("click the buttons");

    $("h2").hide().show("slow");

    $("h3 span").click(function() {
        alert("Check out www.rebootcoding.com");
    });

    $("button5").hover(function() {
            $(this).css($("background", "purple"));
        },
        function() {
            $(this).css("background", "purple").remove();
        });

   var name = "Jerry";

    function showName(name) {}
    showName(name);

    var myArray = ["Dan", " Doug", " Jerry", " Rashad", " Ricky", " Steve", " Vanessa"];

    for (i = 1; i <= 10; i++) {}
    for (i = 0; i < myArray.length; i++) {}

    var car = {
        doors: 4,
        honk: function() {
        }
    };
    car.honk();

    function Function1() {
        document.getElementById("button1 ").innerHTML = ("Hello! My name is " + name);
        console.log("Hello! My name is " + name);
    };


    function Function2() {
        document.getElementById("button2 ").innerHTML = "Another one of our students is named " + (myArray[1]);
        console.log(myArray[1]);
    };


    function Function3() {
        document.getElementById("button3 ").innerHTML = "How many students are enrolled in the Front-End Engineering Course? " + (i);
        for (i = 1; i <= 10; i++) {
            console.log(i);
        }
    };


    function Function4() {
        document.getElementById("button4 ").innerHTML = "These are the names of our ReBoot students: " + (myArray);
        console.log("Hello! My name is " + name);
        for (i = 0; i < myArray.length; i++) {
            console.log(myArray[i]);
        }
    };


    function Function5() {
        var myArray = ["Dan", "Doug", "Jerry", "Rashad", "Ricky", "Steve", "Vanessa"];
        document.getElementById("button5").addEventListener("click", function() {
            for (j = 0; j < myArray.length; j++) {
                if (myArray[j].substring(0, 1) === "R") {
                    console.log(myArray[j]);
                }
            }
        });
    }


    function Function6() {
        document.getElementById("button6 ").innerHTML = "" + ("honk ");
        console.log("honk ");
        var car = {
            doors: 4,
            honk: function() {
                console.log("honk ");
            }
        }

    };

});
