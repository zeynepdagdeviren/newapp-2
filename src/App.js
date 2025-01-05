import { useEffect, useState } from "react";
import Kisi from "./kisi";

function App() {
  
  const [veri, veriGuncelle] = useState([])
  
  useEffect(()=> {

    const LSVeriCek = async () => localStorage.getItem("rehberJSON")

    async function rehberCek() {
      const rehberJSON = await LSVeriCek()
      const rehberVeri = JSON.parse(rehberJSON)

      veriGuncelle(rehberVeri)
    }

    rehberCek()

  }, [])
  
  return (

    
    <>
      <section className="container mt-5">
        <h1>Rehber</h1>

        <div className="row">
          
          {veri.map( eleman => <Kisi key={eleman.id} ad={eleman.ad} tel={eleman.tel} />)}
          
        </div>
      </section>
    </>
  );
}

export default App;
