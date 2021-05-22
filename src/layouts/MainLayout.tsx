import { Fragment } from "react"

import '../components/Root.scss'
import { Main } from "../components/Main/Main"
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

interface ComponentProps {
    children: JSX.Element[] | JSX.Element;
}

export const MainLayout = (props: ComponentProps) => {
    return (
        <Fragment>
            <div className="h-full w-full pt-2 flex flex-col justify-start items-center">
                <Header />
                <Main>
                    { props.children }
                </Main>
                <Footer />
            </div>
        </Fragment>
    )
}
