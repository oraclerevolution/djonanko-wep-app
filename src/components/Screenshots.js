import React from "react";
import "../styles/screenshots.css"
import { Carousel } from "@material-tailwind/react";
import mobilePhone from "../settings.png"
import downloadPlayStore from "../toppng 1.png"
import downloadAppStore from "../PngItem_1144050 2.png"
import { FaDownload, FaStar, FaThumbsUp } from "react-icons/fa";


export const Screenshots = () => {
    return (
        <div className="screenshots-container py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-3 font-serif">Interfaces mobiles Djonanko</h2>
                <p className="text-lg text-center text-gray-800 font-serif mb-5">
                    L'application Djonanko vous offre au travers de sa fluide interface des fonctionnalités qui <br /> qui se rapprochent de vos besoins en vous permettant d'utiliser vos mobile money en toute sécurité.
                </p>
                <div className="rounded-lg flex flex-row justify-center items-center mb-5">
                    <img src={mobilePhone} width={220} height={250} />
                    <img src={mobilePhone} width={220} height={250} />
                    <img src={mobilePhone} width={220} height={250} />
                    <img src={mobilePhone} width={220} height={250} />
                    <img src={mobilePhone} width={220} height={250} />
                    <img src={mobilePhone} width={220} height={250} />
                </div>
                <div className="flex flex-row justify-between p-4">
                    <div className="flex flex-col w-1/2">
                        <div className="mb-4 w-2/3">
                            <h2 className="text-3xl font-bold mb-3 font-serif">Téléchargez l'application</h2>
                            <p className="font-serif text-1xl">Utilisez Djonanko dès maintenant et mettez fin à toutes les barrières entre les opérateurs. Effectuez vos transactions en toute sécurité et profitez des frais de transactions très réduits.</p>
                        </div>
                        <div className="flex flex-row mb-4">
                            <img src={downloadPlayStore} />
                            <img src={downloadAppStore} />
                        </div>
                        <div className="flex flex-row items-start" style={{position:"relative", right:"10px"}}>
                            <div className="rounded-lg w-1/4 flex flex-col m-2 justify-center items-center p-4" style={{backgroundColor:"#1dbf73"}}>
                                <FaDownload color="#fff" size={20} className="mb-2" />
                                <p className="font-bold font-serif text-lg text-white">4350</p>
                                <p className="font-bold font-serif text-lg text-white">DOWNLOAD</p>
                            </div>
                            <div className="rounded-lg w-1/4 flex flex-col m-2 justify-center items-center p-4" style={{backgroundColor:"#1dbf73"}}>
                                <FaThumbsUp color="#fff" size={20} className="mb-2" />
                                <p className="font-bold font-serif text-lg text-white">3000</p>
                                <p className="font-bold font-serif text-lg text-white">LIKE</p>
                            </div>
                            <div className="rounded-lg w-1/4 flex flex-col m-2 justify-center items-center p-4" style={{backgroundColor:"#1dbf73"}}>
                                <FaStar color="#fff" size={20} className="mb-2" />
                                <p className="font-bold font-serif text-lg text-white">4.5</p>
                                <p className="font-bold font-serif text-lg text-white">RATING</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-1/2 justify-center align-center">
                        <img src={mobilePhone} width={210} height={250} className="-rotate-12" />
                        <img src={mobilePhone} width={210} height={250} className="rotate-12" />
                    </div>
                </div>
            </div>
        </div>
    )
}