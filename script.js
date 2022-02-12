const questions = document.querySelectorAll('.question');
const arrowDown = document.querySelectorAll('.arrow-down');
const answers = document.querySelectorAll('.answer');

for(let i = 0; i < questions.length; i++){
    answers[i].style.display = 'none';

    questions[i].addEventListener('click', function(){
        // (answers[i].style.display ==='none') ? answers[i].style.display = "block" : answers[i].style.display = "none";

        if(answers[i].style.display === 'none'){
            answers[i].style.display = 'block';
            arrowDown[i].style.transform = 'rotate(180deg)';
        } else {
            answers[i].style.display = "none";
            arrowDown[i].style.transform = 'rotate(0deg)';
        }
    })
}