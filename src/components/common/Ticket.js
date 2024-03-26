import React from "react";

function Ticket(props) {
  return (
        <div className="ticket">
          <div className="ticket-postar"><img src={props.tickets.url.type} alt="img" /></div>
          <div className="dash-line"></div>
          <span className="ticket-title">{props.tickets.name}</span>
          <div className="time">
            <span>{props.tickets.date}</span>
            <span>{props.tickets.day}</span>
            <span>{props.tickets.time}</span>
          </div>
          <span className="venue">
            {props.tickets.venue}
          </span>
          <button className="ticket-button">{props.tickets.button}</button>
        </div>
  );
}

export default Ticket;
