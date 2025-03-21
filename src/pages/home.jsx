import { ArrowRight, CodeXml, Database, FileCode, Layers, Palette, Server } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import "../styles/home.css";

function Home() {
   const controls = useAnimation();

   useEffect(() => {
      const animateLine = async () => {
         // Animation : la ligne apparaît complètement
         await controls.start({
            pathLength: 1,
            opacity: 1,
            transition: {
               duration: 2, // Durée de l'apparition
               ease: "easeInOut",
            },
         });

         // Maintenir la ligne visible pendant un court instant
         await new Promise(resolve => setTimeout(resolve, 2000));

         // Animation : la ligne disparaît progressivement en opacité
         await controls.start({
            opacity: 0,
            transition: {
               duration: 1, // Durée de la disparition
               ease: "easeInOut",
            },
         });

         // Réinitialiser l'état pour recommencer l'animation
         controls.set({ pathLength: 0, opacity: 0 });

         // Relancer l'animation
         requestAnimationFrame(animateLine);
      };

      animateLine();
   }, [controls]);

   return (
      <>
         <Header />
         <main>
            <section id="welcome">
               <article className="container-1440">
                  <h1>
                     Bonjour, je suis <span className="animated-span">
                        Antoine Petit
                           <svg
                              width="400"
                              height="20"
                              viewBox="0 0 400 20"
                              className="wavy-line"
                           >
                              <motion.path
                                 d="M 0 10 Q 16.67 0, 33.33 10 T 66.67 10 T 100 10 T 133.33 10 T 166.67 10 T 200 10 T 233.33 10 T 266.67 10 T 300 10 T 333.33 10 T 366.67 10 T 400 10"
                                 stroke="#1E96FC"
                                 strokeWidth="4"
                                 fill="transparent"
                                 initial={{ pathLength: 0, opacity: 0 }}
                                 animate={controls}
                              />
                           </svg>
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
                  <article>
                     <Palette />
                     <h3>Front-end</h3>
                     <p>Création d’interfaces utilisateur réactives et moderne</p>
                     <ul>
                        <li>HTML5</li>
                        <li>CCS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Tailwind CSS</li>
                     </ul>
                  </article>
                  <article>
                     <Server />
                     <h3>Back-end</h3>
                     <p>Développement de logique serveur et d’API</p>
                     <ul>
                        <li>PHP</li>
                        <li>Node.JS</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                     </ul>
                  </article>
                  <article>
                     <FileCode />
                     <h3>WordPress</h3>
                     <p>Création et personnalisation de sites WordPress</p>
                     <ul>
                        <li>Thèmes</li>
                        <li>Plug-ins</li>
                        <li>Elementor</li>
                        <li>WooCommerce</li>
                     </ul>
                  </article>
                  <article>
                     <CodeXml />
                     <h3>Outils de développement</h3>
                     <p>Utilisation d’outils modernes pour un développement efficace</p>
                     <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                        <li>Figma</li>
                        <li>npm</li>
                     </ul>
                  </article>
                  <article>
                     <Database />
                     <h3>Base de données</h3>
                     <p>Conception et gestion de bases de données</p>
                     <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                     </ul>
                  </article>
                  <article>
                     <Layers />
                     <h3>Autres compétences</h3>
                     <p>Compétences supplémentaires</p>
                     <ul>
                        <li>Responsive Design</li>
                        <li>UI/UX</li>
                        <li>Performance web</li>
                        <li>Accessibilité</li>
                     </ul>
                  </article>
               </div>
            </section>
            <section id="projects"></section>
            <section id="contact"></section>
         </main>
         <Footer />
      </>
   );
}

export default Home;
