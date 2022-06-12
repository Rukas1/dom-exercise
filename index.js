function getQuizzez() {
    const xhr = new XMLHttpRequest();
    let requestURL = 'https:/rukas1.github.io/dom-exercise/quizz.json';
    xhr.open("GET", requestURL, false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}

function createQuizz({title, choices, answerText, credit}) {

    let actions = "";
    for (let i = 0 ; i < choices.length ; i++) {
        actions += `<button class="btn">${choices[i]}</button>`
    }
    let pattern = `
        <div class="box">
            <h4>${title}</h4>
            <div class="btn-box">
                ${actions}
            </div>
            <p class="answer">${answerText}</p>
            <p class="credit">${credit}</p>
        </div>`;
    document.querySelector(".container").insertAdjacentHTML("beforeend", pattern);    
}

function actionOnClick(btn) {
    let answer = document.querySelector(".answer");
    answer.setAttribute("class", "answerVis");
}

let data = getQuizzez();
for (let i = 0 ; i < data.quizzez.length ; i++) {
    createQuizz(data.quizzez[i]);
}

let btns = document.querySelectorAll(".btn");
console.log(btns);
for (let i = 0 ; i < btns.length ; i++) {
    btns[i].addEventListener("click", actionOnClick)
}
