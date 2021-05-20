import { Fragment } from "react"
import { NavbarItem } from "./NavbarItem"

export const Header = () => {
    return (
        <Fragment>
            <header id = "header" className="w-1/6 shadow-xl text-center h-screen flex flex-col items-center rounded-r">
                <h1 className = "text-black text-5xl cursor-pointer mt-10">
                    <a href="/">Quiz</a>
                </h1>
                <hr />
                <div className="routes grid grid-rows-3 mt-20 gap-12">
                    <NavbarItem icon = "fas fa-puzzle-piece" value = "Quiz"/>
                    <NavbarItem icon = "fas fa-poll" value = "Leaderboard"/>
                    <NavbarItem icon = "fas fa-user-circle" value = "Account"/>
                </div>
            </header>
        </Fragment>
    )
}
