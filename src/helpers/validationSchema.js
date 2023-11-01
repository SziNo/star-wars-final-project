import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Must be at least 2 characters').required('Required'),
  lastName: Yup.string().min(2, 'Must be at least 2 characters').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  text: Yup.string().min(20, 'Must be at least 20 characters').required('Required'),
})
