import axios from "axios";
const {VITE_BACK_URL} = import.meta.env;


export const getAllTasks = async () => {
    const {data} = await axios.get(`${VITE_BACK_URL}/api/tasks`);
    return data;
};
