const model = {
    app: document.getElementById('app'),
    viewState: {},
    data: {
        list:
        [
            {
                question: "Hva er sola?",
                answers: 
                [
                    {
                        altAns:"En planet",
                        type:"wrong",
                    },
                    {
                        altAns:"En måne",
                        type:"wrong",
                    },
                    {
                        altAns:"En stjerne",
                        type:"correct",
                    },
                    {
                        altAns:"En astroide",
                        type:"wrong",
                    },
                ],
            },
            {
                question: "Hvilken planet i solsystemet vårt er den varmeste?",
                answers: 
                [
                    {
                        altAns:"Merkur",
                        type:"wrong",
                    },
                    {
                        altAns:"Venus",
                        type:"correct",
                    },
                    {
                        altAns:"Mars",
                        type:"wrong",
                    },
                    {
                        altAns:"Jupiter",
                        type:"wrong",
                    },
                ],
            },
            {
                question: "Hva heter den største planeten i solsystemet vårt?",
                answers: 
                [
                    {
                        altAns:"Saturn",
                        type:"wrong",
                    },
                    {
                        altAns:"Neptun",
                        type:"wrong",
                    },
                    {
                        altAns:"Uranus",
                        type:"wrong",
                    },
                    {
                        altAns:"Jupiter",
                        type:"correct",
                    },
                ],
            },
            {
                question: "Hva bruker astronomer for å måle de enorme avstandene mellom stjerner og galakser?",
                answers: 
                [
                    {
                        altAns:"Lysår",
                        type:"correct",
                    },
                    {
                        altAns:"Kilometer",
                        type:"wrong",
                    },
                    {
                        altAns:"Lydfart",
                        type:"wrong",
                    },
                    {
                        altAns:"Mil",
                        type:"wrong",
                    },
                ],
            },
            {
                question: "Hva heter galaksen som er nærmest vår galakse?",
                answers: 
                [
                    {
                        altAns:"Melkeveien",
                        type:"wrong",
                    },
                    {
                        altAns:"Orion",
                        type:"wrong",
                    },
                    {
                        altAns:"Andromeda",
                        type:"correct",
                    },
                    {
                        altAns:"Snickers",
                        type:"wrong",
                    },
                ],
            },
        ],
    },
};


