"use client";

import Layout from "@/components/Layout";
import PrimaryButton from "@/components/PrimaryButton";
import YourPurchase from "@/components/YourPurchase";
import Plusminus from "@/components/Plusminus";
import { useState, useEffect, useRef } from "react";
import HeaderTwo from "@/components/HeaderTwo";
import RadioBtn from "@/components/RadioBtn";
import TentRadioBtnOne from "@/components/TentRadioBtnOne";
import TentRadioBtnTwo from "@/components/TentRadioBtnTwo";
import GreenCamping from "@/components/GreenCamping";
import Labelinput from "@/components/Labelinput";
import Dob from "@/components/Dob";
import EkstraTicket from "@/components/EkstraTicket";
import Cardinfo from "@/components/Cardinfo";

// import Link from "@/components/Link";

export default function Home() {
  const form = useRef(null);
  //metode til at få vist "flere sider" ligesom i matasquizzen
  const [visible, setVisible] = useState(1);

  //states og objects til CHOOSE TICKETS------------------------------------------------------------
  //arrayet der holder styr på antal af hendholdvis regular- samt vip-tickets
  const [ticket, setTicket] = useState({ regular: 0, vip: 0 });
  // console.log("ticket er", ticket);

  // Dette objekt bliver det komplette objekt med alle opsamlede værdier
  let dataObj = {};
  // console.log(dataObj);
  // Dette objekt, bliver objektet der sendes i PUT-requesten
  let putDataObj = {};

  //KOMMENTAR: dette array skal holde styr på, hvor mange tickets der er bestilt, så vi til sidst kan map'e over antallet  og tildele korrekt antal telte (hvis man vælger "CREW TENTS" samt lave x antal "ekstra tickets".
  //   Der bliver tilføjer "ticket" til arrayet
  const [ticketArray, setTicketArray] = useState([]);
  console.log(ticketArray);

  //states og objects til CHOOSE CAMPINGSPOTS------------------------------------------------------
  const [chosenSpot, setChosenSpot] = useState("");

  // console.log(chosenSpot);

  //Her tjekker den om required er opfyldt i CHOOSE CAMPINGSPOTS, når submit knappen trykkes på i dens form
  function validateCampspot() {
    // Jeg tilføjer chosenSpot og ticketAmount til vores putDataObj da dette sendes i PUT-requesten
    putDataObj.area = chosenSpot;
    putDataObj.amount = ticketAmount;
    // console.log("dette er PUTobjektet", putDataObj);
    sendPutRequest();

    dataObj.regular = ticket.regular;
    dataObj.vip = ticket.vip;
    dataObj.amount = ticketAmount;
    dataObj.campingspot = chosenSpot;
    // console.log("dette er dataObjekt", dataObj);

    setVisible((o) => o + 1);
  }

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
  //console.log("amout er", ticketAmount);

  // Denne funktion bliver kaldt når der klikkes submit på chooseCampingspot-siden. Funktionen sender et PUT-request, som returnerer et id, hvis der er plads på spot'et
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
    // Har ændret koden fra at være ".text()" til ".json()", så objektet der udskrives er json
    let data = await response.json();
    //data indeholder vores Id, som skal postes
    // console.log(data);
  }

  //states og objects til CHOOSE TENT OPTION-------------------------------------------------------
  //States der holder styr på antal a to-personers telte og 3-personers telte
  const [twoPers, setTwoPers] = useState(0);
  const [threePers, setThreePers] = useState(0);

  //beregnTelte sørger for at tildele korrekt antal telte til køberen, som herefter kan vises i YOUR PURCHASE
  function beregnTelte() {
    if (ticketAmount === 2) {
      setTwoPers((old) => old + 1);
    } else if (ticketAmount === 3) {
      setThreePers((old) => old + 1);
    } else if (ticketAmount === 4) {
      setTwoPers((old) => old + 2);
    } else if (ticketAmount === 5) {
      setTwoPers((old) => old + 1);
      setThreePers((old) => old + 1);
    } else if (ticketAmount === 6) {
      setThreePers((old) => old + 2);
    }
    //indtil man har valgt 10 billetter
  }
  // console.log("dette er twoPers", twoPers);
  // console.log("dette er twoPers", threePers);

  //Hvis man medbringer sit eget telt, er dette state true
  const [tentOption, setTentOption] = useState("");

  //State der holder styr på om GREEN CAMPING  er valgt eller ikke
  const [greenCamping, setGreenCamping] = useState(false);
  // console.log(greenCamping);

  //states og objects til PERSONAL INFORMATION-------------------------------------------------------

  //For at vide hvor mange ekstra personer, der er udover køberen selv, skal vi fjerne én billet fra det samlede antal billetter (i ticketArray) med pop.
  // Så har vi et array med et antal items, der passer til antallet af ekstra personer udover køberen.
  // Vi laver lige en kopi i stedet for at modificere det originale array
  let copyTicketArray = ticketArray;

  return (
    <Layout>
      {/* I denne section har vi ikke noget form-tag, da vi ikke bruger inputfelter på den første "side". Derimod samler vi data i et object, når der klikkes next */}
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
                      // KOMMENTAR ved klik tilføjes "ticket" til ticketArray.
                      setTicketArray((oldArray) => [...oldArray, "ticket"]);
                    }
                  }}
                  //sender en prop ned til Plusminus. Funktionen vil trække et tal fra 'regular ticket'
                  updateTicketSubstract={function updateTickets() {
                    {
                      setTicket((old) => ({ ...old, regular: old.regular - 1 }));
                      // KOMMENTAR slice(0, -1) sørger for at fjerne det sidste item i arrayet
                      setTicketArray((oldArray) => oldArray.slice(0, -1));
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
                      // KOMMENTAR ved klik tilføjes "ticket" til ticketArray
                      setTicketArray((oldArray) => [...oldArray, "ticket"]);
                    }
                  }}
                  updateTicketSubstract={function updateTickets() {
                    {
                      setTicket((old) => ({ ...old, vip: old.vip - 1 }));
                      // KOMMENTAR slice(0, -1) sørger for at fjerne det sidste item i arrayet
                      setTicketArray((oldArray) => oldArray.slice(0, -1));
                    }
                  }}
                  setTicket={setTicket}
                />
                <p className="justify-self-end">1299,-</p>
              </div>
            </div>
            {/* Her sendes ticket (som er et objekt) ned til YourPurchase, så jeg senerehen kan få fat i regular samt vip-værdierne */}
            <YourPurchase ticket={ticket} twoPers={twoPers} threePers={threePers} />
          </div>
          <PrimaryButton
            text="NEXT"
            onClick={() => {
              setVisible((o) => o + 1);
            }}
          />
        </section>
      )}
      {visible === 2 && (
        <section>
          <HeaderTwo page="Checkout"></HeaderTwo>
          <h3>CHOOSE CAMPINGSPOT</h3>
          <form action={validateCampspot}>
            <RadioBtn spotsAvail={spotsAvail} chosenSpot={chosenSpot} setChosenSpot={setChosenSpot} name="campspots" id="Svartheim" text="SVARTHEIM" ticketAmount={ticketAmount}></RadioBtn>
            <RadioBtn spotsAvail={spotsAvail} chosenSpot={chosenSpot} setChosenSpot={setChosenSpot} name="campspots" id="Nilfheim" text="NILFHEIM" ticketAmount={ticketAmount}></RadioBtn>
            <RadioBtn spotsAvail={spotsAvail} chosenSpot={chosenSpot} setChosenSpot={setChosenSpot} name="campspots" id="Helheim" text="HELHEIM" ticketAmount={ticketAmount}></RadioBtn>
            <RadioBtn spotsAvail={spotsAvail} chosenSpot={chosenSpot} setChosenSpot={setChosenSpot} name="campspots" id="Muspelheim" text="MUSPELHEIM" ticketAmount={ticketAmount}></RadioBtn>
            <RadioBtn spotsAvail={spotsAvail} chosenSpot={chosenSpot} setChosenSpot={setChosenSpot} name="campspots" id="Alfheim" text="ALFHEIM" ticketAmount={ticketAmount}></RadioBtn>
            <YourPurchase ticket={ticket} campingspot={chosenSpot.toUpperCase()} twoPers={twoPers} threePers={threePers} />
            <PrimaryButton
            // onClick={() => {
            //   // Jeg tilføjer chosenSpot og ticketAmount til vores putDataObj da dette sendes i PUT-requesten
            //   putDataObj.area = chosenSpot;
            //   putDataObj.amount = ticketAmount;
            //   console.log("dette er PUTobjektet", putDataObj);
            //   sendPutRequest();

            //   setVisible((o) => o + 1);
            // }}
            />
          </form>
        </section>
      )}
      {visible === 3 && (
        <section className="">
          <HeaderTwo page="Checkout"></HeaderTwo>
          <h3>CHOOSE A TENT OPTION</h3>
          <form action="" className="w-full h-fit md:grid md:grid-cols-2 md:gap-8">
            <div>
              <TentRadioBtnOne name="tentoption" id="CrewTents" text="CREW TENTS" beregnTelte={beregnTelte} tentOption={tentOption} setTentOption={setTentOption}></TentRadioBtnOne>
              <TentRadioBtnTwo name="tentoption" id="BringYourOwn" text="BRING YOUR OWN" setTwoPers={setTwoPers} setThreePers={setThreePers} tentOption={tentOption} setTentOption={setTentOption}></TentRadioBtnTwo>
              <GreenCamping greenCamping={greenCamping} setGreenCamping={setGreenCamping} />
            </div>
            <div className="w-full justify-self-end">
              <YourPurchase ticket={ticket} campingspot={chosenSpot.toUpperCase()} twoPers={twoPers} threePers={threePers} greenCamping={greenCamping} tentOption={tentOption} />
              <PrimaryButton
                text="NEXT"
                // onClick={() => {
                //   //For at vide hvor mange ekstra personer, der er udover køberen selv, skal vi fjerne én billet fra det samlede antal billetter (i ticketArray) med pop. Efter pop, har vi altså et array med et antal items, der passer til antallet af ekstra personer udover køberen.
                //   // Hér arbejder vi med kopien
                //   copyTicketArray.pop();

                //   setVisible((o) => o + 1);
                // }}
              />
            </div>
          </form>
        </section>
      )}
      {visible === 4 && (
        <section>
          <HeaderTwo page="Checkout"></HeaderTwo>
          <h3>PERSONAL INFORMATION</h3>
          <form action="">
            <div>
              <div tabIndex={0} className="collapse bg-[var(--primary-color)] collapse-arrow border border-[var(--accent-color)] rounded-none">
                <input type="checkbox" />
                <div className="collapse-title text-[var(--secondary-color)] text-xl md:text-4xl">YOUR INFORMATION</div>
                <div className="collapse-content">
                  <Labelinput label="FIRSTNAME" placeholder="EX. PETER"></Labelinput>
                  <Labelinput label="LASTNAME" placeholder="EX. THOMSON"></Labelinput>
                  <Dob></Dob>
                  <Labelinput label="ADRESS" placeholder="EX. STENSTYKKEVEJ, 62"></Labelinput>
                  <Labelinput label="ZIPCODE" placeholder="EX. 2650"></Labelinput>
                  <Labelinput label="CITY" placeholder="EX. HVIDOVRE"></Labelinput>
                  <Labelinput label="EMAIL" placeholder="EX. THOMSON@HOTMAIL.COM"></Labelinput>
                  <Labelinput label="TELEPHONE NR." placeholder="TELEPHONE NR.FIIIIIIX!!!"></Labelinput>
                </div>
              </div>
            </div>
            {/*Hér mapper vi igennem copyTicketArray og sørger for at returnere en EkstraTicket-komponent for hver item der er i vores copyTicketArray*/}
            {copyTicketArray.map((item) => {
              const uniqueId = Math.random();
              return <EkstraTicket id={uniqueId} key={uniqueId}></EkstraTicket>;
            })}

            <YourPurchase ticket={ticket} campingspot={chosenSpot.toUpperCase()} twoPers={twoPers} threePers={threePers} greenCamping={greenCamping} bringYourOwn={bringYourOwn} />
            <PrimaryButton
              text="NEXT"
              onClick={() => {
                //Vi tilføjer vores states som items til dataObj
                dataObj.regular = ticket.regular;
                dataObj.vip = ticket.vip;
                dataObj.amount = ticketAmount;
                dataObj.campingspot = chosenSpot;
                dataObj.two_pers_tent = twoPers;
                dataObj.three_pers_tent = threePers;
                dataObj.greenCamping = greenCamping;
                // console.log("dette er dataObjekt", dataObj);
                setVisible((o) => o + 1);
              }}
            />
          </form>
        </section>
      )}
      {visible === 5 && (
        <section>
          <HeaderTwo page="Checkout"></HeaderTwo>
          <h3>CHOOSE PAYMENT</h3>
          <form action="">
            <Cardinfo></Cardinfo>
            <YourPurchase ticket={ticket} campingspot={chosenSpot.toUpperCase()} twoPers={twoPers} threePers={threePers} greenCamping={greenCamping} bringYourOwn={bringYourOwn} />
            <PrimaryButton
              text="NEXT"
              onClick={() => {
                setVisible((o) => o + 1);
              }}
            />
          </form>
        </section>
      )}
    </Layout>
  );
}
