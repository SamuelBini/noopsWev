import React from 'react'

import copyrightIcon from '../assets/icons/copyright.svg'
import logo from "../assets/icons/logo.svg";
import dowloadPlayStore from '../assets/icons/dowloadPlayStore.svg'
import downloadApple from '../assets/icons/downloadApple.svg'
import mdi_phone from '../assets/icons/mdi_phone.svg'
import envelopeIcon from '../assets/icons/fi-rr-envelope.svg'
import makerIcon from '../assets/icons/fi-rr-maker.svg'
import paperPlaneIcon from '../assets/icons/fi-rr-paper-plane.svg'
import twitterIcon from "../assets/icons/twitterIcon.svg"
import facebookIcon from "../assets/icons/facebookIcon.svg"
import instagramIcon from "../assets/icons/instagramIcon.svg"
import linkedinIcon from "../assets/icons/linkedinIcon.svg"


export default function Footer() {

    const navLinks = [
        {
            name: "Salon Feeds",
            link: "#"
        },
        {
            name: "About Us",
            link: "#"
        },
        {
            name: "My account",
            link: "#"
        },
        {
            name: "Favorites",
            link: "#"
        },
        {
            name: "Bookings",
            link: "#"
        },
        {
            name: "Terms & Conditions",
            link: "#"
        },
        {
            name: "Privacy Policy",
            link: "#"
        },
    ]

    return (
        <div className="w-full bottom-0 justify-center px-28 py-4 border-t-2 border-solid border-label">

            <div className="flex flex-row justify-between mb-8">

                <div className="flex flex-col justify-between items-start">
                    <img src={logo} alt="logo NOOPS" srcset="" />
                    <div>
                        <img src={downloadApple} alt="download on Apple Store" srcset="" className="my-4" />
                        <img src={dowloadPlayStore} alt="download on Google Store" srcset="" />
                    </div>
                </div>

                <div className="flex flex-col items-start">
                    <h6 className="font-bold">
                        Website
                    </h6>

                    <ul className="list-none mt-4">
                        {
                            navLinks.map((item, ind) => (
                                <li className="">
                                    <p key={ind} >
                                        <a href={item.link} className="font-normal text-body text-opacity-80">
                                            {item.name}
                                        </a>
                                    </p>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className="flex flex-col items-start">
                    <h6 className="font-bold">
                        Contacts
                    </h6>

                    <ul className="list-none mt-4">
                        <li className="mb-2">
                            <p className="flex flex-row">
                                <img src={mdi_phone} alt="mdi_phone" srcset="" className="mr-4" />
                                <span className="font-normal text-body text-opacity-80">
                                    +33 234 2320 234
                                </span>
                            </p>
                        </li>
                        <li className="mb-2">
                            <p className="flex flex-row">
                                <img src={envelopeIcon} alt="envelopeIcon" srcset="" className="mr-4" />
                                <span className="font-normal text-body text-opacity-80">
                                    support@noops.com
                                </span>
                            </p>
                        </li>
                        <li className="mb-2">
                            <p className="flex flex-row items-start">
                                <img src={makerIcon} alt="makerIcon" srcset="" className="mr-4" />
                                <span className="font-normal text-body text-opacity-80">
                                    30 Avenue Jules Ferry,<br />
                                    13260 Cassis, France
                                </span>
                            </p>
                        </li>
                    </ul>

                </div>


                <div className="flex flex-col items-start">
                    <h6 className="font-bold">
                        Newsletter
                    </h6>

                    <p className="mt-4">
                        Our Newsletters for updates to new salons <br />
                        and best deals - It’s Free!
                    </p>

                    <p className="flex flex-row items-start mt-4">
                        <input type="text" name="email" id="email" placeholder="Email*" className=" px-4" style={{ width: "302px", height: "43px", fontSize: "24px", borderRadius: "2px 0px 0px 2px", filter: "drop-shadow(0px 1px 10px rgba(92, 92, 92, 0.1))" }} />
                        <div className="bg-primary flex justify-center items-center" style={{ width: "43px", height: "43px", borderRadius: "0px 2px 2px 0px" }}>
                            <img src={paperPlaneIcon} alt="paperPlaneIcon" />
                        </div>

                    </p>

                </div>

                <div className="flex flex-col items-start">
                    <h6 className="font-bold">
                        Social media
                    </h6>


                    <ul className="list-none mt-4 flex flex-row gap-x-2">
                        <li className="mb-2">
                            <div className="bg-primary px-1 py-1 rounded-full h-10 w-10 flex items-center justify-center">
                                <img src={instagramIcon} alt="instagramIcon" srcset="" />
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="bg-primary px-1 py-1 rounded-full h-10 w-10 flex items-center justify-center">
                                <img src={facebookIcon} alt="facebookIcon" srcset="" />
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="bg-primary px-1 py-1 rounded-full h-10 w-10 flex items-center justify-center">
                                <img src={linkedinIcon} alt="linkedinIcon" srcset="" />
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="bg-primary px-1 py-1 rounded-full h-10 w-10 flex items-center justify-center">
                                <img src={twitterIcon} alt="twitterIcon" srcset="" />
                            </div>
                        </li>
                    </ul>




                </div>

            </div>

            <div className="flex flex-row justify-center">
                <caption className="caption flex flex-row">
                    Copyright <img src={copyrightIcon} alt="copyright icon" className="mx-2" /> 2021 NOOPSApp Sàrl A Company That Deals With Booking Salons. All Rights Reserved.
                </caption>
            </div>
        </div>
    )
}
