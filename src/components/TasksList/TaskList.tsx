
import {TaskItem} from "./TaskItem";
import {useMutation} from "react-query";
import {deleteTask, editTask} from "../../fetchData";
import {ITaskObj} from "../../Interfaces";


interface TaskListProps {
    todos:[ITaskObj];
    refetch:()=>void;


}


export const TaskList = ({todos,refetch}:TaskListProps) => {
    const editMutation = useMutation(editTask);
    const deleteMutation = useMutation(deleteTask);


    const removeTask = async (taskId:string) => {
        await deleteMutation.mutateAsync(taskId);
        refetch();

    };

    const toggleTaskCompletion = async (taskObj:ITaskObj) => {
        await editMutation.mutateAsync(taskObj);
        refetch();

    };

    const editingTask = async (taskObj:ITaskObj) => {
        await editMutation.mutateAsync(taskObj);
        refetch();
    }



    return ( <ul>{ todos?.length ? todos.map(
        ({id,completed,task}:ITaskObj) => (<TaskItem key={id}
                                                        id={id}
                                                        completed={completed}
                                                        task={task}
                                                        removeTask={removeTask}
                                                        toggleTaskCompletion={toggleTaskCompletion}
                                                        editingTask={editingTask}

        />)) :
        (<h2>You have nothing to do for now</h2>)
       }</ul>)
};