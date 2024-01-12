import React from "react";
import "../styles/about.css"
import mobilephone from "../settings.png"
import { FaCheckCircle } from "react-icons/fa"

export const About = () => {
    return (
        <div className="about-container">
            <div className="container mx-auto about-div">
                <h1 className="text-center about-title font-serif mb-3">A propos de Djonanko</h1>
                <p className="text-center text-gray-600/80 text-lg font-serif">Djonanko est une application mobile spécialisée dans le transfert d'argent inter-opérateur <br /> et de paiement marchands. Djonanko offre aux utilisateurs du mobile money des services de transferts et de paiement <br /> avancé avec une interface utilisateur intuitive et facile a manipuler.</p>
            </div>
            <div className="flex flex-row">
                <div className="about-left-side w-1/2">
                    <img src={mobilephone} />
                </div>
                <div className="w-1/2 p-5 about-right-side">
                    <div className="shadow-xl w-2/3 p-8 rounded-md">
                        <div className="flex flex-row">
                            <FaCheckCircle color="#1DBF73" size={25} className="mr-4" />
                            <h3 className="mb-4 font-serif"> CREATIVE DESIGN</h3>
                        </div>
                        <p className="font-serif">ncjdeoanj kneojnarn vnoirari nvieornviz vjciej    oivjzeiojof fzeoz jioe.formats(['i firo ']) cnozjv nvzei noeao ojnvraro   nvroo vnrvne vnrhuçr nvefnio</p>
                    </div>
                    <div className="shadow-xl w-2/3 p-8 rounded-md">
                        <div className="flex flex-row">
                            <FaCheckCircle color="#1DBF73" size={25} className="mr-4" />
                            <h3 className="mb-4 font-serif">EASY TO USE</h3>
                        </div>
                        <p className="font-serif">ncjdeoanj kneojnarn vnoirari nvieornviz vjciej    oivjzeiojof fzeoz jioe.formats(['i firo ']) cnozjv nvzei noeao ojnvraro   nvroo vnrvne vnrhuçr nvefnio</p>
                    </div>
                    <div className="shadow-xl w-2/3 p-8 rounded-md">
                        <div className="flex flex-row">
                            <FaCheckCircle color="#1DBF73" size={25} className="mr-4" />
                            <h3 className="mb-4 font-serif">BEST USER EXPERIENCE</h3>
                        </div>
                        <p className="font-serif">ncjdeoanj kneojnarn vnoirari nvieornviz vjciej    oivjzeiojof fzeoz jioe.formats(['i firo ']) cnozjv nvzei noeao ojnvraro   nvroo vnrvne vnrhuçr nvefnio</p>
                    </div>
                </div>
            </div>
            <div className="rounded-lg w-2/3 mx-auto mt-5 p-5 mb-5 container mx-auto bg-green-100">
                <div className="flex flex-row">
                    <div className="mr-5">
                        <p className="text-5xl">🥳</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold font-serif mb-1">Recevez plein de cadeau en invitant vos proches !</h2>
                        <p className="text-gray-600 font-serif mb-4">Gagnez 500 FCFA pour chaque ami que vous invitez 😇</p>
                        <button className="about-create-button">Creez votre compte</button>
                    </div>
                </div>
            </div>
        </div>
    )
}