import { useEffect, useState } from "react";
import Kisi from "./kisi";
import KisiListe from "./kisiListe";
import KisiEkleForm from "./KisiEkleForm";

function App() {
  return (
    <>
      <section className="container mt-5">
        <h1>Rehber</h1>
        <KisiEkleFormForm />
        <KisiListe />
      </section>
    </>
  );
}

export default App;
