import * as yup from 'yup'

export default yup.object().shape({
    name:
        yup
        .string()
        .required('Name is required')
        .min(2, 'name must be at least 2 character'),
    size:
        yup
        .string()
        .oneOf(['small', 'medium', 'large', 'extra large', 'texas'], 'Size is required'),
    pepperoni:
        yup.boolean(),
    canadian_bacon:
        yup.boolean(),
    bacon:
        yup.boolean(),
    sausage:
        yup.boolean(),
    special:
        yup.string(),
})