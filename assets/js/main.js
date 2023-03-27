let containerHtml = document.querySelector(".container")


for(let i = 1; i <= 100; i++){
    let createDiv = document.createElement('div')

    if(i % 3 == 0 && i % 5 == 0){
        createDiv.className = 'box box-yellow'
        containerHtml.append( createDiv )
        createDiv.innerHTML = "FrizzBuzz"

    }else if(i % 3 == 0){
        createDiv.className = 'box box-green'
        containerHtml.append( createDiv )
        createDiv.innerHTML = "Frizz"

    }else if(i % 5 == 0){
        createDiv.className = 'box box-blue'
        containerHtml.append( createDiv )
        createDiv.innerHTML = "Buzz"
    }else{
        createDiv.className = 'box'
        containerHtml.append( createDiv )
        createDiv.innerHTML = i
    }

    console.log(i)
}