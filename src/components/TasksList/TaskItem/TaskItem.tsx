import {useState} from "react";
import {ITaskObj} from "../../../Interfaces";


interface TaskItemProps {
    id:string;
    completed:boolean;
    task:string;
    removeTask: (taskId:string)=>Promise<void>;
    toggleTaskCompletion:(taskObj:ITaskObj)=>Promise<void>;
    editingTask:(taskObj:ITaskObj)=>Promise<void>;
}

export const TaskItem = ({id,completed,task,removeTask,toggleTaskCompletion,editingTask}:TaskItemProps) => {

    const [edit,setEdit] = useState(false);
    const [value,setValue] = useState(task)


    return ( <li
        key={id}
        className={`flex items-center justify-between p-2 border mb-2 ${
            completed ? 'line-through text-gray-500' : ''
        }`}
    >
        {edit ?   <div className="w-full ">
            <input
                type="text"
                name="task"
                value={value}
                onChange={(e:any)=>setValue(e.target.value)}
                className="border w-9/12 p-2 mr-2"
                placeholder="Add a task"
                autoFocus
            />

            <button type="button" onClick={()=> {
                editingTask({id, task: value, completed})
                setEdit(!edit);
            }}
                    className="bg-blue-500 text-white px-4 py-2">
                Save
            </button>
        </div> : <>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTaskCompletion({id,task, completed:!completed})}
                className="mr-2"
            />
            <span>{task}</span>
            <div>
                <button
                    className="text-green-500 mr-2"
                    onClick={() => setEdit(!edit)}
                >
                    Edit
                </button>

                <button
                    className="text-red-500"
                    onClick={() => removeTask(id)}
                >
                    Remove
                </button>
            </div></>}

    </li>)
}