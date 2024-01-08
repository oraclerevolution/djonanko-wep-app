import React from "react";
import playstore from "../toppng 1.png"
import appstore from "../PngItem_1144050 2.png"
import mobilephone from "../settings.png"
import logo from "../logo.svg"
import "../styles/hero.css"

export const Hero = () => {
    return(
        <div className='hero-container'>
            <div className="container mx-auto">
        {/* bare d'information */}
        <div className='flex flex-row mb-3'>
          <div className="w-1/6 p-5">
            <p>info-djonanko@gmail.com</p>
          </div>
          <div className="w-1/2 p-5">
            <p>(+225) 07 09 48 34 63</p>
          </div>
          <div className="w-1/7 p-5">Left</div>
          <div className="w-1/7 p-5">Right</div>
          <div className="w-1/7 p-5">Left</div>
          <div className="w-1/7 p-5">Right</div>
        </div>
        {/* bare de menu */}
        <div className='flex flex-row justify-between menu-container rounded-md pl-3 pr-3 mb-3'>
          <div className='w-1/2 flex flex-row'>
            <div className='w-1/6 border-1'>
              <a>Home</a>
            </div>
            <div className='w-1/6 border-1'>
              <a>About</a>
            </div>
            <div className='w-1/2 border-1'>
              <a>Features</a>
            </div>
          </div>
          <div className='logo-container'>
            <img src={logo} alt="logo" className="logo" width="100px" height="100px" />
          </div>
          <div className='w-2/5 flex flex-row justify-end'>
            <div className='w-1/3 border-1'>
              <a>Screenshots</a>
            </div>
            <div className='w-1/5 border-1'>
              <a>Services</a>
            </div>
          </div>
          <button className='hero-download-button'>DOWNLOAD</button>
        </div>

        {/* hero banner */}
        <div className="hero-banner flex flex-row">
          <div className="w-1/2 p-5 hero-left-side">
            <div className='div-transparent flex pt-5 pb-5 border-8 w-2/3'>
              <div className='hero-presenation flex flex-col'>
                <h1 className='hero-title mb-3'>Découvrez Djonanko</h1>
                <p className='hero-subtitle mb-5'>Découvrez votre application mobile qui vous permet d'éffectuer des transferts d'argent inter-opérateur et des paiements marchands avec des frais inégalés. </p>
                <h3 className='download-title mb-2'>Télécharger maintenant</h3>
                <div className='flex flex-row align-center justify-start'>
                  <img src={playstore} className='mr-3' alt="playstore" height="50px" width="150px" />
                  <img src={appstore} className='mr-3' alt="appstore" height="50px" width="150px" style={{position: "relative", bottom: "1px"}} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-5 flex justify-center">
            <img src={mobilephone} alt="logo" height="600px" width="330px" />
          </div>
        </div>
            </div>
        </div>
    )
}