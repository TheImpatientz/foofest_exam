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
  // console.log(ticketArray);

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
  const [bringYourOwn, setBringYourOwn] = useState(false);

  //State der holder styr på om GREEN CAMPING  er valgt eller ikke
  const [greenCamping, setGreenCamping] = useState(false);
  // console.log(greenCamping);

  //states og objects til PERSONAL INFORMATION-------------------------------------------------------

  //For at vide hvor mange ekstra personer, der er udover køberen selv, skal vi fjerne én billet fra det samlede antal billetter (i ticketArray) med pop.
  // Så har vi et array med et antal items, der passer til antallet af ekstra personer udover køberen.
  // Vi laver lige en kopi i stedet for at modificere det originale array
  let copyTicketArray = ticketArray;

  function addPersonalInfo(formData) {
    //Hér tilføjer vi items (vores states) til dataObj
    dataObj.regular = ticket.regular;
    dataObj.vip = ticket.vip;
    dataObj.amount = ticketAmount;
    dataObj.campingspot = chosenSpot;
    dataObj.two_pers_tent = twoPers;
    dataObj.three_pers_tent = threePers;
    dataObj.greenCamping = greenCamping;
    // console.log("dette er dataObjekt", dataObj);

    //Her sørger vi for (ved hver const) at fange/get (PERSONAL INFORMATION) inputfeltets data. Efterfølgende putter vi det ind i vores dataObj (objekt)
    const firstname = formData.get("firstname");
    dataObj.firstname = firstname;

    const lastname = formData.get("lastname");
    dataObj.lastname = lastname;

    const day = formData.get("day");
    dataObj.day = day;

    const month = formData.get("month");
    dataObj.month = month;

    const year = formData.get("year");
    dataObj.year = year;

    const adress = formData.get("adress");
    dataObj.adress = adress;

    const zipcode = formData.get("zipcode");
    dataObj.zipcode = zipcode;

    const city = formData.get("city");
    dataObj.city = city;

    const email = formData.get("email");
    dataObj.email = email;

    const telephone = formData.get("telephone");
    dataObj.telephone = telephone;

    console.log("dette er objektet", dataObj);

    postOrder(dataObj);

    setVisible((o) => o + 1);
  }

  async function postOrder(data) {
    let headersList = {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZGZ3YXVmeXR3ZHVyb3BuZHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NDY3NzMsImV4cCI6MjAxMjQyMjc3M30.cX_qLqrbHMXj2dbzqfm88QbNPlMAXYOy8OQkNapHWG8",
      "Content-Type": "application/json",
      Prefer: "return=representation",
    };
    let bodyContent = JSON.stringify(data);

    let response = await fetch("https://pfdfwaufytwduropndyt.supabase.co/rest/v1/personal_informations", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let answer = await response.json();
    return answer;
  }

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
              text="NEXT"
              onClick={() => {
                // Jeg tilføjer chosenSpot og ticketAmount til vores putDataObj da dette sendes i PUT-requesten
                putDataObj.area = chosenSpot;
                putDataObj.amount = ticketAmount;
                // console.log("dette er PUTobjektet", putDataObj);
                sendPutRequest();

                setVisible((o) => o + 1);
              }}
            />
          </form>
        </section>
      )}
      {visible === 3 && (
        <section>
          <HeaderTwo page="Checkout"></HeaderTwo>
          <h3>CHOOSE A TENT OPTION</h3>
          <form action="">
            <TentRadioBtnOne name="tentoption" id="CrewTents" text="CREW TENTS" beregnTelte={beregnTelte} setBringYourOwn={setBringYourOwn}></TentRadioBtnOne>
            <TentRadioBtnTwo name="tentoption" id="BringYourOwn" text="BRING YOUR OWN" setTwoPers={setTwoPers} setThreePers={setThreePers} setBringYourOwn={setBringYourOwn}></TentRadioBtnTwo>
            <p>Do your group want to get a quiet spot closer to the green forrest? Add the Green Camping option</p>
            <input
              type="checkbox"
              checked={greenCamping}
              onChange={() => {
                setGreenCamping((old) => !old);
              }}
            />
            <YourPurchase ticket={ticket} campingspot={chosenSpot.toUpperCase()} twoPers={twoPers} threePers={threePers} greenCamping={greenCamping} bringYourOwn={bringYourOwn} />
            <PrimaryButton
              text="NEXT"
              onClick={() => {
                //For at vide hvor mange ekstra personer, der er udover køberen selv, skal vi fjerne én billet fra det samlede antal billetter (i ticketArray) med pop. Efter pop, har vi altså et array med et antal items, der passer til antallet af ekstra personer udover køberen.
                // Hér arbejder vi med kopien
                copyTicketArray.pop();

                setVisible((o) => o + 1);
              }}
            />
          </form>
        </section>
      )}
      {visible === 4 && (
        <section>
          <HeaderTwo page="Checkout"></HeaderTwo>
          <h3>PERSONAL INFORMATION</h3>
          <form action={addPersonalInfo}>
            <div>
              <div tabIndex={0} className="collapse bg-[var(--primary-color)] collapse-arrow border border-[var(--accent-color)] rounded-none">
                <input type="checkbox" />
                <div className="collapse-title text-[var(--secondary-color)] text-xl md:text-4xl">YOUR INFORMATION</div>
                <div className="collapse-content">
                  <Labelinput id="firstname" inputname="firstname" type="text" label="FIRSTNAME" placeholder="EX. PETER"></Labelinput>
                  <Labelinput id="lastname" inputname="lastname" type="text" label="LASTNAME" placeholder="EX. THOMSON"></Labelinput>
                  <Dob></Dob>
                  <Labelinput id="adress" inputname="adress" type="text" label="ADRESS" placeholder="EX. STENSTYKKEVEJ, 62"></Labelinput>
                  <Labelinput id="zipcode" inputname="zipcode" type="text" label="ZIPCODE" placeholder="EX. 2650"></Labelinput>
                  <Labelinput id="city" inputname="city" type="text" label="CITY" placeholder="EX. HVIDOVRE"></Labelinput>
                  <Labelinput id="email" inputname="email" type="email" label="EMAIL" placeholder="EX. THOMSON@HOTMAIL.COM"></Labelinput>
                  <Labelinput id="telephone" inputname="telephone" type="text" label="TELEPHONE NR." placeholder="TELEPHONE NR.FIIIIIIX!!!"></Labelinput>
                </div>
              </div>
            </div>
            {/*Hér mapper vi igennem copyTicketArray og sørger for at returnere en EkstraTicket-komponent for hver item der er i vores copyTicketArray*/}
            {copyTicketArray.map((item) => {
              const uniqueId = Math.random();
              return <EkstraTicket id={uniqueId} key={uniqueId}></EkstraTicket>;
            })}

            <YourPurchase ticket={ticket} campingspot={chosenSpot.toUpperCase()} twoPers={twoPers} threePers={threePers} greenCamping={greenCamping} bringYourOwn={bringYourOwn} />
            <PrimaryButton text="NEXT" />
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
