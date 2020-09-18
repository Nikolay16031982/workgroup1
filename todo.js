jQuery("document").ready(()=>{
	jQuery(".button").on("click",()=>{
		let value = jQuery("input").val();
		
		toDo = addToDo(toDo, value);
		for (let i=0;i<toDo.length;++i)
		alert(toDo[i].name);
	})
});


      // Массив объектов "список дел"
      let toDo = [
        { id: 1, status: false, name: "Выучить JS" },
        { id: 2, status: false, name: "Выучить CSS" },
        { id: 3, status: false, name: "Выучить HTML" },
        { id: 4, status: false, name: "Выучить jQuery" },
      ];

      // функция добавления нового пункта в список
      function addToDo(arr, n_ame) {		 
		  if(!n_ame)	return;
        //let add = prompt("Введите название дела", "");
        let newDeal = {
          id: +`${arr.length + 1}`,
          status: false,
          name:  n_ame,
        };		       
        return arr.concat(newDeal);
      }

      // функция удаления туду элемента
      function deleteToDo(arr, i_d) {
        let count = 1;
        let res = arr.filter((item) => item.id != i_d);
        for (let obj of res) {
          obj.id = count++;
        }      
        return res;
      }
	  // функция для изменения статуса туду элемента 
	   function changeStatusToDo(arrElement, s_tatus) {
		arrElement.status=s_tatus; 
			return arrElement;
      }
	  //функция для изменения названия туду элемента
	  function changeNameToDo(arrElement, n_ame) {
		arrElement.name=n_ame; 
			return arrElement;       
      }
	  // функция для изменения статуса туду элемента
	   function changeStatusToDo(arr, i_d, s_tatus) {
		let temp = arr.map(item=>if());  
			return arrElement;
      }
	  //функция для изменения названия туду элемента
	  function changeNameToDo(arrElement, i_d, n_ame) {
		arrElement.name=n_ame; 
			return arrElement;       
      }