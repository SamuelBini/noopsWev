import React from 'react'
import NavItem from './NavItem'

import logo from "../../assets/icons/logo.svg";
import userIcon from '../../assets/icons/fi-rr-user.svg'
import mdi_phone from '../../assets/icons/mdi_phone.svg'
import searchIcon from '../../assets/icons/MagnifyingGlass.svg'
import heartIcon from '../../assets/icons/fi-rr-heart.svg'
import calendarIcon from '../../assets/icons/fi-rr-calendar.svg'




export default function HeaderFrame() {

    const navLinks = [
        {
            name: "Salon Feeds",
            link: "#"
        },
        {
            name: "How Noops Works",
            link: "#"
        },
        {
            name: "Rewards",
            link: "#"
        },
        {
            name: "Gift Cards",
            link: "#"
        },
        {
            name: "About Us",
            link: "#"
        },
    ]

    return (
        <div className="flex flex-row justify-between items-center px-28 py-4 border-b-2 border-solid border-label">

            <img src={logo} alt="Logo NOOPS" height="33.73px" />

            <nav>
                <ul className="list-none flex flex-row">
                    {
                        navLinks.map((item, ind) => (
                            <li className={"ml-6 cursor-pointer" + (ind === 0 ? ' text-primary border-b-2 border-solid border-primary' : ' hover:text-primary ')}>
                                <NavItem key={ind} label={item.name} url={item.link} />
                            </li>
                        ))
                    }
                </ul>
            </nav>



            <div className="flex flex-row">

                <img src={searchIcon} alt="searchIcon" className="mx-2" />

                <img src={heartIcon} alt="heartIcon" className="mx-2" />

                <img src={calendarIcon} alt="calendarIcon" className="mx-2" />

                <div className="mx-8 flex flex-row">
                    <img src={userIcon} alt="Logo user" srcset="" />
                    <div className="ml-2">
                        <p className="font-bold text-titleActive">
                            Jenie Mary
                        </p>
                        <p className="text-body text-opacity-70">
                            Log out
                        </p>
                    </div>
                </div>

                <div className="mx-8 flex flex-row">
                    <img src={mdi_phone} alt="Phone icon" srcset="" style={{fill: "#FF8B8C"}} />
                    <div className="ml-2">
                        <p className="font-bold font-titleActive">
                            +33 234 2320 234
                        </p>
                        <p className="text-body text-opacity-70">
                            Call now
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}
