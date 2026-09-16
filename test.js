let appView = document.getElementById('app');

let quiz = [
    {
        question: "Hva er sola?",
        answer: [
            {
                altanswer: "En planet",
                type: "wrong",
            },
            {
                altanswer: "En måne",
                type: "wrong",
            },
            {
                altanswer: "En stjerne",
                type: "correct",
            },
            {
                altanswer: "En asteroide",
                type: "wrong",
            },
        ],
    },
    {
        question: "Hvilken planet i solsystemet vårt er den varmeste?",
        answer: [
            {
                altanswer: "Merkur",
                type: "wrong",
            },
            {
                altanswer: "Venus",
                type: "correct",
            },
            {
                altanswer: "Mars",
                type: "wrong",
            },
            {
                altanswer: "Jupiter",
                type: "wrong",
            },
        ],
    },
    {
        question: "Hva heter den største planeten i solsystemet vårt?",
        answer: [
            {
                altanswer: "Saturn",
                type: "wrong",
            },
            {
                altanswer: "Neptun",
                type: "wrong",
            },
            {
                altanswer: "Uranus",
                type: "wrong",
            },
            {
                altanswer: "Jupiter",
                type: "correct",
            },
        ],
    },
];


function updateView() {
    let html = `
        <h2>Quiz-App</h2>
    `;

    for (let i = 0; i < quiz.length; i++) {

        html += `
            <h3>${quiz[i].question}</h3>

            <ul>
                ${svarListe(quiz[i].answer, i)}
            </ul>

            <button onclick="answerBtn(${i})">
                <b>Svar</b>
            </button>

            <p id="resultat${i}"></p>
        `;
    }

    appView.innerHTML = html;
}


function svarListe(altSvar, questionIndex) {
    let html = ``;

    for (let p = 0; p < altSvar.length; p++) {
        html += `
            <li>
                <label>
                    <input 
                        type="radio" 
                        name="question${questionIndex}" 
                        value="${p}"
                    >
                    ${altSvar[p].altanswer}
                </label>
            </li>
        `;
    }

    return html;
}


function answerBtn(questionIndex) {

    let valgtSvar = document.querySelector(
        `input[name="question${questionIndex}"]:checked`
    );

    let resultat = document.getElementById(`resultat${questionIndex}`);

    if (!valgtSvar) {
        resultat.innerText = "Velg et svar først!";
        return;
    }

    let svarIndex = valgtSvar.value;
    let svar = quiz[questionIndex].answer[svarIndex];

    if (svar.type === "correct") {
        resultat.innerText = "Riktig svar!";
    } else {
        resultat.innerText = "Feil svar!";
    }
}

updateView();
