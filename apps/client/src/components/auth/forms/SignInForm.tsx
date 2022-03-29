import {Button, TextField} from "@mui/material";
import * as yup from 'yup';
import {useAuth} from "../../../contexts/AuthContext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .min(10, 'Password should be of minimum 10 characters length')
        .required('Password is required')
})

export default function SignInForm() {
    const auth = useAuth()
    let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: async ({ username, password}) => {
            const authResults = await auth.signIn(username, password);
            if (authResults.error) {
                console.error(authResults.error)
            } else {
                navigate("/");
            }
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    required
                    fullWidth
                    id="username"
                    name="username"
                    label='Username'
                    margin='normal'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                <TextField
                    required
                    fullWidth
                    id="password"
                    name='password'
                    label='Password'
                    type='password'
                    margin='normal'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                    variant='outlined'
                    fullWidth
                    type='submit'
                    // disabled={formik.isSubmitting}
                >
                    Sign In
                </Button>
            </form>
        </>
    )
}