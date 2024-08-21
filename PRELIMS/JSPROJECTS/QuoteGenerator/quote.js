const quotes= ["Tolerance and Apathy are the last virtues of a dying society. -Aristotle", 
"Anyone who holds a true opinion without understanding is like a blind man on the right road. -Socrates",
"It is our choice of good or evil that determines our character, not our opinion about good or evil. -Aristotle",
"The only thing I know is that I know nothing. -Socrates",
"He who is not satisfied with a little, is satisfied with nothing. -Epicurus",
"The only source of knowledge is experience. -Albert Einstein",
"Every man is guilty of all the good he didn't do. -Voltaire",
"What worries you, masters you. -John Locke"]


const btn= document.getElementById("btn")
const quote= document.querySelector(".quote")

btn.addEventListener("click", () =>{
    console.log(document.body)
    const randomNumber = getRandomNumber()
    quote.textContent = quotes[randomNumber]
})

getRandomNumber = () =>{
    return Math.floor(Math.random() * quotes.length)
}
