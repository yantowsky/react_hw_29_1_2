import * as Yup from 'yup';

const inputTextSchema = Yup.object().shape({ text: Yup.string().required('Required field').min(5, 'Enter at least 5 characters') });

export default inputTextSchema;