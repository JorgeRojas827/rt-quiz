
interface Props {
  value: String;
  icon: String;
}

export const NavbarItem = ({ value, icon }: Props) => {
    return (
        <div className = "shadow-sm p-3 rounded hover:bg-gray-100">
            <a className = "flex flex-row justify-start items-center" href="/">
                <i className={`text-black mr-3 ${ icon } fa-2x`}></i>
                { value }
            </a>
        </div>
    )
}
