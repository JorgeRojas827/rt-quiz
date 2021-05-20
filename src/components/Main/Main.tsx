import { Footer } from "../Footer/Footer"

interface ComponentProps {
    children: JSX.Element[] | JSX.Element;
}

export const Main = (props: ComponentProps) => {
    return (
        <div className="w-5/6 relative">
            {props.children}
            <Footer />
        </div>
    )
}
