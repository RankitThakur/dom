function hello(){
  let element = document.querySelectorAll(`p.p_class`)
  for (let i in element){
    element[i].innerHTML = "ankit"
  }

}

