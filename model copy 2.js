let appView = document.getElementById('app');

let returnAnswer;

let quiz = [

    "Hva er sola?",

    "Hvilken planet i solsystemet vårt er den varmeste?",

    "Hva heter den største planeten i solsystemet vårt?",
 
    "Hva bruker astronomer for å måle de enorme avstandene mellom stjerner og galakser?",

    "Hva heter galaksen som er nærmest vår galakse?",

];

let answer0 = [
    {
        altAns: "En planet", 
        type: "wrong",
    },
    {
        altAns: "En måne", 
        type: "wrong",
    },
    {
        altAns: "En stjerne", 
        type: "correct",
    },
    {
        altAns: "En astroide", 
        type: "wrong",
    },
];

let answer1 = [
    {
        altAns: "Merkur", 
        type: "wrong",
    },
    {
        altAns: "Venus", 
        type: "correct",
    },
    {
        altAns: "Mars", 
        type: "wrong",
    },
    {
        altAns: "Jupiter", 
        type: "wrong",
    },
];

let answer2 = [
    {
        altAns: "Saturn", 
        type: "wrong",
    },
    {
        altAns: "Neptun", 
        type: "wrong",
    },
    {
        altAns: "Uranus", 
        type: "wrong",
    },
    {
        altAns: "Jupiter", 
        type: "correct",
    },
];

let answer3 = [
    {
        altAns: "Lysår", 
        type: "correct",
    },
    {
        altAns: "Kilometer", 
        type: "wrong",
    },
    {
        altAns: "Lydfart", 
        type: "wrong",
    },
    {
        altAns: "Mil", 
        type: "wrong",
    },
];

let answer4 = [
    {
        altAns: "Melkeveien", 
        type: "wrong",
    },
    {
        altAns: "Orion", 
        type: "wrong",
    },
    {
        altAns: "Andromeda", 
        type: "correct",
    },
    {
        altAns: "Snickers", 
        type: "wrong",
    },
];
