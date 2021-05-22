import { Fragment } from "react"
import '../components/Root.scss'
import { LoginoutLayout } from "../layouts/LoginoutLayout"

export const Register = () => {
    return (
        <Fragment>
            <LoginoutLayout 
                span = "Create an account"
                inputValue = "Sign Up"
                text = "Already have an account?"
                linkText = "Sign In"
                linkTo = "/login"
            >
                <span>Only testing purposes</span>
            </LoginoutLayout>
        </Fragment>
    )
}
