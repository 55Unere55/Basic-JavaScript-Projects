var X=10;
function Add_numbers_1(){
    document.write(20 + X + "<br>");
}
function Add_numbers_2(){
    document.write (X + 100);
}
Add_nubers_1();
Add_numbers_2();

function Add_numbers_1(){
    document.write(20 + X + "<br>");
}
function Add_numbers_2(){
    document.write (X + 100);
}
Add_nubers_1();
Add_numbers_2();

if (1<2) {
    document.write("The number on the left is smallr then the number on the right.");
}

function get_Date(){
    if(new Date() .getHours() <18){
        document.getElementById("Greeting").innerHTML = "How are You today?";
    }

}

function Age_function(){
    Age=document.getElementById("Age").value;
    if (Age >= 18);
    Vote=You are allowed to vote!;
   }
    else{

    Vote=You are NOT allowed to vote!;
    }
    document.getElementById("How old are you?").innerHTML = Vote;
}

function Time_function(){
    var Time = new Date() .getHours();
    var Replay;
    if (Time <12 == Time ==0){
        Replay = "It is Morning Time!";
    }
    else if (Time >12 == Time <18){
      Replay = "It is afternoon!";
    }
    else {
        Replay = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = "Replay";
}