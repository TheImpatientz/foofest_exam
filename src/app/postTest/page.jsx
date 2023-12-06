"use client";

import Layout from "@/components/Layout";

//Hvordan får man fat i indholdet i sine input felter i react?
//Se her: https://react.dev/reference/react-dom/components/form#handle-form-submission-on-the-client

let orderObj = {};

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

function send(formData) {
  const newOrder = {
    firstname: formData.get("name"),
    lastname: formData.get("lastname"),
    streetadress: "hello",
    zipcode: "newTraitArray",
    city: "3",
    email: null,
    phone: 23,
    landcode: "45",
    day: 26,
    month: 4,
    year: 2000,
  };
  //console.log(newOrder);
  postOrder(orderObj);
}
function addCamp(formData) {
  const input = formData.get("camp");
  console.log(input);
  orderObj.camp = input;
  console.log(orderObj);
}

function addTicket(formData) {
  const input = formData.get("ticket");
  console.log(input);
  orderObj.lastname = input;
  console.log(orderObj);
}

export default function postTest() {
  return (
    <Layout>
      <form action={addTicket}>
        <label htmlFor="ticket">
          ticket
          <input type="text" id="ticket" name="ticket" />
        </label>
        <button type="submit">næste</button>
      </form>

      <form action={addCamp}>
        <label htmlFor="camp">
          ticket
          <input type="text" id="camp" name="camp" />
        </label>
        <button type="submit">næste</button>
      </form>

      <form action={send} className="flex flex-col gap-1">
        <label htmlFor="name">
          Name
          <input type="text" id="name" name="name" />
        </label>
        <label htmlFor="lastname">
          Lastname
          <input type="text" id="lastname" name="lastname" />
        </label>
        <button type="submit">Send</button>
      </form>
    </Layout>
  );
}
