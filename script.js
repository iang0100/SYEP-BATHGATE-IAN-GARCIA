console.log("Hello World!");

let myString = "a2b3c";
 console.log(myString);

 let myNumVar = "123";
 console.log(typeof myNumVar);

 console.log(10 + " eggs");
    console.log(10 + 7 + "eggs");
    console.log("eggs" + 10 +7);

   //Both Conditions Need to be true
    console.log(7>3)&&(5<10);

    //OnlyOne condition must be true
    console.log(10>3) || (10>12);

    //If the statement is logical or not
    console.log(!5>3)


    function introduction(name, age){

    console.log("Hello, my name is " +name+ "and I am" + age + "years old." )
    }
    introduction("Ian", 14)
    
    const hour = new Date().getHours();
    let greeting = "";

    if (hour<12){
        greeting="Good morning";
    }else if  (hour<18){
        greeting="Good evening"
     } else {
            greeting="Good evening";
        }

  document.getElementById("greeting").innerText= greeting;


