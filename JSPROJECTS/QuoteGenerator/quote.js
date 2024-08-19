const quote= ["Tolerance and Apathy are the last virtues of a dying society. -Aristotle", "Anyone who holds a true opinion without understanding is like a blind man on the right road. -Socrates"]
const btn=document.getElementById("btn")
const color= document.querySelector(".quote")

btn.addEventListener("click",  () => {
    let hexColor = '#'
    for (let i=0; i>=9; i++){
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}