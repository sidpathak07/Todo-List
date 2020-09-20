console.log("To Do List");
const taskList = document.getElementById("taskList");
showTask();
// console.log(taskList);
const addBtn = document.getElementById("addBtn");
// console.log(addBtn);
addBtn.addEventListener('click',()=>{
    let addTask = document.getElementById("addTask");  
    // console.log(addTask.value);
    let taskLi = localStorage.getItem("task");
    if(taskLi == null){
        taskObj=[];
    }
    else{
        taskObj=JSON.parse(taskLi);
    }
    if(addTask.value.length!=0){
        let newObj = {
            text:addTask.value,
        }
        taskObj.push(newObj);
        localStorage.setItem("task",JSON.stringify(taskObj));
    }
    addTask.value ="";
    showTask();
});
function showTask(){
    let taskLi = localStorage.getItem("task");
    if(taskLi == null){
        taskObj=[];
    }
    else{
        taskObj=JSON.parse(taskLi);
    }
    html = "";
    taskObj.forEach((element,index) => {
        html +=`<div class="demo animate__animated animate__fadeInDown">
                    <p>${element.text}</p>
                    <input type="checkbox" name="checkBox" id="checkbox">
                    <button id="${index}" onclick="deleteTask(this.id)">delete</button>` 
    });
    if(taskObj.length == 0){
        taskList.innerHTML=`<span class="fas fa-exclamation-triangle alert">No Tasks Added</span>`
    }else{
        taskList.innerHTML = html;
    }
}
function deleteTask(index){
    console.log("delete");
    let taskLi = localStorage.getItem("task");
    if(taskLi == null){
        taskObj=[];
    }
    else{
        taskObj=JSON.parse(taskLi);
    }
    taskObj.splice(index,1);
    localStorage.setItem("task",JSON.stringify(taskObj));
    showTask();
}


