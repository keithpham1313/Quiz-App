function updateView(){
    let html = /*HTML*/`
        <h2>Quiz-App</h2>
    `;

    for(let i = 0; i < model.data.list.length; i++){

        html += /*HTML*/`
            <h3>${model.data.list[i].question}</h3>
            
            <p>
            <input type="checkbox">
            ${svarListe(model.data.list[i].answers)}
            </p>
            
            <button onclick="answerBtn()"><b>Svar</b></button>
        `;
    };
    model.app.innerHTML = html;
}

updateView()


function svarListe(answers){
    let html = /*HTML*/``;

    for(let i = 0; i < answers.length; i++){
        html += /*HTML*/`
            <li>
            <input type="radio">
            ${answers[i].altAns}
            </li>
        `;
    }
    return html;
}