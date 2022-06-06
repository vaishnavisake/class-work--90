  player1_name = localStorage.getItem("player1_name");
  player2_name = localStorage.getItem("player2_name");

  player1_score=0;
  player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").onnerHTML = player1_name = ":";

document.getElementById("player1_score").innerHTML = plyer_score;
document.getElementById("player2_score").innerHTML = player2_name;

document.getElementById("player_question").innerHTML = "Question Turn-" + player_question;


function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
     console.log("word in lowerCase = " = word);

    charAt1 = word.charAt1(1);
    console.log("word in lowerCase = " + word);

    charAt = word.charAt(1);
    console.log(charAt1);

    lenght_divide_2 = Mathfloor(word.length/2);
    charAt2 = word.charAt1(lenght_divide_2);
    console.log(charAt2);

    length_minus_1 = word.lenght-1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt,"_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = <h4> </h4>
}

function check()
{

  get_answer = document.getElementById("input_check_box").value;
  answer = get_answer.toLowerCase();
  console.log("answer in lower case - " + answer);

  if(answer == word)
  {

  if (answer_turn == "player1") {
     
    player1_score = player1_score+1;
    document.getElementById("player1_score").innerHTML = player2_score;

  } 
  else 
  {
    player2_score = player2_score + 1;
    document.getElementById("player2_score").innerHTML = player2_score;

  }

  if (question_turn == "player1" ) 
  {
    question_turn="player_2"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;

  }
   else 
  {
    question_turn="player_1"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ; 
  }
  }
  
  if (answer_turn == "player1") 
  {
    answer_turn="player2"
    document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;

  }
   else 
   {
  answer_turn="player1"
    document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1_name;  
  }

  document.getElementById("output").innerHTML = "";
}