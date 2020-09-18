jQuery("document").ready(()=>{
	jQuery(".button").on("click",()=>{
		let value = jQuery("input").val();
		alert(value);
		
	})
});


      // Массив объектов "список дел"
      let toDo = [
        { id: 1, status: false, name: "Сходить в магазин" },
        { id: 2, status: false, name: "Убраться дома" },
        { id: 3, status: false, name: "Постричь газон" },
        { id: 4, status: false, name: "Повесить картину" },
      ];

      // функция добавления нового пункта в список
      function addToDo(arr) {
        let add = prompt("Введите название дела", "");
        let newDeal = {
          id: +`${arr.length + 1}`,
          status: false,
          name: `${add}`,
        };
        console.log(arr.concat(newDeal));
        return arr.concat(newDeal);
      }

      // функция удаления туду элемента
      function deleteToDo(arr) {
        let count = 1;
        let del = prompt("Введите id дела, которое хотите удалить", 0);
        let res = arr.filter((item) => item.id != `${del}`);
        for (let obj of res) {
          obj.id = count++;
        }
        console.log(res);
        return res;
      }
