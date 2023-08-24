player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

console.log (player1Name)
console.log (player2Name)

document.getElementById("playerQuestion").innerHTML = 
"Turno de Pergunta - " + player1Name;

document.getElementById("playerAnswer").innerHTML = 
"Turno de Resposta - " + player2Name;

function send(){
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log (word)

    //Funçao para obter uma letra de uma palavra de acordo com seu indez == charAt()

    //pegar a segunda letra 
charAt1 = word.charAt(1)
console.log (charAt1)


// comprimento / 2
lengthdivide2 = Math.floor(word.length/2);
charAt2 = word.charAt(lengthdivide2);
console.log(charAt2)
// comprimento - 2
lengthMenos2 = word.length - 2;
charAt3 = word.charAt(lengthMenos2);
console.log(charAt3)

removeCharAt1=word.replace(charAt1, "-");
removeCharAt2= removeCharAt1.replace(charAt2, "-");


removeCharAt3= removeCharAt2.replace(charAt3, "-");

console.log(removeCharAt3)

questionWord = "<h4 id='wordDisplay'> P."+ removeCharAt3 + "</h4>";
input_box = "<br> Resposta: <input type='text' id = 'inputCheckBox'>";
checkButton = "<br><br> <button class='btn btn-info' onclick='check()' > checar </button>";
row = questionWord + input_box + checkButton;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";

questionTurn = "player1";
answerTurn = "player2";
}

function check(){

    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    console.log('resposta em caixa baixa -' + answer)

    if(answer == word) {
         if(answerTurn == "player1"){
        player1Score = player1Score + 1 ;
        document.getElementById("player1Score").innerHTML = player1Score;
        console.log("player 1 ganha 1 ponto")
    }else{
        player2Score = player2Score + 1;
        document.getElementById("player2Score").innerHTML = player2Score;
        console.log("player 2 ganha 1 ponto")
    }
 }


if (questionTurn == "player1"){
    questionTurn = "player2";
    document.getElementById("playerQuestion").innerHTML = 
    "Turno de perguntas:" + player2Name;
}else{
    questionTurn = "player1";
    document.getElementById("playerQuestion").innerHTML = 
    "Turno de perguntas:" + player1Name;
}

if (answerTurn == "player1"){
    answerTurn = "player2";
    document.getElementById("playerAnswer").innerHTML=
    "Turno de resposta: " + player2Name;
}else{answerTurn = "player1";
document.getElementById("playerAnswer").innerHTML =
"Turno de Resposta:" + player1Name
}

document.getElementById("output").innerHTML ="";
}
