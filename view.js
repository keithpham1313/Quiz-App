function updateView(){
    let html = /*HTML*/`
        <h2>Quiz-App</h2>
    `;

    for(let i = 0; i < quiz.length; i++){

        html += /*HTML*/`
            <h3>${quiz[i].question}</h3>
            <p>${svarFun()}</p>
            <button onlick="answerBtn()"><b>Svar</b></p>
        `;
    };

    appView.innerHTML = html;
}

updateView()


//Liste opp alle svarene
function svarFun(){
    let html = ``;

    for(let i = 0; i < quiz.svar.length; i++){
        html += /*HTML*/`
            <li>${quiz.svar[i].altanswer}</li>
        `;
    };
}