function KisiListe() {
  const [veri, veriGuncelle] = useState([]);

  useEffect(() => {
    const LSVeriCek = async () => localStorage.getItem("rehberJSON");

    async function rehberCek() {
      const rehberJSON = await LSVeriCek();
      const rehberVeri = JSON.parse(rehberJSON);

      veriGuncelle(rehberVeri);
    }

    rehberCek();
  }, []);

  return (
    <div className="row">
      {veri.map((eleman) => (
        <Kisi key={eleman.id} ad={eleman.ad} tel={eleman.tel} />
      ))}
    </div>
  );
}

export default KisiListe;
