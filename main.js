let btn = document.querySelector(".btn");
let nameOfClient = document.querySelector(".name");
let surnameOfClient = document.querySelector(".surname");
let radioButtonsCoffee = document.querySelectorAll('[name="coffee"]');
let inputCoffee = document.querySelectorAll('[name="coffeeInput"]');

let resultElement =document.querySelector(".result");
const Qtys = {
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
};
prices ={
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0, 
}
let total=0;
const sum = () =>{
    total=0
    for(let i = 0; i<inputCoffee.length;i++){
        total=total+prices[i]*Qtys[i]
    }
    return total
}

radioButtonsCoffee.forEach(function(element,x){
    element.addEventListener("change",function(){
if (element.checked){
    if (inputCoffee[x].value>0){
        inputCoffee[x].value=inputCoffee[x].value;
        Qtys[x]=inputCoffee[x].value
    } else{
    inputCoffee[x].value=1
    Qtys[x]=1;
   
    }
} else {
    inputCoffee[x].value=0
    Qtys[x]=0;
}
prices[x]=element.value
sum()
if (total!=0){
resultElement.textContent=total;
} else {
    resultElement.textContent = "0 руб."
}
});
    }
    );

inputCoffee.forEach(function(item, i) {
    item.addEventListener("change",function(){
        if (item.value>0){
            radioButtonsCoffee[i].checked = true;
            prices[i]=radioButtonsCoffee[i].value
            sum()
        }
            else {
                item.value=0;
                radioButtonsCoffee[i].checked = false  
                sum()
            }
        
        Qtys[i]=item.value;
        sum()
    if (total!=0){
        resultElement.textContent=total;
        } else {
            resultElement.textContent = "0 руб."
        }
    });
});
    
      


    

//Кнопка
btn.addEventListener('click',function(){
    alert(`Заказчик: ${nameOfClient.value} ${surnameOfClient.value} 
    Итого: ${total}р.`);
});