import './AboutScreen.css'
import Hamburger from '../components/Hamburger'
import Bag from '../components/Bag';


const About = () => {

    return (
    <div className="about">
        
        <div className="header"><Hamburger/><Bag/></div>
        
        
        <section className="about-wrapper">
        <h1 className="about-title">Vårt Kaffe</h1>
        <article className="about-boldtext-container">
            <p className="about-boldtext">Pumpkin spice mug, barista cup, sit macchiato,
            kopi-luwak, doppio, grounds dripper, crema, 
            strong whipped, variety extra iced id lungo half and 
            half mazagran. Pumpkin spice.</p>
        </article>
        
        <article className="about-text-container">
       <p className="about-text"> Que dark fair trade, spoon decaffeinated, 
        barista wings whipped, as rich aftertaste, 
        con panna milk black, arabica white rich beans single shot extra affogato. 
        So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, 
        single origin, and robusta strong to go so dripper. 
        Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak </p>

        <p className="about-text">
        fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
         
        Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and,
         so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, 
         rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. 
         In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. 
         Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, 
         percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>

         </article>
         <section className="about-girl">
          <img src="../girl.svg" alt="cortado"></img>
          <h2>Eva Cortade</h2>
          <p>VD & Grundare</p>
         </section>
         </section>
         <div className="footer"></div>
    </div>
    );
}
export default About;