import { Fragment } from "react"
import { Link } from "react-router-dom"
import { NavbarItem } from "./NavbarItem"

export const Header = () => {

    return (
        <Fragment>
            <div className="w-5/6 h-1/6 p-3 dark:bg-gray-800 items-center dark:shadow-md grid grid-cols-8 shadow-md rounded-3xl">
                 <img className = "w-24 h-24 ml-6 col-span-1 bg-center bg-contain rounded-full" src="https://s3-alpha.figma.com/profile/1a191c3c-7399-471a-a2fb-ea90ba4630de" alt="foto_de_perfil" /> 
                     <div className="flex flex-col col-span-1 justify-center items-start text-left">
                        <h2 className = "font-semibold text-xl mb-2">Jorge Rojas</h2>
                        <p className="p-2 px-3 rounded-full shadow dark:bg-gray-700" >Rank 🏅</p>
                    </div>  
                <div id = "title" className="col-span-4 dflex-center text-5xl">
                    <Link to = "/">
                        <figure>
                            <img src="" alt="" />
                        </figure>
                        <h1 className = "titleLobster cursor-pointer">Ultimate Quiz</h1>
                    </Link>
                </div>
                <div className="col-span-2 flex space-x-5 space-x-reverse flex-row-reverse te mr-5 justify-start items-center">
                    <NavbarItem icon = "fas fa-user fa-lg" to = "/account"/>
                    <NavbarItem icon = "fas fa-trophy fa-lg" to = "/stats"/>
                    <NavbarItem icon = "fas fa-poll fa-lg" to = "/leaderboard"/>
                    <NavbarItem icon = "fas fa-puzzle-piece fa-lg" to = "/quiz"/>
                </div>
            </div>
        </Fragment>
    )
}
