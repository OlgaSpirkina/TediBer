import Navbar from './Navbar/Navbar'
import Shopping from './Shopping/Shopping'
import Banner from './Banner'
import Dropdown from './Dropdown'
import '../styles/App.css';
import '../styles/Navbar.css'

const navItems = [
  'https://raw.githubusercontent.com/OlgaSpirkina/TediBer/main/public/logo-text.png',
  'nos produits',
  'le concept',
  'avis',
  'https://raw.githubusercontent.com/OlgaSpirkina/TediBer/main/public/logo-tediber.png',
  'pub tv',
  'mon compte',
  'mag',
  'contactez-nous',
  'https://raw.githubusercontent.com/OlgaSpirkina/TediBer/main/public/shoppingcart.png'
]
const arrayOfText = [
  'suivi de commande',
  'informations sur la livraison',
  'informations sur le paement',
  'totoal commande',
  'besoin d\'aide ?'
];
const bannerText = arrayOfText.map(elem => elem.toUpperCase());
function App() {
  return (
    <>
      <div>
        <Navbar navItems={navItems}/>
      </div>
      <Banner prop={bannerText[0]}/>
      <div className="all-info-shoppingcart">
        <Dropdown />
        <Shopping />
      </div>
      <Banner prop={bannerText[1]}/>
      <Banner prop={bannerText[2]}/>
      <Banner prop={bannerText[3]}/>
      <Banner prop={bannerText[4]}/>

    </>
  )
}

export default App;
