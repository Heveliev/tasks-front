import axios from "axios";

const {VITE_BACK_URL} = import.meta.env;


export const deleteTask = async (id:string) => {
    const {data} = await axios.delete(`${VITE_BACK_URL}/api/tasks/${id}`);
    return data;
};
