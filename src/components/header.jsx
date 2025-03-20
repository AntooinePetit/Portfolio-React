import { Link } from "react-router-dom"
import "../styles/header.css"

function Header(){
   return(
      <header>
         <Link to="/">
            <img src="/images/Logo-portfolio-transparent.png" alt="Logo Antoine Petit" />
         </Link>
         <nav>
            <ul>
               <li><a href="/">Accueil</a></li>
               <li><a href="/#about">À propos</a></li>
               <li><a href="/#skills">Compétences</a></li>
               <li><a href="/#projects">Projets</a></li>
               <li><a href="/#contact">Contact</a></li>
            </ul>
         </nav>
         <a href="/files/CV Antoine Petit.pdf" download="CV Antoine Petit.pdf">
            <button>Télécharger CV</button>
         </a>
      </header>
   )
}

export default Header