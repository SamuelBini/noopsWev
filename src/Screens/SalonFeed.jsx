import React from 'react'
import {
    useEffect,
    useState
} from 'react'
import HeaderFrame from '../Components/Header/HeaderFrame'
import Footer from '../Components/Footer'
import Salon from '../Components/Salon'
import '../assets/css/containerStyle.css'
import { Map, GoogleApiWrapper } from 'google-maps-react';


export default function SalonFeed() {

    const setTagActive = (e) => {
        e.target.classList.toggle("active")
    }

    const [salons, setSalons] = useState([])
    const [ready, setReady] = useState(false)

    useEffect(() => {
        fetch("https://noops.myhealthymap.com/dev/api/salons")
            .then((res) => (
                res.json()
            ))
            .then((res) => {
                console.log(res)
                setSalons(res)
                setReady(true)
            })
    }, [])
    return (
        <div>
            <HeaderFrame />

            <div className="mx-28 pb-14">
                <p className="mt-8">
                    <span className="text-titleActive">Home</span> / <span className="opacity-70">Salon feed</span>
                </p>
                <h4 className="my-4">
                    Salons Feed
                </h4>

                <div className="grid grid-cols-12 gap-8 feedFilter">
                    <p className="col-span-5">
                        <span className="tag" onClick={setTagActive}>
                            Hands & Feet
                        </span>
                        <span className="tag" onClick={setTagActive}>
                            Body care
                        </span>
                        <span className="tag" onClick={setTagActive}>
                            Waxing
                        </span>
                        <span className="tag" onClick={setTagActive}>
                            Laser
                        </span>
                        <span className="tag" onClick={setTagActive}>
                            Massage
                        </span>
                        <span className="tag" onClick={setTagActive}>
                            Hairdress
                        </span>
                        <span className="tag" onClick={setTagActive}>
                            Visage
                        </span>
                        <span className="tag" onClick={setTagActive}>
                            Coupe Homme
                        </span>
                    </p>

                    <p className="col-span-5 flex justify-end">
                        <select name="numShow">
                            <option value="1-21">Show 1-11</option>
                            <option value="1-21" selected>Show 1-21</option>
                            <option value="1-21">Show 1-31</option>
                            <option value="1-21">Show 1-41</option>
                        </select>

                        <select name="letterOrd">
                            <option value="normal" selected>A-Z</option>
                            <option value="reversed" >Z-A</option>
                        </select>

                        <select name="days">
                            <option value="All days">All days</option>
                        </select>

                        <select name="cities">
                            <option value="All cities">All cities</option>
                        </select>

                        <select name="popularity">
                            <option value="Popular">Popular</option>
                        </select>

                    </p>
                </div>

                <br />
                <hr className="border-b-1 border-solid border-label" />
                <br />

                <div className="grid grid-cols-12">
                    {
                        !ready ?
                            <h5>Chargement</h5>
                            :
                            <div className="col-span-9 grid grid-cols-3 gap-14">
                                {
                                    salons.map((val, ind) => (
                                        <Salon key={ind} data={val} />
                                    ))
                                }
                            </div>
                    }

                    <div className="col-span-3">

                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
