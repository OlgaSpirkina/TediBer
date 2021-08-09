import Navbar from './Navbar/Navbar'
import Shopping from './Shopping/Shopping'
import Banner from './Banner'
import DropdownSection from './Dropdown/DropdownSection'
import DeliveryItemList from './Delivery/DeliveryItemList'
import HelpSection from './HelpSection'
import TotalPrice from './TotalPrice'
import VisaCb from './VisaCb'
import '../styles/App.css';
import './Navbar/Navbar.css'

const dropdownItemsImg = [
  '../img/box.svg',
  '../img/packing.svg',
  '../img/delivery.svg',
  '../img/door.svg'
]
const track = 'Suivi commande';
const refund = 'Informations sur les retours';
const visaName = "Visa";
const visaImg = "../img/logo-cb.jpg";
/* les textes et imgs de la navbar */
const navItems = [
  '/img/logo-text.png',
  'nos produits',
  'le concept',
  'avis',
  '../img/logo-tediber.png',
  'pub tv',
  'mon compte',
  'mag',
  'contactez-nous',
  '../img/shoppingcart.png'
]
/* les phrases des sections-bannière */
const arrayOfText = [
  'suivi de commande',
  'informations sur la livraison',
  'informations sur le paement',
  'totoal commande',
  'besoin d\'aide ?'
];
/* composant Purchase */
const deliveryInfo = [
  'N° de commande : ',
  'Date de commande : ',
  'Date d’expédition : '
]
const deliverySpan = [
  '405560003',
  '1 mai 2019',
  '3 mai 2019'
]
/* les phrases des bannières affichées en majuscule sont contenues dans la variable bannerText et sont passée
aux composants Banner comme prop individuel */
const bannerText = arrayOfText.map(elem => elem.toUpperCase());
function App() {
  return (
    <>
      <div>
        <Navbar navItems={navItems}/>
      </div>
      <Banner prop={bannerText[0]}/>
      <div className="all-info-shoppingcart">
        <DropdownSection track={track} refund={refund} dropdownItemsImg={dropdownItemsImg} deliveryInfo={deliveryInfo} deliverySpan={deliverySpan}/>
        <Shopping />
      </div>
      <Banner prop={bannerText[1]}/>
      <DeliveryItemList />
      <Banner prop={bannerText[2]}/>
      <div className="banner-container article-container total-section visa-cb">
        <VisaCb visaName={visaName} visaImg={visaImg}/>
      </div>
      <Banner prop={bannerText[3]}/>
      <div className="banner-container article-container total-section">
        <div className="price-container-centered">
          <TotalPrice />
        </div>
      </div>
      <Banner prop={bannerText[4]}/>
      <div className="banner-container">
        <HelpSection />
      </div>
    </>
  )
}
export default App;
