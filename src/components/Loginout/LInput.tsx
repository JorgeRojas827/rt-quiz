interface IProps {
    value: string
}

export const LInput = ({ value }: IProps) => {

    return (
        <>
            <input
                type="text"
                autoComplete = "off"
                name= { value }
                id="name"
                className="w-full h-auto rounded-sm dark:bg-gray-700" />
        </>
    )
}
