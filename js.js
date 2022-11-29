    const name = document.querySelector('.nameInput')
    const surname = document.querySelector('.surnameInput')
    const number = document.querySelector('.numberInput')
    const btn = document.querySelector('.push')
    const tasks = document.querySelector('.tasks')
     btn.addEventListener("click", () =>{
list()
     })
name && surname && number.addEventListener('keydown', (e) =>{
    if (e.key === "Enter"){
        list()
    }
})
    function list(){
    if (name.value !== "" && number.value !== "" && surname.value !== ""){
        tasks.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
<span class="d-flex align-item-center">
<div class="circle"> ${name.value[0].toUpperCase()} ${surname.value[0].toUpperCase()}</div>
<input type="checkbox" class="mx-2 checkbox">
${"name:"}${name.value} <br>${"surname:"}${surname.value} <br> ${"number:"}${number.value}
</span>
<button class="del-btn btn btn-danger">delete</button>
</li>`
    }
    name.value =""
        surname.value =""
        number.value =""
    }
    tasks.addEventListener("click", (e) =>{
        if (e.target.classList.contains("del-btn")){
            e.target.parentNode.remove()
        }
        if (e.target.classList.contains("checkbox")){
            if (!e.target.parentNode.classList.contains("completed")){
            e.target.parentNode.classList.add("completed")
            }else {
            e.target.parentNode.classList.remove("completed")
            }
        }
    })