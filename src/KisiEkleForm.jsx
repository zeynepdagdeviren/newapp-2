import { useState } from "react"

function KisiEkleForm() {

    const [ad, adGuncelle] = useState("")
    const [tel, telGuncelle] = useState("")

    function kisiEkle() {
        const yeniKisi = {id: ad+tel, ad:ad, tel:tel}

        const rehberVeri = localStorage.getItem("rehberJSON")
        let rehberArray = JSON.parse(rehberVeri)

        rehberArray.push(yeniKisi)

        const yeniRehberJSON = JSON.stringify(rehberArray)
        localStorage.setItem("rehberJSON", yeniRehberJSON)
    }


return(

    <>
        <div>

        <input value={ad} onChange={(olay)=> {adGuncelle(olay.currentTarget.value)}} type="text" className="form-control" placeholder="Ad soyad" />
        <input value={tel} onChange={(olay)=> {telGuncelle(olay.currentTarget.value)}} type="text" className="form-control" placeholder="telefon" />
        <button onClick={kisiEkle} className="btn btn-success"> Ekle </button>


        </div>
    </>


)


}

export default KisiEkleForm