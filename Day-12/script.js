let addToDoButton= document.getElementById("addToDo");
let toDoContainer= document.getElementById("todoContainer");
let inputfield= document.getElementById("inputField");
let clear=document.getElementById("clearAll");

addToDoButton.addEventListener('click',myFun);
function myFun(){
    var paragraph= document.createElement('p');//a paragraph element will be added every time we click the + button
    paragraph.innerText= inputfield.value;//in that paragraph entered value in the text field has to be inputted
    //nodeValue gives the text inside a tag. Here whatever tasks you will input in text that will be returned to paragraph
    //value is used to set or return the value of the attribute of a text field
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);//adding that value in paragraph element
    inputfield.value=" ";
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
    })
    clear.addEventListener("click",function(){
        paragraph.remove();
    })
    
}

