interface IProps {
    text?: string
}

export const LButton = ({ text }: IProps) => {
    return (
        <>
            <input 
                type="submit"
                className = "bg-gray-900 cursor-pointer w-full h-auto text-white py-2 my-10 rounded-sm"
                value= { text } />
        </>
    )
}
