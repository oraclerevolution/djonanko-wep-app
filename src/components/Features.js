import React from "react";
import "../styles/features.css"
import mobilephone from "../settings.png"
import {FaQrcode, FaWallet, FaStore, FaStar, FaExchangeAlt, FaMobile, FaMobileAlt} from "react-icons/fa"

export const Features = () => {
    return(
        <section className="features-container py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">APP FEATURES</h2>
                <p className="text-lg text-center text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et libero vitae leo suscipit dapibus. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et libero vitae leo suscipit dapibus.
                </p>

                <div className="flex flex-col items-center justify-center">
                    <div>
                        <div className="w-full sm:w-full lg:w-full p-4">
                            <div className="flex flex-col items-center justify-center p-6 mb-4" style={{backgroundColor: "#1DBF73"}}>
                                <FaQrcode color="#fff" size={50} className="mb-4" />
                                <p className="text-xl font-bold mb-2">QR Code</p>
                                <p className="text-gray-700 text-center">Effectuez des transferts transferts d'argent inter-opérateur <br /> à partir d'un Qr code.</p>
                            </div>
                        </div>
                    </div>
                    {/* Image Block */}
                    <div className="flex flex-row">
                        <div className="features-mobile-left-side">
                            <div className="features-mobile-left-side-items p-4">
                                <div className="flex flex-col items-center justify-center p-6 mb-4" style={{backgroundColor: "#1DBF73"}}>
                                    <FaStore color="#fff" size={50} className="mb-4" />
                                    <p className="text-xl font-bold mb-2">Paiement marchands</p>
                                    <p className="text-gray-700">Retrouvez vos marchands habituels sur djonanko, <br /> et faites des paiements à des prix bas.</p>
                                </div>
                            </div>
                            
                            <div className="features-mobile-left-side-items p-4">
                                <div className="flex flex-col items-center justify-center bg-white p-6 mb-4" style={{backgroundColor: "#1DBF73"}}>
                                    <FaExchangeAlt color="#fff" size={50} className="mb-4" />
                                    <p className="text-xl font-bold mb-2">Transfert Djonanko</p>
                                    <p className="text-gray-700">Envoyez de l'argent à vos contacts à partir de Djonanko, <br /> et cela sans frais de transaction.</p>
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
                                <div className="flex flex-col items-center justify-center bg-white p-6 mb-4" style={{backgroundColor: "#1DBF73"}}>
                                    <FaStar color="#fff" size={50} className="mb-4" />
                                    <p className="text-xl font-bold mb-2">Mode premium</p>
                                    <p className="text-gray-700">Devenez utilisateur premium de Djonanko, <br /> et bénéficiez de reduction sur vos frais de transaction.</p>
                                </div>
                            </div>
                            
                            <div className="features-mobile-right-side-items p-4">
                                <div className="flex flex-col items-center justify-center bg-white p-6 mb-4" style={{backgroundColor: "#1DBF73"}}>
                                    <FaMobile color="#fff" size={50} className="mb-4" />
                                    <p className="text-xl font-bold mb-2">Interface intuitive</p>
                                    <p className="text-gray-700">Avec Djonanko bénéficiez d'une interface intuitive, sur mésure, pour tous vos opérations mobile money.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full sm:w-full lg:w-full p-4">
                            <div className="flex flex-col items-center justify-center bg-white p-6 mb-4" style={{backgroundColor: "#1DBF73"}}>
                                <FaWallet color="#fff" size={50} className="mb-4" />
                                <p className="text-xl font-bold mb-2">Portefeuille</p>
                                <p className="text-gray-700 text-center">Recevez et gardez de l'argent sur votre portefeuille Djonanko <br /> en toute sécurité.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}