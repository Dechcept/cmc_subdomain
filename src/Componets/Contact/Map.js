import React from "react";

const Map = () => {
  return (
    <div className="bg-white ">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.2718099869702!2d72.96596996208193!3d20.331685281049236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cde53a677f03%3A0xa3bb5be0c4e545f0!2sCMC%20TEXTILE%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1698822245673!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
