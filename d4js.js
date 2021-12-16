/* let people = ["greg","john","maria","bart","mathias","albert","cristian","robert","seguismundo","eufrasio","roger","mike","gerard","joseph"]

let numGroups

let groups 

for(let i=0;i<people.length;i++){
    console.log(people[i])
}
 */



const waitingPersonsLi = document.getElementById("waitingPersonsLi")

//create a person and attach to a waiting list
const personCreator = function(){
    const personAdder = document.getElementById("personAdder")
    const li = document.createElement("li")
    li.innerText = personAdder.value
    waitingPersonsLi.appendChild(li)

}
//



//divide on groups
const numDivider = function(){
    const numberGroups = document.getElementById("numberGroups")
}