let questions = ['What do you usually do at weekends?', "How much time do you spend on the Internet?",
    "What time do you usually get up at weekends?", "How often do you listen to music?",
    "What color is a penguin?", "How do you make a sandwich?", "When did you learn to read?",
    "When did you build your first snowman?", "Who do you want to become in the future?",
    "Can you tell your last dream that you remember?", "Would you like to go fishing? Is yes, why?", 
    "Would you prefer beach vacation or city vacation? Why?", "What do you do in your free time?",
    "At what time do you go to bed?", "What do you do before going to bed?", "What do you do first when you get up?",
    "What do you have in your wardrobe?", "Explain how football works.", "What is a watermelon?",
    "What do you usually do in the morning?", "How often do you play games?", "What is your best recipe?",
    "How big is your family? Name all members.", "What is your favorite dish? Can you make it?",
    "How many days are in December?", "What is the number of your house?", "Describe your room.",
    
];

let groups = ["Name 5 pets.", "Name 6 ball games.", "Name 6 green things.", "Name 4 dishes.",
    "Name 3 famous authors.", "Name 10 fruits.", "Name 4 video games.", "Name 6 words that start with H",
    "Name 5 sweet things.", "Name 7 vegetables.", "Name 6 farm animals.", "Name 4 computer parts.",
    "Name 3 oceans.", "Name 4 birds.", "Name 7 countries.", "Name 5 things that are blue.",
    "Name 5 school subjects.", "Name 6 positive adjectives.", "Name 7 things that are cold.",
    "Name 7 things that you can see in a fridge.", "Name 3 things that you can play with.", 
    "Name 7 things you can find in bathroom.", "Name 4 things you usually do in winter.", 
    "Name 6 professions.", "Name 4 movies.", "Name 5 things that need electricity.", "Name 5 catital cities.",
    
];

function getRandom(max) {
    return Math.floor(Math.random() * (max - 0) + 0);
}

console.log(questions.length);
console.log(groups.length);

let question_card = document.querySelector("#card_one");
let name_card = document.querySelector("#card_two");

let nums_1 = [];
let nums_2 = [];

function returnRandomQuestion() {
    // let randomNum = getRandom(questions.length);
    // let numIndex = nums_1.indexOf(randomNum);
    // console.log(numIndex);
    while (true) {
        let randomNum = getRandom(questions.length);
        let numIndex = nums_1.indexOf(randomNum);
        if (numIndex == -1) {
            question_card.textContent = questions[randomNum];
            nums_1.push(randomNum);
            break
        }
        else {
            randomNum = getRandom(questions.length);
            if (nums_1.length === questions.length) {
                break
            }
        }
        continue

    }
    // for (item of nums_1) {
    //     if (item == randomNum) {
    //         randomNum = getRandom(questions.length);
    //         console.log(randomNum)
    //         // break
    //     }
    //     else {
    //         question_card.textContent = questions[randomNum];
    //         nums_1.push(randomNum);
    //         console.log(randomNum)
    //         break
    //     }
    // }
}

function returnRandomGroup() {
    // let randomNum = getRandom(groups.length);
    // console.log(randomNum);
    // name_card.textContent = groups[randomNum];
    while (true) {
        let randomNum = getRandom(groups.length);
        let numIndex = nums_2.indexOf(randomNum);
        if (numIndex == -1) {
            name_card.textContent = groups[randomNum];
            nums_2.push(randomNum);
            break
        }
        else {
            randomNum = getRandom(groups.length);
            if (nums_2.length === groups.length) {
                break
            }
        }
        continue

    }
}

function clean() {
    nums_1 = [];
    nums_2 = [];

}

