interface ComponentProps {
    children: JSX.Element[] | JSX.Element;
}

export const Main = (props: ComponentProps) => {
    return (
        <div className="w-screen h-screen relative">
            {props.children}
        </div>
    )
}
