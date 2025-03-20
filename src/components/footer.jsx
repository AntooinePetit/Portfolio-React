import { Mail } from "lucide-react"
import "../styles/footer.css"
import { Link } from "react-router-dom"
import Socials from "./socials"


function Footer(){
   return(
      <footer>
         <div className="footer">
            <article>
            <Link to="/">
               <img src="/images/Logo-portfolio-transparent.png" alt="Logo Antoine Petit" />
            </Link>
            <Socials />
            </article>
            <article>
               <p>Développeur web passionné, créateur d'expériences digitales</p>
               <p>© 2025 Antoine Petit. Tous droits réservés.</p>
            </article>
         </div>
      </footer>
   )
}

export default Footer