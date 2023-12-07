import { Formik, Form, Field,ErrorMessage } from "formik";
import {validationSchema} from "./validationSchema.ts";
import {ITask} from "../../Interfaces";


interface FormAddTaskProps {
    onSubmit:(values:any,{resetForm}:any)=>Promise<void>;
}



export const FormAddTask = ({onSubmit}:FormAddTaskProps) => {

    const initialValues:ITask ={
        newTask: "",
    }


    return(
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            <Form className="">
                <div className="mb-6 flex items-center">
                <Field
                    type="text"
                    name="newTask"
                    className="border p-2 flex-grow mr-2"
                    placeholder="Add a new task"
                />

                <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    Add
                </button>
                </div>
                <ErrorMessage className="text-red-500"  name="newTask" component="div"/>
            </Form>
        </Formik>
);
}