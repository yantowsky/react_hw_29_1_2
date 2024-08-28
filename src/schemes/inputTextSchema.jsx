import * as Yup from 'yup';

const inputTextSchema = Yup.object().shape({ task: Yup.string().trim().required('Required field').min(5, 'Enter at least 5 characters') });

export default inputTextSchema;