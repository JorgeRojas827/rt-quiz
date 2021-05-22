import React, { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import { LButton } from "../components/Loginout/LButton"
import { LInput } from "../components/Loginout/LInput"
import '../components/Root.scss'

interface IProps {
    span: string;
    text: string;
    inputValue: string;
    linkText: string;
    linkTo: string;
    children?: JSX.Element[] | JSX.Element;
}

export const LoginoutLayout = ({ span, inputValue,
    linkText, text, linkTo, children }: IProps) => {

    return (
        <Fragment>
            <div id = "body" className="w-screen h-screen relative dflex-center flex-col">
                <h1 className="text-5xl absolute top-6 titleLobster mb-5">Ultimate Quiz</h1>
                <div id="wrapper" className="w-1/4 h-3/6 rounded dflex-center shadow-lg dark:bg-gray-800">
                    <form className = "w-4/5 h-5/6 flex items-center justify-start space-y-4 flex-col">
                        <span className = "text-left text-xl">{ span }</span>
                        <LInput value = "text" />
                        <LInput value = "text" />
                        <LButton text = { inputValue } />
                        <span>{ text } <Link to = { linkTo }><span className = "text-blue-200">{ linkText }</span></Link></span>
                        { children }
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
