let age = +prompt(`Введите ваш возраст`) 

if(age <= 7 ){
    alert(`ты еще мал `)
}else if(age <= 17){
    alert(`только попробуй не здать экзамен`)
}else if(age <= 20){
    alert(`зрадраствуй юность в сапогах, здраствуй служба`)
}else if(age <= 29){
    alert(`вам нужно работать`)
}else if(age <= 50){
    alert(`вам скоро на пенсию`)
}else if(age <= 70){
    alert(`вы пенсионер`)
}else if(age <= 100){
    alert(`вы ещё живы, поздравляю `)
}else{
    alert(`за обман БАН`)
}
