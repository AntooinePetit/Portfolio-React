import { AlignJustify, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/header.css"

function Header(){
   const [isOpen, setIsOpen] = useState(false)
   function burgerMenu(){
      const mobileNav = document.querySelector('nav')
      if(isOpen === false){
         mobileNav.classList.add('active')
         setIsOpen(true)
         return
      }
      mobileNav.classList.remove('active')
      setIsOpen(false)
   }
   useEffect(() => {
      if(isOpen === true){
         window.addEventListener('scroll', () => {
            const mobileNav = document.querySelector('nav')
            mobileNav.classList.remove('active')
            setIsOpen(false)
         })
      }   
   })

   return(
      <header>
         <div>
            <Link to="/">
               <img src="/images/Logo-portfolio-transparent.png" alt="Logo Antoine Petit" />
            </Link>
            <nav className="desktop-nav">
               {isOpen && (
                  <ul>
                     <li><a href="/">Accueil</a></li>
                     <li><a href="/#about">À propos</a></li>
                     <li><a href="/#skills">Compétences</a></li>
                     <li><a href="/#projects">Projets</a></li>
                     <li><a href="/#contact">Contact</a></li>
                     <li><a href="/files/CV Antoine Petit.pdf" download="CV Antoine Petit.pdf">Télécharger CV</a></li>
                  </ul>
               )}
               {!isOpen && (
                  <ul>
                     <li><a href="/">Accueil</a></li>
                     <li><a href="/#about">À propos</a></li>
                     <li><a href="/#skills">Compétences</a></li>
                     <li><a href="/#projects">Projets</a></li>
                     <li><a href="/#contact">Contact</a></li>
                  </ul>
               )}
            </nav>
            <a href="/files/CV Antoine Petit.pdf" download="CV Antoine Petit.pdf" className="desktop-nav">
               <button>Télécharger CV</button>
            </a>

            <button id="burger-menu" onClick={burgerMenu}>
               {isOpen ? <X size={32} /> : <AlignJustify/> }
            </button>
         </div>
      </header>
   )
}

export default Header