import React from "react";
import "./Home.css";
import Product from "./Product";

function home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt=""
        />

        <div className="home__row">
          <Product id= '000001' title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={22.99} image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'  rating={5} />

          <Product id='000002' title="The Lightning Thief (Percy Jackson and the Olympians, Book 1)" price={5.97} image="https://images-na.ssl-images-amazon.com/images/I/51BfYSYSfxL._SX336_BO1,204,203,200_.jpg" rating={4} />
        </div>

        <div className="home__row">
        <Product id='000003' title="Logitech Brio 4K Webcam, Ultra 4K HD Video Calling, Noise-Canceling mic, HD Auto Light Correction, Wide Field of View, Works with Microsoft Teams, Zoom, Google Voice, PC/Mac/Laptop/Macbook/Tablet" price={169.99} image="https://m.media-amazon.com/images/I/61OQP2+yqML._AC_SL1500_.jpg" rating={4} />

        <Product id='000004' title="Logitech G910 Orion Spectrum RGB Wired Mechanical Gaming Keyboard , Black" price={64.99} image="https://m.media-amazon.com/images/I/61IVHE8oy9L._AC_SL1024_.jpg" rating={4} />

        <Product id='000005' title="Razer BlackShark V2 Gaming Headset: THX 7.1 Spatial Surround Sound - 50mm Drivers - Detachable Mic - PC, PS4, PS5, Switch, Xbox One, Xbox Series X and S, Mobile - 3.5 mm Audio Jack and USB DAC - Black" price={99.99} image="https://m.media-amazon.com/images/I/61wrOi+03FL._AC_SL1500_.jpg" rating={3} />
        </div>
        <div className="home__row">
        <Product id='000006' title="SAMSUNG 85-Inch Class Neo QLED 8K QN800A Series - 8K UHD Quantum HDR 32x Smart TV with Alexa Built-in (QN85QN800AFXZA, 2021 Model)" price="3,400.99" image="https://m.media-amazon.com/images/I/81bmOxFZYWL._AC_SL1500_.jpg" rating={3} />
        </div>
      </div>
    </div>
  );
}

export default home;
