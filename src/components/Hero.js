import React from "react";
import playstore from "../toppng 1.png"
import appstore from "../PngItem_1144050 2.png"
import mobilephone from "../settings.png"
import logo from "../logo.svg"
import "../styles/hero.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaArrowDown } from "react-icons/fa"
import { Parallax, useParallax } from "react-scroll-parallax";

export const Hero = () => {

  return (
    <div className='hero-container'>
      <div className="container mx-auto">
        {/* bare d'information */}
        <div className='flex flex-1 align-center flex-row mb-3'>
          <div className="flex flex-row w-2/4">
            <div className="p-5">
              <p className="text-sm text-white">info-djonanko@gmail.com</p>
            </div>
            <div className="p-5">
              <p className="text-sm text-white">(+225) 07 09 48 34 63</p>
            </div>
          </div>

          <div className="flex flex-row w-2/4 justify-end">
            <div className="icons-div p-5">
              <FaFacebookF color="#fff" size={20} />
            </div>
            <div className="icons-div p-5">
              <FaTwitter color="#fff" size={20} />
            </div>
            <div className="icons-div p-5">
              <FaInstagram color="#fff" size={20} />
            </div>
            <div className="icons-div p-5">
              <FaYoutube color="#fff" size={20} />
            </div>
          </div>
        </div>
        {/* bare de menu */}
        <div className='flex flex-row justify-between menu-container rounded-md pl-3 pr-3 mb-3'>
          <div className='w-1/2 flex flex-row'>
            <div className='w-1/6 border-1'>
              <a className="font-serif">Accueil</a>
            </div>
            <div className='w-1/6 border-1'>
              <a className="font-serif">A propos</a>
            </div>
            <div className='w-1/2 border-1'>
              <a className="font-serif">Fonctionnalités</a>
            </div>
          </div>
          <div className='logo-container'>
            <img src={logo} alt="logo" className="logo" width="100px" height="100px" />
          </div>
          <div className='w-2/5 flex flex-row justify-end'>
            <div className='w-1/5 border-1'>
              <a className="font-serif">Écrans</a>
            </div>
            <div className='w-1/5 border-1'>
              <a className="font-serif">Services</a>
            </div>
          </div>
          <button className='hero-download-button font-serif'>DOWNLOAD</button>
        </div>

        {/* hero banner */}
        <div className="hero-banner flex flex-row">
          <Parallax speed={-20}>
            <div className="w-1/2 p-5 hero-left-side">
              <div className='div-transparent flex pt-5 pb-5 w-2/3'>
                <div className='hero-presenation flex flex-col'>
                  <h1 className='hero-title font-serif mb-3'>Découvrez Djonanko</h1>
                  <p className='hero-subtitle mb-5 text-gray-800 font-serif'>Découvrez votre application mobile qui vous permet d'éffectuer des transferts d'argent inter-opérateur et des paiements marchands avec des frais inégalés. </p>
                  <h3 className='download-title font-bold mb-2 font-serif'>Télécharger maintenant</h3>
                  <div className='flex flex-row align-center justify-start'>
                    <img src={playstore} className='mr-3' alt="playstore" height="50px" width="150px" />
                    <img src={appstore} className='mr-3' alt="appstore" height="50px" width="150px" style={{ position: "relative", bottom: "1px" }} />
                  </div>
                </div>
              </div>
              
            </div>
          </Parallax>
          <Parallax speed={15} className="w-1/2 p-5 flex justify-center">
            <div className="">
              <img src={mobilephone} style={{ position: "relative", top: "200px" }} alt="logo" height="600px" width="500px" />
            </div>
          </Parallax>
        </div>
        <Parallax
          translateX={['-400px', '0px']}
          scale={[0.75, 1]}
          rotate={[-180, 0]}
          easing="easeInQuad"
          className="shadow-2xl font-bold font-serif p-8 rounded-md"
          style={{ backgroundColor: "#1dbf73", color: "white", maxWidth: "300px", height: "200px", display:"flex", alignItems:"center", justifyContent:"center" }}
        >
          <p>👋🏻 Ici c'est Djonan Djonanko</p>
        </Parallax>
      </div>
    </div>
  )
}