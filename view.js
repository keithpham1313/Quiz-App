function updateView(){
    let html = /*HTML*/`
        <h2>Quiz-App</h2>
    `;

    for(let i = 0; i < quiz.length; i++){

        html += /*HTML*/`
            <h3>${quiz[i].question}</h3>
            
            <p>
            <input type="checkbox">
            ${svarListe()}
            </p>
            
            <button onclick="answerBtn()"><b>Svar</b></p>
        `;
    };

    appView.innerHTML = html;
}

updateView()


//Liste opp alle svarene
function svarListe(indexAns){
    let html = ``;

    for(let p = 0; p < indexAns.length; p++){
        html += /*HTML*/`
            <li>
                <input
                    type="radio"
                >
                
                ${indexAns[p].altanswer}
            </li>
        `;
    };
    return html;
}