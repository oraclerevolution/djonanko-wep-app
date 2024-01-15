import React from "react";
import '../styles/pricing.css'
import { FaCheck } from "react-icons/fa";

export const Pricing = () => {
    return (
        <div className="pricing-container">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-3 font-serif">Choisissez votre abonnement</h2>
                <p className="text-lg text-center text-gray-800 font-serif mb-5">Profiter de 15 jours illimités pour toutes les fonctionnalités premium.</p>
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col card border p-4 w-1/4 m-3 rounded-lg">
                        <h3 className="font-bold text-center font-serif mb-3">Standard</h3>
                        <h2 className="font-bold text-center text-3xl mb-5 font-serif">0 FCFA <span className="text-sm text-gray-500 font-serif">/ mois</span></h2>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center mb-4">
                                <FaCheck color="#1dbf73" size={15} className="mr-2" />
                                <p className=" font-serif">15 jours premium illimités</p>
                            </div>
                            <div className="flex flex-row items-center mb-4">
                                <FaCheck color="#1dbf73" size={15} className="mr-2" />
                                <p className=" font-serif">Transferts inter-opérateurs: <b>3%</b></p>
                            </div>
                            <div className="flex flex-row items-center mb-4">
                                <FaCheck color="#1dbf73" size={15} className="mr-2" />
                                <p className=" font-serif">Transferts Djonanko: <b>0%</b></p>
                            </div>
                            <div className="flex flex-row items-center mb-4">
                                <FaCheck color="#1dbf73" size={15} className="mr-2" />
                                <p className=" font-serif">Transferts Djonanko: <b>0%</b></p>
                            </div>
                            <div className="flex flex-row items-center mb-4">
                                <FaCheck color="#1dbf73" size={15} className="mr-2" />
                                <p className=" font-serif">Transferts Djonanko: <b>0%</b></p>
                            </div>
                        </div>
                        <button className="pricing-download-button font-serif">Choisir ce plan</button>
                    </div>
                    <div className="card w-1/4 m-3 rounded-lg pricing-special">
                        <div className="p-2" style={{ width: "100%", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", backgroundColor: "orange" }}>
                            <p className="text-center font-bold text-white font-serif">Le plus populaire</p>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-center mb-3 text-white font-serif">Premium</h3>
                            <h2 className="font-bold text-center text-3xl mb-5 text-white font-serif">2000 FCFA <span className="text-sm text-gray-800 font-serif">/ mois</span></h2>
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center mb-4">
                                    <FaCheck color="#fff" size={15} className="mr-2" />
                                    <p className="text-white font-serif">15 jours premium illimités</p>
                                </div>
                                <div className="flex flex-row items-center mb-4">
                                    <FaCheck color="#fff" size={15} className="mr-2" />
                                    <p className="text-white font-serif">Transferts inter-opérateurs: <b>3%</b></p>
                                </div>
                                <div className="flex flex-row items-center mb-4">
                                    <FaCheck color="#fff" size={15} className="mr-2" />
                                    <p className="text-white font-serif">Transferts Djonanko: <b>0%</b></p>
                                </div>
                                <div className="flex flex-row items-center mb-4">
                                    <FaCheck color="#fff" size={15} className="mr-2" />
                                    <p className="text-white font-serif">Transferts Djonanko: <b>0%</b></p>
                                </div>
                                <div className="flex flex-row items-center mb-4">
                                    <FaCheck color="#fff" size={15} className="mr-2" />
                                    <p className="text-white font-serif">Transferts Djonanko: <b>0%</b></p>
                                </div>
                                <div className="flex flex-row items-center mb-4">
                                    <FaCheck color="#fff" size={15} className="mr-2" />
                                    <p className="text-white font-serif">Compte marchands</p>
                                </div>
                                <div className="flex flex-row items-center mb-4">
                                    <FaCheck color="#fff" size={15} className="mr-2" />
                                    <p className="text-white font-serif">Interface de suivi des commandes</p>
                                </div>
                                <button className="pricing-download-button-pop font-serif">Choisir ce plan</button>
                            </div>
                        </div>
                    </div>
                    <div className="card border p-4 w-1/4 m-3 rounded-lg">
                        <h3 className="font-bold text-center font-serif mb-3">Entreprise</h3>
                        <h2 className="font-bold text-center text-3xl mb-5">Personnalisé</h2>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center mb-4">
                                <FaCheck color="#1dbf73" size={15} className="mr-2" />
                                <p className=" font-serif">15 jours premium illimités</p>
                            </div>
                            <div className="flex flex-row items-center mb-4">
                                <FaCheck color="#1dbf73" size={15} className="mr-2" />
                                <p className=" font-serif">Transferts inter-opérateurs: <b>3%</b></p>
                            </div>
                            <div className="flex flex-row items-center mb-4">
                                <FaCheck color="#1dbf73" size={15} className="mr-2" />
                                <p className=" font-serif">Transferts Djonanko: <b>0%</b></p>
                            </div>
                            <div className="flex flex-row items-center mb-4">
                                <FaCheck color="#1dbf73" size={15} className="mr-2" />
                                <p className=" font-serif">Transferts Djonanko: <b>0%</b></p>
                            </div>
                            <div className="flex flex-row items-center mb-4">
                                <FaCheck color="#1dbf73" size={15} className="mr-2" />
                                <p className=" font-serif">Transferts Djonanko: <b>0%</b></p>
                            </div>
                            <button className="pricing-download-button font-serif">Contactez-nous</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}