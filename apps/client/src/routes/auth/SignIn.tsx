import {Container} from '@mui/material'
import SignInForm from "../../components/auth/forms/SignInForm";


export const SignIn = () => {
    return (
        <Container component={'main'} maxWidth={'xs'}>
            <SignInForm />
        </Container>
    )
}