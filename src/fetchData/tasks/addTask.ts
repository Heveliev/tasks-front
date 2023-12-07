import axios from "axios";
import {ITask} from "../../Interfaces";
const {VITE_BACK_URL} = import.meta.env;


export const addTask = async (task:ITask) => {
    const {data} = await axios.post(`${VITE_BACK_URL}/api/tasks`,{task,completed:false});
    return data;
};
