const btns = document.querySelectorAll('.btn');
const screen = document.querySelectorAll('.screen');
const equalBtn = document.querySelectorAll('.btn-equal');
const clearBtn = document.querySelectorAll('.clear-equal');


for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    })
}


equalBtn.addEventListener('click', function(){
    let value = eval(screen.value);
    screen.value = value;

})

clearBtn.addEventListener('click', function(){
    screen.value = '';
})