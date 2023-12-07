import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    newTask: Yup.string().required('Enter task please!'),
});