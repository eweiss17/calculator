var numb = "";
$(document).ready(function() {
  var numb2 = "";
  var answer = "";
  var operator = "";
  var stack = new Array();
  var checker = false;
  $(".key").on("click", function(event) {
    var input = this.id;
    
      if ($.isNumeric(input)) {
        numb = numb + input;
        $("#answerBox").html("<p>"+numb+"</p>");
      }
      else if (input == "equal"){
        //console.log("From equals event " + stack);
       // $("#answerBox").html("<p>"+numb+"</p>");
        stack.push(numb);
        evaluate();
      }
      else if (input == "add") {
        stack.push(numb);
        operator = "+";
        numb = "";
        checker = true;
      }
       else if (input == "sub") {
        stack.push(numb);
        operator = "-";
        numb = "";
        checker = true;
      }
       else if (input == "mult") {
        stack.push(numb);
        operator = "*";
        numb = "";
        checker = true;
      }
       else if (input == "div") {
        stack.push(numb);
        operator = "/";
        numb = "";
        checker = true;
      }
      else if (input == "ce"){
        //Clears current
        numb = ""; 
        $("#answerBox").html("<p>"+0+"</p>");
      }
      else if (input == "ac") {
        //Clears everything
        numb = ""; 
          for (i = 0; i < stack.length; i++) {
          stack.pop();
          }
        $("#answerBox").html("<p>"+0+"</p>");
      }
    else if (input == "point") {
        numb = numb + '.';
        $("#answerBox").html("<p>"+numb+"</p>");
    }
      else {
        console.log("How did this happen?");
      }
    if (stack.length > 2 && checker == true) {
      evaluate();
    }
    if (checker == true) {
      stack.push(operator);
      // console.log(stack);
      checker = false;
    }
  });
  
   function evaluate() {
    console.log(stack);
    var value2 = parseFloat(stack.pop());
    var op = stack.pop();
    var value = parseFloat(stack.pop());
    var answer = "";
     
     console.log(stack);
    if (op == "+" ) {
      answer = value + value2;
      $("#answerBox").html("<p>"+answer+"</p>");
    }
    else if (op == "-") {
      answer = value - value2;
      $("#answerBox").html("<p>"+answer+"</p>");
    }
    else if (op == "*") {
      answer = value * value2;
      $("#answerBox").html("<p>"+answer+"</p>");
    }  
    else if (op == "/") {
      answer = value / value2;
      $("#answerBox").html("<p>"+answer+"</p>");
    }
     else {
       console.log("This is a bug in the evaluation.");
     }
     // stack.push(answer);
     numb = answer;
  }
})