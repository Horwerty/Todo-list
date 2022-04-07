 const itemInput = document.getElementById('itemInput');
 const AddButton = document.getElementById('addBtn');
 const todoList = document.getElementById('todoList');
 const Clear = document.getElementById('clearBtn');
 const listArray = [];


 AddButton.addEventListener('click', addTodo);
 todoList.addEventListener('click', delTrash);
  Clear.addEventListener('click', Erase);

 function addTodo(event) {
      event.preventDefault();

      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');
      //  create li
      const newTodo = document.createElement('li');
      newTodo.innerText = itemInput.value;
      newTodo.classList.add('todo-item');
      todoDiv.appendChild(newTodo);
      // create completed buttons
      const ComBtns = document.createElement('button');
      ComBtns.innerHTML = '<i class="bx bx-check-circle"></i>';
      ComBtns.classList.add('Complete');
      todoDiv.appendChild(ComBtns);
      // create completed trash
      const TrashBtns = document.createElement('button');
      TrashBtns.innerHTML = '<i class="bx bxs-trash"></i>';
      TrashBtns.classList.add('Delete');
      todoDiv.appendChild(TrashBtns);
      //  APPEND TO LIST
      todoList.appendChild(todoDiv);
      // CLEAR INPUT
      itemInput.value = '';
 }

 function delTrash(e){
      const item = e.target;

      // DELETE TRASH
      if(item.classList[0] === "Delete"){
           const todo = item.parentElement;
           todo.remove();
      }

     //  CHECK 
     if(item.classList[0] === "Complete"){
           const todo = item.parentElement;
           todo.classList.toggle('Complete');
      }
 }

//    function Erase(e){

//      const item = e.target;

//      if (item.classList[0] === 'Erase'){
//           const Clear =item.childElement;

//           Clear.remove();
//      }

     

//      if (item.classList[0] === 'Clear'){

//           item.parentElement.remove();
// }
     
     
// }

//    console.log(Clear);