let input=document.getElementById('Raw');
let res = document.getElementById('Result');
let btns=document.querySelectorAll('.btn');
let cross=document.querySelector(".cross");

let string="";
let result="";

let arr=Array.from(btns);

arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        handleInput(e.target.innerHTML);
    });
});

cross.addEventListener('click',()=>{
    handleInput('C');
});

document.addEventListener('keydown',(e)=>{
    let key=e.key;
    if(key>='0' && key<='9'){
        handleInput(key);
    }
    else if(key==='Enter' || key==='='){
        handleInput('=');
    }
    else if(key==='Backspace'){
        handleInput('C');
    }
    else if(key==='Escape'){
        handleInput('CE');
    }
    else if(key==='+'||key==='-'){
        handleInput(key);
    }
    else if(key==='*'){
        handleInput('x');
    }
    else if(key==='/'){
        handleInput('÷')
    }
    else if(key==='%'){
        handleInput('%');
    }
    else if(key==='.'){
        handleInput(key);
    }
});

function handleInput(value){
    if(value==='=' || value==='Enter'){
        try{
            result = eval(string.replace('÷','/'));
            res.value = result;
        }catch{
            input.value = "Error";
            res.value = "Error";
            string = "";
        }
    }
    else if(value==='x'){
        string += '*';
        input.value = string;
    } 
    else if(value==='÷'){
        string += '/';
        input.value = string;
    }
    else if(value==='%'){
        result = string/100;
        res.value = result;
    }
    else if(value==='CE'){
        string = "";
        input.value = "";
        res.value = "";
    }
    else if(value==='C'){
        string = string.slice(0,-1);
        input.value = string;
    }
    else if(value==='+/-'){
        if(string.startsWith('-')){
            string=string.slice(1);
        }else{
            string = '-'+string;
        }
        input.value=string;
    }
    else if(value==='1/x'){
        if (string && Number(string) !== 0) {
            result = (1 / Number(string)).toString();
            res.value = result;
        } else {
            input.value = "Error";
            res.value = "Error";
        }
    }
    else if(value==='√x') {
        result = Math.sqrt(Number(string)).toString();
        res.value = result;
    }
    else if(value==='x<sup>2</sup>'){
        result = (Number(string) ** 2).toString();
        res.value = result;
    }
    else{
        string += value;
        input.value = string;
    }
}

