import { ArrowRight } from "lucide-react";
import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import "../styles/home.css";
import { motion, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Home() {
   const pathRef = useRef(null);

   useEffect(() => {
      const animateLine = () => {
         animate(
            pathRef.current,
            { pathLength: [0, 1], opacity: [0, 1, 1, 0] }, // Animation progressive
            { duration: 7, times: [0, 0.3, 0.85, 1] } // Durée et synchronisation
         ).finished.then(() => {
            setTimeout(animateLine, 2000); // Reprise après 2s
         });
      };

      animateLine();
   }, []);

   return (
      <>
         <Header />
         <main>
            <section id="welcome">
               <article className="container-1440">
                  <h1>
                     Bonjour, je suis <span className="animated-span">
                        Antoine Petit
                           {/* SVG animé sous le texte */}
                           <svg
                              width="400"
                              height="20"
                              viewBox="0 0 400 20"
                              className="wavy-line"
                           >
                              <motion.path
                                 ref={pathRef}
                                 d="M 0 10 Q 16.67 0, 33.33 10 T 66.67 10 T 100 10 T 133.33 10 T 166.67 10 T 200 10 T 233.33 10 T 266.67 10 T 300 10 T 333.33 10 T 366.67 10 T 400 10"
                                 stroke="#1E96FC"
                                 strokeWidth="4"
                                 fill="transparent"
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
            <section id="about"></section>
            <section id="skills"></section>
            <section id="projects"></section>
            <section id="contact"></section>
         </main>
         <Footer />
      </>
   );
}

export default Home;
