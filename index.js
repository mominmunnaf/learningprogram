// num1 = parseFloat(prompt("Enter first number"));
// num2 = parseFloat(prompt("Enter second number"));


// sum = num1 + num2;
// sub = num1 - num2;
// mul = num1 * num2;
// div = num1 / num2;
// mod = num1 % num2;

// squ = mul;
// rectr = mul;
// tri = mul/2;
 
// document.write("Enter first Number : " + num1 + "<br/>");
// document.write("Enter second Number : " + num2 + "<br/>");
// document.write(num1 + " + " + num2 + " = " + sum + "<br/>");
// document.write(num1 + " - " + num2 + " = " + sub + "<br/>");
// document.write(num1 + " x " + num2 + " = " + mul + "<br/>");
// document.write(num1 + " / " + num2 + " = " + div + "<br/>");
// document.write(num1 + " % " + num2 + " = " + mod + "<br/>");





// marks = parseInt(prompt());

// if (marks>=80)
//     document.write("You got A+");
// else if (marks>=70) 
//     document.write("You got A");
// else if (marks>=60) 
//     document.write("You got A-");
// else if (marks>=50) 
//     document.write("You got B");
// else if (marks>=40) 
//     document.write("You got C");
// else if (marks>=33) 
//     document.write("You got D");
// else  
//     document.write("You are fail");





// var letter = prompt("Enter any letter to check Vowel/Consonent");

// letter = letter.toLowerCase();

// switch(letter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     document.write("Vowel");
   
//     default:
//     document.write("Consonent");
// }




//Namta//
// var input = parseInt(prompt());
// var last = parseInt(prompt());



// for(x=1; x<=last; x=x+1){
//     var mul = input*x;
//     document.write(input + " x " + x + " = " + mul +"<br/>");
// }



// var i = 1; 
// var sum = 0;

// while(i<=20){

//     if(i % 3 == 0 && i % 5 == 0){
//         sum = sum + i;
//     }

//     i = i+1;
    
// }

// document.write(sum);




//Function

// function add(x,y){
//     var result = (x+y);
//     document.write(result + "<br>");
// }

// function sub(x,y){
//     var result = (x-y);
//     document.write(result + "<br>");
// }

// add(40,30);
// sub(60,20);





// var num = Array();
// for(x=0; x<=4; x++){
//     num[x] = parseInt(prompt());
// }

// // var num=[10,20,30,40,50];
// var sum=0;

// for(x=0; x<=4; x=x+1){
//     document.write(num[x] + "<br>");
//     sum=sum+num[x];
// }

// document.write("Total = " + sum);





// document.getElementById("head").innerHTML = "Good Buy";


// var par = document.querySelector("#pic");
// function message1(){
   
//    par.src = "image/1.jpg";
// }

// function message2(){
   
//     par.src = "image/3.jpg";
//  }



// var photo = ["image/1.jpg", "image/2.jpg", "image/3.jpg"];
// var imgTag = document.querySelector("img");


// var count = 0;

// function next(){
//     count++;
    
//         if (count >= photo.length){
//             count = 0;
//             imgTag.src = photo[count]; 
//         } else {
//             imgTag.src = photo[count];
//         }       
    
// }



// function priv(){
//     count--;
    
//         if (count < 0){
//             count = photo.length - 1;
//             imgTag.src = photo[count]; 
//         } else {
//             imgTag.src = photo[count];
//         }       
    
// }




//Event Listener
// document.querySelector("button").addEventListener("click", function (){
//     alert("Hi");
// });





// var len = document.querySelectorAll(".myButton").length;

// for(i=0; i<len; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
//         var text = this.innerHTML;
//         document.querySelector("h2").innerHTML = text + " is clicked";
    
//     });
// }






// for(i=0; i<5; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
//         var text = this.innerHTML;
//         audioPlay(text);
//         animation(text);
     
//     });
// }

// function audioPlay(text){
//     switch(text){
//         case "A":
//             var audio = new Audio("sound/1.mp3");
//             audio.play();
//             break;

//         case "B":
//             var audio = new Audio("sound/2.mp3");
//             audio.play();
//             break;

//         case "C":
//             var audio = new Audio("sound/3.mp3");
//             audio.play();
//             break;
//     }
// }

// document.addEventListener("keypress", function(event){
//         var text = event.key;
//         audioPlay(text);
//         animation(text);
// });

// function animation(text){
//     var select = document.querySelector("."+text);
//     select.classList.add("anim");

//     setTimeout(function(){
//         select.classList.remove("anim");
//     }, 1000)
// }





// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.fillRect(10,10,200,150);





//jQuery

// $("h2").text("hi")


// $(".myButton").click(function(){
//     var value = this.innerHTML;
//     $("h2").text(value + " is clicked")
// })





//bootstrap


