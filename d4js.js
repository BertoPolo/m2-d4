/* let people = ["greg","john","maria","bart","mathias","albert","cristian","robert","seguismundo","eufrasio","roger","mike","gerard","joseph"]

let numGroups

let groups 

for(let i=0;i<people.length;i++){
    console.log(people[i])
}
 */


let createdPerson=[]

const waitingPersonsLi = document.getElementById("waitingPersonsLi")

//create a person and attach to a waiting list --WORKING--
const personCreator = function(){
    const personAdder = document.getElementById("personAdder")
    const li = document.createElement("li")
    li.innerText = personAdder.value
    waitingPersonsLi.appendChild(li)
    createdPerson.push()
}


//divide on groups NOT FINISHED
const numDivider = function(){
    const numberGroups = document.getElementById("numberGroups")
    let divider = waitingPersonsLi / numberGroups
    
}



//assign a variable  with math floor random  in
//use that variable on person-index to grab it
//how to use the index? where is the output of personCreator???


let randomIndex = Math.floor(Math.random())* waitingPersonsLi.length // with this you have a random number

