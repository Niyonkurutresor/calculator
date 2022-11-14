let screen = document.querySelector('.cal_screen');
let numbers = document.querySelectorAll('.cal_numbers div');
let operators = document.querySelectorAll('.cal_operators div');


let numbersLength = numbers.length;
let operatorsLength = operators.length;

storage1 = '';
storage2 = '';
operator = '';

numbers[11].style.color= 'red'


function workThis(){

    // looping trought numbers
    for(let i =0; i<numbersLength-1; i++){
        numbers[i].addEventListener("click",()=>{
            if(operator === ''){
                storage1 += numbers[i].innerHTML;
                screen.innerHTML = storage1;
            return console.log(storage1)
            
            }
            
            else{
                storage2 += numbers[i].innerHTML;
                screen.innerHTML = storage1 +' '+operator+' '+storage2;
                return console.log(storage2);
            }
        })
    }
    
    // looping throught opperators
    for(let i =0; i<operatorsLength -1; i++){
        operators[i].addEventListener("click",()=>{
            operator = operators[i].innerHTML
            screen.innerHTML = storage1+' '+operator;
           return console.log(operator);
        }) 
    }


    
// equality functionaligy sign functionality
operators[4].addEventListener('click',()=>{

    // to creen screeen adn every thing related to stored numbers
    numbers[11].addEventListener("click",()=>{

        storage1 = '';
        storage2 = '';
        operator = '';
        screen.innerText = '00'
    })
        
    // operator function
    function addition(a,b){
        return  screen.innerHTML = a+b;
    }
    
    function division(a,b){
        return screen.innerHTML = a/b;
    }
    
    function multiplication(a,b){
        return screen.innerHTML = a*b;
    }
    function substracetion(a,b){
        return screen.innerHTML = a-b;
    }

    // heigher older function to perorm the result
    function perform(a,b,operation){
        operation(a,b)
    }

    // dessions to give us result
    switch(operator){

        case '+':
         perform(parseFloat(storage1),parseFloat(storage2),addition);
        break;

    case '-':
        perform(parseFloat(storage1),parseFloat(storage2),substracetion);
        break;
    case '*':
        perform(parseFloat(storage1),parseFloat(storage2),multiplication);
            break;
    case '/':
        perform(parseFloat(storage1),parseFloat(storage2),division);
    // default:
    //     alert('incorect choice');
    //     break;
    }

    storage1 = parseFloat(screen.innerText)
    storage2 = '';
})}

workThis()