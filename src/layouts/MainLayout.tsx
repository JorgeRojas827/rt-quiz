import { Fragment } from "react"
import { Header } from "../components/Header/Header"
import { Main } from "../components/Main/Main"
import '../components/Root.scss'

interface ComponentProps {
    children: JSX.Element[] | JSX.Element;
}

export const MainLayout = (props: ComponentProps) => {
    return (
        <Fragment>
            <div className="flex">
                <Header />
                <Main>
                    {props.children}
                </Main>
            </div>
        </Fragment>
    )
}
