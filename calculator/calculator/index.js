// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// let screenValue = '';
// for(item of buttons){
//     item.addEventListener('click', (e) => {
//         console.log(e.target.innerText, 'e.target.innerText');
//          butonText = e.target.innerText;
//         console.log('Button text is', buttonText);
//         if(buttonText == 'X') {
//             butonText = '*';
//             screen.value += buttonText;
//             screen.value = screenValue;
//         }
//         else if (buttonText == 'C') {
//             screen.value = "";
//             screen.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//     })
// }


let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}


    
