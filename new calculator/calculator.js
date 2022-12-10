const screen = document.querySelector('.screen p');
const buttons = document.querySelectorAll('button');


// opernds to be used in proses
let operand1 = ''
let operand2 = ''
let operator = ''


// func button
 let func = 'on'
buttons[0].addEventListener('click',()=>{
    if(func == 'off'){
        buttons[0].innerText = 'func'
        buttons[14].innerText = '*'
        buttons[15].innerText = '-'
        buttons[16].innerText = '+'
        func = 'on'
    }
    else{
        buttons[0].innerText = 'sign'
        buttons[14].innerText = ')'
        buttons[15].innerText = 'sin('
        buttons[16].innerText = 'cos('


        func = 'off'

    }
})


const operations = ['*','-','+','/']
// button to listen the click envent
// and display the text in clicked button
for(let i=2;i<buttons.length;i++){
    buttons[i].addEventListener('click',()=>{
        button_value = buttons[i].innerText;

        // operator
        if(button_value == ')') {
            if (screen.innerText.indexOf('sin') !==-1){
                let s = screen.innerText.indexOf('(')
                let numbers = parseFloat(screen.innerText.slice(s+1))
                 operand1 = numbers
            }
            else if (screen.innerText.indexOf('cos') !==-1){
                let s = screen.innerText.indexOf('(')
                let numbers = parseFloat(screen.innerText.slice(s+1))
                 console.log(Math.cos(numbers))
                 operand1 = numbers
            }
            else{
        
                alert('you should close sin and cos only')
                
            }
            // console.log(indexOf('('))
            // console.log(lastIndexOf(')'))
            // // trigonometric()
            
       }  
       else if(operations.includes(button_value)  && operand1!=''){
           operator = button_value;
           console.log(operator)
           screen.innerText = operand1 +' '+ operator
        }
        

        else if(operand1== ''){
            operand1 = operator+operand2
        }



        // first and second operand
        if(operator == ''){
            operand1+=button_value;
            console.log(operand1)
            screen.innerText = operand1
        }
        else if(!operations.includes(button_value)){
            operand2+=button_value;
            console.log(operand2)
            screen.innerText = operand1 +' '+ operator +' '+operand2
        }
       

    })    
}



// mathematicalculation

function mathmatic(first_operand,second_opearand){

    switch(operator){
        case '+':
             return parseFloat(first_operand) + parseFloat(second_opearand);
        

        case '-':
             return parseFloat(first_operand) - parseFloat(second_opearand);
            

        case '*':
               return parseFloat(first_operand) *parseFloat(second_opearand);
              

        case '/':
               return parseFloat(first_operand) / parseFloat(second_opearand);
        
        case 'sin(':
                return Math.sin(parseFloat(operand1))
        
        default:
            return 'mathematical error'

    }

}


// trigonometric funcition

function trigonometric (sign,number){
    switch(sign){
        case "sin(":
            return Math.sign(number)
    
        case 'cos(':
            return Math.cos(number)
        default:
            return 'mathematical error'
    }
}


// equal sign operation 
buttons[17].addEventListener('click',()=>{

   let result;
  
    result = mathmatic(operand1,operand2)
   console.log(result)
   screen.innerText = result

   operand1 = result;
   operand2 = '';
   operator = '';
})


// delet button
const del = buttons[1]

del.addEventListener('click',()=>{
    if(operand2 != '') {
        operand2 = (operand2.substring(0,operand2.length-1))
        screen.innerText = operand1 +' '+operator+' '+ operand2;
    }
    else if(operator != '') {
        operator = '';
        screen.innerText = operand1 +''+operator;
    }
    else{
        operand1 = (operand1.substring(0,operand1.length-1))
        screen.innerText = operand1
    }

})