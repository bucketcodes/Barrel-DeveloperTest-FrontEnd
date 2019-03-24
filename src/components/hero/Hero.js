import React from "react";
import "./Hero.css";

export default function Hero({ backgroundURL, title, content, imageURL }) {
  return (
    <div
      className="Hero_Container"
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 59%, rgba(0, 0, 0, 0.85) 100%), url(${backgroundURL})`
        
      }}
    >
      <div className="Hero_Container_Inner">
        <div style={{ marginTop: -90 }}>
          {title && <h1 style={{ color: "white" }}>{title}</h1>}
          {content && <p style={{ color: "white" }}>{content}</p>}
        </div>
        <div>
          {imageURL && (
            <img
              className='Hero_Display_Image'
              alt="display item"
              src={imageURL}
            />
          )}
        </div>
      </div>
    </div>
  );
}
