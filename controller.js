//Svar-knapp
function answerBtn(){
    returnAnswer = returnAnswerAlt();

}

function returnAnswerAlt(returnAns){

    let valgtSvar = quiz.answer[returnAns];

    if(valgtSvar.type === "correct"){
        return "Riktig svar!";
    }
    else{
        return "Feil svar!"
    };
    
}