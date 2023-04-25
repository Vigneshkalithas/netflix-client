import React, { useState } from "react";
import "../Styles/Contact.css";
import { GrMail } from "react-icons/gr";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const ContactCardData = [
  {
    logos: <GrMail />,
    name: "Email Us",
    content: "Interactively grow backend ideas for cross-platform models.",
  },
  {
    logos: <BsFillPhoneFill />,
    name: "Call Us",
    content: "Distinctively exploit optimal alignments for intuitive bandwidth",
  },
  {
    logos: <MdLocationOn />,
    name: "Location",
    content: "Dar es salaam, Tanzania. 345 Kigamboni, Street No. 12,",
  },
];

function ContactCards() {
  return (
    <>
      {ContactCardData.map((x, index) => {
        return (
          <div className="contact-card" key={index}>
            <div className="svgHead">{x.logos}</div>
            <div className="text-head-contact">
              <p>{x.name}</p>
            </div>
            <div className="foooter-contact">
              <p>{x.content}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ContactCards;
