import React from "react";
import "../styles/features.css"
import mobilephone from "../settings.png"
import {FaQrcode, FaWallet, FaStore, FaStar, FaExchangeAlt, FaMobile, FaMobileAlt} from "react-icons/fa"

export const Features = () => {
    return(
        <section className="features-container py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-3 font-serif text-white">Fonctionalités de Djonanko</h2>
                <p className="text-lg text-center text-gray-800 font-serif mb-5">
                L'application Djonanko vous offre au travers de sa fluide interface des fonctionnalités qui <br /> qui se rapprochent de vos besoins en vous permettant d'utiliser vos mobile money en toute sécurité.
                </p>

                <div className="flex flex-col items-center justify-center">
                    <div>
                        <div className="w-full sm:w-full lg:w-full p-4">
                            <div className="flex flex-col items-center justify-center p-6 mb-4" style={{backgroundColor: "#1DBF73"}}>
                                <FaQrcode color="#fff" size={50} className="mb-4" />
                                <p className="text-xl font-bold mb-2 font-serif text-white">QR Code</p>
                                <p className="text-gray-700 text-center font-serif text-white">Effectuez des transferts transferts d'argent inter-opérateur <br /> à partir d'un Qr code.</p>
                            </div>
                        </div>
                    </div>
                    {/* Image Block */}
                    <div className="flex flex-row">
                        <div className="features-mobile-left-side">
                            <div className="features-mobile-left-side-items p-4">
                                <div className="flex flex-col items-end justify-center p-6 mb-4" style={{backgroundColor: "#1DBF73"}}>
                                    <FaStore color="#fff" size={50} className="mb-4" />
                                    <p className="text-xl font-bold mb-2 font-serif text-white">Paiement marchands</p>
                                    <p className="text-gray-700 text-right font-serif text-white">Retrouvez vos marchands habituels sur djonanko, <br /> et faites des paiements à des prix bas.</p>
                                </div>
                            </div>
                            
                            <div className="features-mobile-left-side-items p-4">
                                <div className="flex flex-col items-end justify-center bg-white p-6 mb-4" style={{backgroundColor: "#1DBF73"}}>
                                    <FaExchangeAlt color="#fff" size={50} className="mb-4" />
                                    <p className="text-xl font-bold mb-2 font-serif text-white">Transfert Djonanko</p>
                                    <p className="text-gray-700 text-right font-serif text-white">Envoyez de l'argent à vos contacts à partir de Djonanko, <br /> et cela sans frais de transaction.</p>
                                </div>
                            </div>
                        </div>
                        <div className="features-mobile flex w-full sm:w-1/2 lg:w-full p-4">
                            <img
                                className="mx-auto rounded-lg"
                                src={mobilephone} 
                                alt="image screenshot"
                            />
                        </div>
                        <div className="features-mobile-left-side">
                            <div className="features-mobile-right-side-items p-4">
                                <div className="flex flex-col items-start justify-center bg-white p-6 mb-4" style={{backgroundColor: "#1DBF73"}}>
                                    <FaStar color="#fff" size={50} className="mb-4" />
                                    <p className="text-xl font-bold mb-2 font-serif text-white">Mode premium</p>
                                    <p className="text-gray-700 text-left font-serif text-white">Devenez utilisateur premium de Djonanko, <br /> et bénéficiez de reduction sur vos frais de transaction.</p>
                                </div>
                            </div>
                            
                            <div className="features-mobile-right-side-items p-4">
                                <div className="flex flex-col items-start justify-center bg-white p-6 mb-4" style={{backgroundColor: "#1DBF73"}}>
                                    <FaMobile color="#fff" size={50} className="mb-4" />
                                    <p className="text-xl font-bold mb-2 font-serif text-white">Interface intuitive</p>
                                    <p className="text-gray-700 text-left font-serif text-white">Avec Djonanko bénéficiez d'une interface intuitive, sur mésure, pour tous vos opérations mobile money.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full sm:w-full lg:w-full p-4">
                            <div className="flex flex-col items-center justify-center bg-white p-6 mb-4" style={{backgroundColor: "#1DBF73"}}>
                                <FaWallet color="#fff" size={50} className="mb-4" />
                                <p className="text-xl font-bold mb-2 font-serif text-white">Portefeuille</p>
                                <p className="text-gray-700 text-center font-serif text-white">Recevez et gardez de l'argent sur votre portefeuille Djonanko <br /> en toute sécurité.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}