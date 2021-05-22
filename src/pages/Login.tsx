import { Fragment } from "react"
import '../components/Root.scss'

export const Login = () => {
    return (
        <Fragment>
            <div id = "body" className="w-screen h-screen relative dflex-center flex-col">
                <h1 className="text-5xl absolute top-6 titleLobster mb-5">Ultimate Quiz</h1>
                <div id="wrapper" className="w-1/4 h-1/2 rounded dflex-center shadow-lg dark:bg-gray-800">
                    <form className = "w-4/5 h-5/6 flex items-center justify-start space-y-6 flex-col">
                        <span className = "text-left text-xl">Sign In:</span>
                        <input type="text" name="Name" id="name" className="w-full h-auto rounded-sm dark:bg-gray-700" />
                        <input type="text" name="Name" id="name" className="w-full  h-auto rounded-sm dark:bg-gray-700" />
                        <input type="submit" className = "bg-gray-900 w-full h-auto text-white py-2 my-10 rounded-sm" value="Registrarse" />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
