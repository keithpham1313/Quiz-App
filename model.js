let appView = document.getElementById('app');

let returnAnswer;

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
                altanswer: "En astroide",
                type: "wrong",
            },    
        ],
    },
    {
        question: "Hvilken planet i solsystemet vårt er den varmeste?",
        answer: [
            "Merkur", 
            "Venus", 
            "Mars", 
            "Jupiter"
        ],
    },
    {
        question: "Hva heter den største planeten i solsystemet vårt?",
        answer: [
            "Saturn", 
            "Neptun", 
            "Uranus", 
            "Jupiter"
        ],
    },
    {
        question: "Hva bruker astronomer for å måle de enorme avstandene mellom stjerner og galakser?",
        answer: [
            "Lysår", 
            "Kilometer", 
            "Lydfart", 
            "Mil"
        ],
    },
    {
        question: "Hva heter galaksen som er nærmest vår galakse?",
        answer: [
            "Melkeveien", 
            "Orion", 
            "Andromeda", 
            "Snickers"
        ],
    },
];