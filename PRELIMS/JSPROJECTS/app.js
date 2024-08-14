//Components for Item1.html
const btn1= document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    //populate variables
    let name= document.getElementById("name").value
    let address= document.getElementById("address").value
    let telephone= document.getElementById("telephone").value
    let major= document.getElementById("major").value
    let x = `Hello! ${name}, I see that you are from ${address} and you are also pursuing your degree ${major} and you can be contacted using ${telephone}.`
    document.getElementById("output").innerHTML = x
})

const btn2=document.getElementById("btn2") 
btn2.addEventListener("click", () =>{
    //populate variables
    let totalSales= document.getElementById("totalSales").value
    let profit = totalSales*0.23
    let output2 = `With the projected amount of total sales equal to ${totalSales}, the estimated amount of profit of the company is ${profit}.`
    document.getElementById("output2").innerHTML = output2
})

const btn3=document.getElementById("btn3")
btn3.addEventListener("click", () =>{
    //populate variables
    let five = 60*5
    let eight = 60*8
    let twelve = 60*12
    let output3 = `If a car is traveling 60 miles per hour, the car will travel ${five} miles in five hours, in eight hours it would be ${eight} miles, and lastly, after twelve hours the car should've traveled ${twelve}.`
    document.getElementById("output3").innerHTML = output3
})

const btn4=document.getElementById("btn4")
btn4.addEventListener("click", () =>{
    //populate variables
    let distance= document.getElementById("driven").value
    let gas= document.getElementById("gas").value
    let mpg= distance/gas
    let output4 = `If a car that has traveled ${distance} miles has used ${gas} gallons of gas, the miles per gallon would be ${mpg}.`
    document.getElementById("output4").innerHTML = output4
})

const btn5=document.getElementById("btn5")
btn5.addEventListener("click", () =>{
    //populate variables
    let celsius =document.getElementById("celsius").value
    let fahrenheit= celsius * (9/5) +32
    let output5 = `The equivalent of ${celsius} Celsius in Fahrenheit is ${fahrenheit}.`
    document.getElementById("output5").innerHTML = output5
})

const btn6=document.getElementById("btn6")
btn6.addEventListener("click", () =>{
    //populate variables
    let cookies =document.getElementById("cookies").value
    let bag=40
    let serving = cookies/4
    let calories= serving* 300
    let calPerBag=(bag/4) *300
    let calPerCookies=300/4
    let output6 = `If the user has eaten ${cookies} pieces of cookies, it is equivalent to ${serving} servings of cookies. A serving of cookie has 300 calories, then the user has just consumed ${calories} calories. An unopened bag of cookies that has ${bag} cookies inside, has ${calPerBag} calories. Note that a single piece of cookie has ${calPerCookies} calories.`
    document.getElementById("output6").innerHTML = output6
})

const btn7=document.getElementById("btn7")
btn7.addEventListener("click", () => {
    let mal = document.getElementById("mal").value
    let fem = document.getElementById("fem").value
    let total = parseInt(mal) + parseInt(fem)
    let malp = ((mal / total) * 100).toFixed(2)
    let femp = ((fem / total) * 100).toFixed(2)
    
    let output7 = `
    TOTAL STUDENTS IN CLASS: ${total}<br/>
    Percentage of Male: ${malp}% <br/>
    Percentage of Female: ${femp}%
    `
    document.getElementById("output7").innerHTML = output7
})