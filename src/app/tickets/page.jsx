"use client";
//DOOOOOOONT MEEEERGE JULIIIIIIE (skal lave egen underside)!!!!!!!

import Layout from "@/components/Layout";
import PrimaryButton from "@/components/PrimaryButton";
import YourPurchase from "@/components/YourPurchase";
import Plusminus from "@/components/Plusminus";
import { useState, useEffect } from "react";
import HeaderTwo from "@/components/HeaderTwo";
import RadioBtn from "@/components/RadioBtn";

// import Link from "@/components/Link";

export default function Home() {
  //metode til at få vist "flere sider" ligesom i matasquizzen

  //states og objects til CHOOSE TICKETS-------------
  const [visible, setVisible] = useState(1);
  //arrayet der holder styr på antal af hendholdvis regular- samt vip-tickets
  const [ticket, setTicket] = useState({ regular: 0, vip: 0 });
  // console.log("ticket er", ticket);

  // Dette objekt bliver det komplette objekt med alle opsamlede værdier
  let dataObj = {};
  // Dette objekt, bliver objektet der sendes i PUT-requesten
  let putDataObj = {};

  //dette array skal holde styr på, hvor mange tickets der er bestilt, så vi til sidst kan map'e over antallet og lave x antal "ekstra tickets"
  // KOMMENTAR const [ticketArray, setTicketArray] = useState([]);

  //states og objects til CHOOSE CAMPINGSPOTS-------------
  const [chosenSpot, setChosenSpot] = useState("");
  console.log(chosenSpot);

  const [spotsAvail, setSpotsAvail] = useState([]);
  // console.log("Dette er spots avail", spotsAvail);

  useEffect(() => {
    async function fetchFunction() {
      let response = await fetch(`http://localhost:8080/available-spots`, { method: "GET" });
      const data = await response.json();
      setSpotsAvail(data);
    }
    fetchFunction();
  }, []);

  // Beregner det fulde antal af billetter
  const ticketAmount = ticket.regular + ticket.vip;
  // console.log("amout er", ticketAmount);

  // Denne funktion bliver kaldt når der klikkes næste på chooseCampingspot-siden. Funktionen sender et PUT-request, som returnerer et id, hvis der er plads på spot'et
  async function sendPutRequest() {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify(putDataObj);

    let response = await fetch("http://localhost:8080/reserve-spot", {
      method: "PUT",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.text();
    console.log(data);
  }

  return (
    <Layout>
      {/* Choose tickets
      I denne section har vi ikke noget form-tag, da vi ikke bruger inputfelter på den første "side". Derimod samler vi data i et object, når der klikkes next */}
      {visible === 1 && (
        <section>
          <HeaderTwo page="Checkout"></HeaderTwo>
          <h3>CHOOSE TICKETS</h3>
          <div className="">
            <div className="outline outline-[var(--accent-color)] outline-1 p-5 mb-12">
              <div className="grid grid-cols-[145px,_1fr,_1fr] place-items-center mb-8">
                <p className="justify-self-start">REGULAR TICKET</p>
                <Plusminus
                  //sender en prop ned til Plusminus. Funktionen vil add' et tal til 'regular ticket'
                  updateTicketAdd={function updateTickets() {
                    {
                      setTicket((old) => ({ ...old, regular: old.regular + 1 }));
                      // KOMMENTAR setTicketArray((oldArray) => [...oldArray, `ticket`]);
                    }
                  }}
                  //sender en prop ned til Plusminus. Funktionen vil trække et tal fra 'regular ticket'
                  updateTicketSubstract={function updateTickets() {
                    {
                      setTicket((old) => ({ ...old, regular: old.regular - 1 }));
                      // KOMMENTAR setTicketArray((oldArray) => oldArray.pop());
                    }
                  }}
                  setTicket={setTicket}
                />
                <p className="justify-self-end">799,-</p>
              </div>
              <div className="grid grid-cols-[145px,_1fr,_1fr] place-items-center">
                <p className="justify-self-start">VIP TICKET</p>
                <Plusminus
                  //sender en prop med til Plusminus. Funktionen vil add' et tal til 'regular ticket' eller trække et tal fra
                  updateTicketAdd={function updateTickets() {
                    {
                      setTicket((old) => ({ ...old, vip: old.vip + 1 }));
                      // KOMMENTAR setTicketArray((oldArray) => [...oldArray, `ticket`]);
                    }
                  }}
                  updateTicketSubstract={function updateTickets() {
                    {
                      setTicket((old) => ({ ...old, vip: old.vip - 1 }));
                    }
                  }}
                  setTicket={setTicket}
                />
                <p className="justify-self-end">1299,-</p>
              </div>
            </div>
            {/* Her sendes ticket (som er et objekt) ned til YourPurchase, så jeg senerehen kan få fat i regular samt vip-værdierne */}
            <YourPurchase ticket={ticket} />
          </div>
          <PrimaryButton
            onClick={() => {
              setVisible((o) => o + 1);
            }}
          />
        </section>
      )}
      {/* Choose campingspot */}
      {visible === 2 && (
        <section>
          <HeaderTwo page="Checkout"></HeaderTwo>
          <h3>CHOOSE CAMPINGSPOT</h3>
          <form action="">
            <RadioBtn spotsAvail={spotsAvail} setChosenSpot={setChosenSpot} name="campspots" id="Svartheim" text="SVARTHEIM"></RadioBtn>
            <RadioBtn spotsAvail={spotsAvail} setChosenSpot={setChosenSpot} name="campspots" id="Nilfheim" text="NILFHEIM"></RadioBtn>
            <RadioBtn spotsAvail={spotsAvail} setChosenSpot={setChosenSpot} name="campspots" id="Helheim" text="HELHEIM"></RadioBtn>
            <RadioBtn spotsAvail={spotsAvail} setChosenSpot={setChosenSpot} name="campspots" id="Muspelheim" text="MUSPELHEIM"></RadioBtn>
            <RadioBtn spotsAvail={spotsAvail} setChosenSpot={setChosenSpot} name="campspots" id="Alfheim" text="ALFHEIM"></RadioBtn>
            <YourPurchase ticket={ticket} campingspot={chosenSpot.toUpperCase()} />
            <PrimaryButton
              onClick={() => {
                // Jeg tilføjer chosenSpot og ticketAmount til vores putDataObj da dette sendes i PUT-requesten
                putDataObj.area = chosenSpot;
                putDataObj.amount = ticketAmount;
                console.log("dette er PUTobjektet", putDataObj);
                sendPutRequest();

                dataObj.regular = ticket.regular;
                dataObj.vip = ticket.vip;
                dataObj.amount = ticketAmount;
                dataObj.campingspot = chosenSpot;
                console.log("dette er dataObjekt", dataObj);
                setVisible((o) => o + 1);
              }}
            />
          </form>
        </section>
      )}
    </Layout>
  );
}
