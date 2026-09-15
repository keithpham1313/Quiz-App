let appView = document.getElementById('app');

let quiz = [
    {
        question: "Hva er sola?",
        svar: [
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
        svar: [
            "Merkur", 
            "Venus", 
            "Mars", 
            "Jupiter"
        ],
    },
    {
        question: "Hva heter den største planeten i solsystemet vårt?",
        svar: [
            "Saturn", 
            "Neptun", 
            "Uranus", 
            "Jupiter"
        ],
    },
    {
        question: "Hva bruker astronomer for å måle de enorme avstandene mellom stjerner og galakser?",
        svar: [
            "Lysår", 
            "Kilometer", 
            "Lydfart", 
            "Mil"
        ],
    },
    {
        question: "Hva heter galaksen som er nærmest vår galakse?",
        svar: [
            "Melkeveien", 
            "Orion", 
            "Andromeda", 
            "Snickers"
        ],
    },
];