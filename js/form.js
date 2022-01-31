function testaFormulario(e){
e.preventDefault();


  
var phonepattern=/[^0-9-*()]+/g
  if(phonepattern.test(e.target.elements["phone"].value)){
    alert("Apenas numeros são permitidos no campo Telefone!!")
    return false 
  }



if (e.target.elements["phone"].value.replace(/[-()]/g, "").length < 11) {
  alert ("Numero invalido!!")
  return false 
}





var peopleRaw = localStorage.getItem("people")
if(peopleRaw != null) { 
  var people = JSON.parse(peopleRaw)
} else {
  var people= [];
}

if (id !==null) { 
  people[id] =
  {
    name:e.target.elements["name"].value,
    tel:e.target.elements["phone"].value,
    xp: (e.target.elements["exp"].value=="true")
  }
  
}else {
people.push({
  name:e.target.elements["name"].value,
  tel:e.target.elements["phone"].value,
  xp: (e.target.elements["exp"].value=="true")
 
})
}

localStorage.setItem("people", JSON.stringify(people))
document.getElementById("goHome").click()


}

var urlPrincipal = new URL(window.location.href)
var id = urlPrincipal.searchParams.get("person")
if (id!==null) { 
var peopleRaw=localStorage.getItem("people")
if (peopleRaw!=null) { 
  var people=JSON.parse(peopleRaw)
} else {
  var people = [];
}



 
  document.getElementById('name').value = people[id].name
  document.getElementById('phone').value = people[id].tel
  if(people[id].xp) {
    document.getElementById("exp-yes").checked = true 
  }
  else {
    document.getElementById("exp-no").checked = true 
  }
}



function testacampotelefone(e){ 
  e.preventDefault()
  console.log(e);

  if (e.target.value.length==0){
    e.target.value += "("
  }


  if (e.target.value.length==3){
    e.target.value += ")"
  }


  if (e.target.value.length==10){
    e.target.value += "-"
  }




  if((/[0-9]/g).test(e.key)&& e.target.value.length<15) {
  e.target.value+= e.key }


}
