import axios from "axios";
import {ITaskObj} from "../../Interfaces";
const {VITE_BACK_URL} = import.meta.env;



export const editTask = async ({id,task,completed}:ITaskObj) => {
    const {data} = await axios.put(`${VITE_BACK_URL}/api/tasks/${id}`, {task, completed});
    return data;
};