import '../styles/App.css';
import Menu from './menu';
import Acceuil from './acceuil';
import Temoignage from './temoignages';
import Etape from './Etapes';
import Experience from './Experience';
import Partenaire from './partenariats';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Acceuil />
      <Temoignage />
      <Etape />
      <Experience />
      <Partenaire />
      <Footer />
    </div>
  );
}

export default App;
