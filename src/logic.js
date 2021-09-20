
const logicModule = (function(){

  const toDo = (idToDo, titleToDo, descriptionToDo, dueDateToDo, priorityToDo, checkToDo) =>{
    const state ={
      id: idToDo,
      title: titleToDo,
      description: descriptionToDo,
      dueDate: dueDateToDo,
      priority: priorityToDo,
      check: checkToDo
    }

    const modifyToDo = (titleToDo, descriptionToDo, dueDateToDo, priorityToDo, checkToDo)=>{
      this.state.title = titleToDo;
      this.state.description = descriptionToDo;
      this.state.dueDate = dueDateToDo;
      this.state.priority = priorityToDo;
      this.state.check = checkToDo; 
    }

    return{state, modifyToDo}
  }

  const projectToDo = (titleProject, descriptionProject) =>{
    const state ={
      title: titleProject,
      description: descriptionProject,
      toDoObjects:[],
    }

    const addToDoObject = (idToDo,titleToDo, descriptionToDo, dueDateToDo, priorityToDo, checkToDo)=>{
      state.toDoObjects.append(toDo(idToDo, titleToDo, descriptionToDo, dueDateToDo, priorityToDo, checkToDo));
    }

    const deleteToDoObject = (idToDo) =>{
      for(i = 0; i < toDoObjects.length; i++){
        if(idToDo === i + 1){
          toDoObjects.splice(0, i);
        }
      }
    }

    return{state, addToDoObject, deleteToDoObject}
  }


  return{toDo, projectToDo}
 
})();


export default logicModule;