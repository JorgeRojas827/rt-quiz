import { Fragment } from "react"
import '../components/Root.scss'
import { LoginoutLayout } from "../layouts/LoginoutLayout"

export const Login = () => {
    return (
        <Fragment>
            <LoginoutLayout 
                span = "Sign in"
                inputValue = "Sign In"
                text = "Don´t have an account?"
                linkText = "Sign up"
                linkTo = "/register"
            >
                <button 
                    className="rounded-full dark:bg-gray-700 w-10 h-10"
                    ><i className = "text-white fab fa-google"></i></button>
            </LoginoutLayout>
        </Fragment>
    )
}
