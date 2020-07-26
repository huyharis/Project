import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.125321787524!2d106.71257075088646!3d10.801712492266637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a5aa48586b%3A0xc09e21d8d9c129c4!2zMjA1IMSQaeG7h24gQmnDqm4gUGjhu6csIFBoxrDhu51uZyAyNSwgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1595773154677!5m2!1svi!2s"
        width="100%"
        height="500px"
        frameborder="0"
        allowFullScreen
      ></iframe>

      <div className="location_tag">
        <div>location</div>
      </div>
    </div>
  );
};

export default Location;
