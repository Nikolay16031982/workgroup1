
window.onload = ()=>{
	
document.getElementById("addButton").onclick = ()=>{
	
let val = document.getElementById("inText").value;		
		toDo = addToDo(toDo, val);
		for (let i=0;i<toDo.length;++i)
		alert(toDo[i].name);	
 };
 
document.getElementById("delId1").onclick = ()=>{	
		
		toDo = deleteToDo(toDo, 1);	
 }; 
};



let toDoList = [
  { id: 1, status: false, name: "Выучить JS" },
  { id: 2, status: false, name: "Выучить CSS" },
  { id: 3, status: false, name: "Выучить HTML" },
];

const generateId = (() => {
  let _id = 0;
  return () => ++_id;
})();

function addToDo(toDoList, name) {
  if (!name) return;
  let newToDo = {
    id: generateId(),
    status: false,
    name,
  };
  return [...toDoList, newToDo];
}

function deleteToDo(toDoList, toDoId) {
  return toDoList.filter(({ id }) => id !== toDoId);
}

function changeStatusToDo(toDoList, toDoId, status) {
  return toDoList.map((toDo) =>
    toDo.id === toDoId ? { ...toDo, status } : toDo
  );
}

function changeNameToDo(toDoList, name) {
  return toDoList.map((toDo) =>
    toDo.id === toDoId ? { ...toDo, name } : toDo
  );
}
