import React from 'react'
import starFull from '../assets/icons/starFull.svg'
import starEmpty from '../assets/icons/starEmpty.svg'
import heartPink from '../assets/icons/fi-rr-heart-pink.svg'


export default function Salon({data}) {
    return (
        <div className="salon h-24">
            <div className="salonImg flex flex-col justify-between items-end" style={{ backgroundImage: "url('" + ((data.media && data.media.link ) ? data.media.link : "https://s3.us-east-2.amazonaws.com/noops-app/images/originals/oEeFlWUCtE4h9k8OxbZhdwPIoiSrzLKN1aispQHx.png") + "')" }}>
                <div className="px-1 py-1 rounded-full h-10 w-10 flex items-center justify-center mr-5 mt-6" style={{backgroundColor: "#FFF4F5", opacity: "0.75"}}>
                    <img src={heartPink} alt="heartPink" />
                </div>
                <div className="grid grid-cols-12 gap-8 feedFilter mb-4">
                    <p className="col-span-5">
                        <span className="tag">
                            Eyebrows
                        </span>
                    </p>
                </div>
            </div>

            <p className="mx-10 mt-6">
                <h5 className="text-secondary font-bold">
                    {data.name}
                </h5>

                <p className="mt-4">
                    {data.place}
                </p>
                <div className="flex flex-row mt-4 gap-4">
                    <img src={starFull} alt="starFull" />
                    <img src={starFull} alt="starFull" />
                    <img src={starFull} alt="starFull" />
                    <img src={starFull} alt="starFull" />
                    <img src={starFull} alt="starFull" />
                </div>
            </p>
        </div>
    )
}
