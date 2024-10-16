import Navbar from "./Navbar";
const Home = () => {
  return (
    <div className="container">
      <header>
        <h1>EvellaBella's studio</h1>
        <Navbar />
      </header>
      <div className="about">
        <h2>Your dream is here</h2>
        <img src="nail1" alt="nail1" />
        <p>
          Witam w studiu paznokci EvelliBelli. Studio jest niewielkie, ale
          wyposazone w najnowocześniejszy sprzęt od firmy NeoNail.
        </p>
        <img src="" alt="photo" />
        <p>
          Paznokcie to moja pasja od pierwszej klasy liceum. Zaczynałam uczyć
          się od cioci, która ma swój salon, a potem wykonywałam paznokcie za
          darmo, aby zdobyć jeszcze więcej doświadczenia praktycznego.
        </p>
      </div>
    </div>
  );
};
export default Home;
