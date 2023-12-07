import './App.css';
import {FormAddTask} from "./components";
import {TaskList} from "./components/TasksList";
import {useMutation, useQuery} from "react-query";
import {addTask, getAllTasks} from "./fetchData";


function App() {
  const { data: todos, refetch } = useQuery('todos', getAllTasks);

  const addTodoMutation = useMutation(addTask);
  const onSubmit = async ( values:any,{resetForm }:any)=> {
    await addTodoMutation.mutateAsync(values.newTask);
    resetForm();
    refetch();

  };


  return (

    <>
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <FormAddTask onSubmit={onSubmit}/>
        <TaskList todos={todos} refetch={refetch}/>

    </>
  )
}

export default App
