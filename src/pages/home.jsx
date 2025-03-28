import { ArrowRight, CircleAlert, CodeXml, Database, FileCode, Layers, Mail, MapPin, Palette, Phone, Send, Server } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import "../styles/home.css";
import LinksProjects from "../components/links-projects";
import Skill from "../components/skills";
import emailjs from '@emailjs/browser';
import moment from "moment";
import WaveAnimation from "../components/underline";

function Home() {

   const [data, setData] = useState([])
   async function getDatas(){
      const req = await fetch("/data/skills.json")
      const res = await req.json()
      setData(res.skills) 
   }
   useEffect(() => {
      getDatas()
   }, [])

   const [time, setTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'))
   function getTime(){
      const now = moment().format('MMMM Do YYYY, h:mm:ss a');
      setTime(now)
   }

   
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      getTime()

      let validForm = true

      const nameValue = e.target.elements.name.value
      const emailValue = e.target.elements.email.value
      const regexName = /^[a-zA-ZÀ-ÿ- ]{2,}$/
      const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/

      if(!regexName.test(nameValue)){
         document.querySelector("#contact > div > article:nth-child(2) > form > span:nth-child(1) > p").classList.add('active-form');
         validForm = false
      } else {
         document.querySelector("#contact > div > article:nth-child(2) > form > span:nth-child(1) > p").classList.remove('active-form');
      }

      if(!regexEmail.test(emailValue)){
         document.querySelector("#contact > div > article:nth-child(2) > form > span:nth-child(2) > p").classList.add('active-form');
         validForm = false
      } else{
         document.querySelector("#contact > div > article:nth-child(2) > form > span:nth-child(2) > p").classList.remove('active-form');
      }

      if(validForm === false){
         return
      }
   
      emailjs
         .sendForm('service_ve3apla', 'template_95ho045', form.current, {
         publicKey: 'k1I49lbifKfeXA2br',
         })
         .then(
         () => {
            console.log('SUCCESS!');
         },
         (error) => {
            console.log('FAILED...', error.text);
         },
         );
      
      e.target.reset()
   };

   return (
      <>
         <Header />
         <main>
            <section id="welcome">
               <article className="container-1440">
                  <h1>
                     Bonjour, je suis <span className="animated-span">
                        Antoine Petit
                           <WaveAnimation />
                        </span>
                  </h1>

                  <p>Développeur web passionné, je crée des expériences web modernes et intuitives</p>
                  <div id="welcome-buttons">
                     <a href="#projects" id="see-projects">Voir mes projets <ArrowRight /></a>
                     <a href="#contact">Me contacter</a>
                  </div>
                  <Socials />
               </article>
            </section>
            <section id="about">
               <h2>À propos de moi</h2>
               <article className="container-1440">
                  <img src="/images/pdp.png" alt="Photo d'Antoine Petit" />
                  <div>
                     <h3>Développeur web junior</h3>
                     <div>
                        <p>Passionné par le développement web depuis mes études, j’ai décidé de me lancer dans cette aventure pour créer des sites web et applications qui répondent aux besoins des utilisateurs.</p>
                        <p>Après avoir obtenu ma formation en développement web, je me suis spécialisé dans les technologies front-end modernes tout en gardant une bonne compréhension du back-end.</p>
                        <p>Je suis constamment en train d’apprendre de nouvelles technologies et méthodologies pour améliorer mes compétences et rester à jour dans ce domaine en constante évolution.</p>
                     </div>
                     <a href="/files/CV Antoine Petit.pdf" download="CV Antoine Petit.pdf">
                        <button>Télécharger CV</button>
                     </a>
                  </div>
               </article>
            </section>
            <section id="skills">
               <h2>Mes compétences</h2>
               <div className="container-1440">
                  {data?.map((skills) => {
                     return <Skill icone={skills.icone} titre={skills.titre} description={skills.description} competences={skills.competences}/>
                  })}
               </div>
            </section>
            <section id="projects">
               <div className="container-1440">
                  <h2>Mes projets</h2>
                  <p>Découvrez une sélection de mes réalisations récentes qui démontrent mes compétences et mon approche</p>
                  <div className="project-list">
                     <article>
                        <img src="/images/Brigitte.png" alt="Brigitte Galerie d'Art" />
                        <div>
                           <h3>Brigitte Galerie d'Art</h3>
                           <p>Site vitrine d’une galerie d’art avec page de contact, d’oeuvres et de blog. Entièrement réalisé avec WordPress.</p>
                           <ul>
                              <li>WordPress</li>
                              <li>FakerPress</li>
                              <li>Elementor</li>
                           </ul>
                           <LinksProjects links={{site: "https://antooinepetit.github.io/Brigitte/", code: "https://github.com/AntooinePetit/Brigitte"}} />
                        </div>
                     </article>
                     <article>
                        <img src="/images/Gamedev.png" alt="Game Development Studio" />
                        <div>
                           <h3>Game Development Studio</h3>
                           <p>Projet d’intégration d’un site d’un studio de développement fictif, entièrement développé en HTML CSS avec du Responsive tablette et mobile.</p>
                           <ul>
                              <li>HTML5</li>
                              <li>CSS3</li>
                              <li>Responsive Design</li>
                           </ul>
                           <LinksProjects links={{site: "https://antooinepetit.github.io/GameDev/", code: "https://github.com/AntooinePetit/GameDev"}} />
                        </div>
                     </article>
                     <article>
                        <img src="/images/Pagerie.png" alt="Foncière Pagerie-Malmaison" />
                        <div>
                           <h3>Foncière Pagerie-Malmaison</h3>
                           <p>Site vitrine d’une agence immobilière de location de bureaux. Premier site réalisé en HTML et CSS.</p>
                           <ul>
                              <li>HTML5</li>
                              <li>CSS3</li>
                              <li>Responsive Design</li>
                           </ul>
                           <LinksProjects links={{site: "https://antooinepetit.github.io/Pagerie-Malmaison/", code: "https://github.com/AntooinePetit/Pagerie-Malmaison"}} />
                        </div>
                     </article>
                  </div>
                  <a href="https://github.com/AntooinePetit" id="see-all">Tous mes projets</a>
               </div>
            </section>
            <section id="contact">
               <h2>Me contacter</h2>
               <p>Vous avez un projet en tête ou une question ? N’hésitez pas à ma contacter</p>
               <div className="container-1440">
                  <article>
                     <div>
                        <span className="svg">
                           <Mail />
                        </span>
                        <span>
                           <p>email</p>
                           <a href="mailto:antooine.petit@gmail.com">antooine.petit@gmail.com</a>
                        </span>
                     </div>
                     <div>
                        <span className="svg">
                           <Phone />
                        </span>
                        <span>
                           <p>Téléphone</p>
                           <a href="tel:+33770819539">+33 7 70 81 95 39</a>
                        </span>
                     </div>
                     <div>
                        <span className="svg">
                           <MapPin />
                        </span>
                        <span>
                           <p>Localisation</p>
                           <a href="https://www.google.com/maps/place/Saint+Julien+le+montagnier/@43.6924242,5.8872653,15z/data=!3m1!4b1!4m6!3m5!1s0x12cbd9a08559891b:0x4f05559c8922ffb!8m2!3d43.6924102!4d5.9057193!16s%2Fg%2F11q99qsmqn?hl=fr&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D" target="blank">St-Julien, France</a>
                        </span>
                     </div>
                  </article>
                  <article>
                     <form ref={form} onSubmit={sendEmail}>
                        <span>
                           <label htmlFor="name">Nom <span>*</span></label>
                           <input type="text" name="name" id="name" placeholder="Votre nom" required/>
                           <p className="error-form"><CircleAlert size={16} />Erreur ! Le nom doit faire au moins 2 caractères</p>
                        </span>

                        <span>
                           <label htmlFor="email">Email <span>*</span></label>
                           <input type="email" name="email" id="email" placeholder="Votre email" required/>
                           <p className="error-form"><CircleAlert size={16} />Erreur ! Entrez une adresse mail valide</p>
                        </span>

                        <span>
                           <label htmlFor="title">Sujet <span>*</span></label>
                           <input type="text" name="title" id="title" placeholder="Le sujet de votre message" required/>
                           <p className="error-form"><CircleAlert size={16} />Erreur</p>
                        </span>

                        <span>
                           <label htmlFor="message">Message <span>*</span></label>
                           <textarea name="message" id="message" placeholder="Votre message...." required></textarea>
                           <p className="error-form"><CircleAlert size={16} />Erreur</p>
                        </span>
                        
                        <button type="submit">Envoyer <Send /></button>
                        <input type="hidden" name="time" value={time} />
                     </form>
                  </article>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}

export default Home;
