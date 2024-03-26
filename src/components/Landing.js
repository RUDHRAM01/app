import React from "react";
import { player, add, ticket } from "../assets/data/data";
import Card from "./common/Card";
import Add from "./common/Add";
import Button from "./common/Button";
import Ticket from "./common/Ticket";

function Landing() {

  const nextTicket = () => {
    
    const ticket = document.querySelector(".ticket-with-button");
    console.log(ticket);
    ticket.scrollLeft += 300;
  };

  const prevTicket = () => {
    const ticket = document.querySelector(".ticket-with-button");
    console.log(ticket);
    ticket.scrollLeft -= 300;
  };
  return (
    <div className="landing">
      <h2> Sports </h2>
      <div className="component">
        {player.map((players, index) => {
          return <Card key={index} players={players} />;
        })}

        {add.map((adds, index) => {
          return <Add key={index} adds={adds} />;
        })}
      </div>
      <Button name="See More" />
      <div className="ticket-component">
        <h1>Collection Spotlight</h1>
        <span className="ticket-subheading">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </span>
          <button className="ticket-controlbtn-1" onClick={nextTicket}>
            {">"}
          </button>
          <div className="ticket-with-button">
            <div className="tickets">
              {ticket.map((tickets, index) => {
                return (
                  <Ticket
                    key={index}
                    tickets={tickets}
                  />
                );
              })}
            </div>
          </div>
          <button className="ticket-controlbtn-2" onClick={prevTicket}>
            {"<"}
          </button>
        </div>
      </div>
  );
}

export default Landing;
