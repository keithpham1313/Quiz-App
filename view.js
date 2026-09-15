function updateView(){
    let html = /*HTML*/`
        <h2>Quiz-App</h2>
    `;

    for(let i = 0; i < quiz.length; i++){

        html += /*HTML*/`
            <h3>${quiz[i].question}</h3>
            <p>${svarListe()}</p>
            <button onlick="answerBtn()"><b>Svar</b></p>
        `;
    };

    appView.innerHTML = html;
}

updateView()


//Liste opp alle svarene
function svarListe(){
    let html = ``;

    for(let p = 0; p < quiz.length; p++){
        html += /*HTML*/`
            <li>${quiz[p].svar}</li>
        `;
    };
}