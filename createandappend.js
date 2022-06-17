let ele = document.getElementById("my_class");
let h1 = document.createElement(`h1`);
let text = document.createTextNode("hello i am rankit")
h1.appendChild(text);
ele.appendChild(h1);
h1.className =  "try fly"
h1.id= "new"


////////body append

let div = document.createElement(`div`)
let newText = document.createTextNode("new div createElement");
div.appendChild(newText)
document.body.appendChild(div)
