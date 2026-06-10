console.log("Print statement")

const a=10;
const b=20;

console.log(a+b)

const str="Akshay"
console.log(str)

const arr=[29,"Parrot",5.9,true]
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
arr[1]=5.2
console.log(arr[1])
arr.push("Swetha")
console.log(arr)
arr.pop()
console.log(arr)

function example(){
    console.log("I am writing something")
}

const ptag = document.getElementById("ptag")
ptag.innerHTML ="print statement"

const first = document.getElementById("input")
const output=document.getElementById("inputField")

first.addEventListener("input",()=>{
    output.textContent=first.value
})

const first=document.createElement("h1")
document.body.appendChild(first)

first.remove()