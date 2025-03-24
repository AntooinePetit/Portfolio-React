import { motion, AnimatePresence } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header>
      <div>
        <Link to="/">
          <img src="/images/Logo-portfolio-transparent.png" alt="Logo Antoine Petit" />
        </Link>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="mobile-nav"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/#about">À propos</a></li>
                <li><a href="/#skills">Compétences</a></li>
                <li><a href="/#projects">Projets</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="/files/CV Antoine Petit.pdf" download="CV Antoine Petit.pdf">Télécharger CV</a></li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
        <nav className="desktop-nav">
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/#about">À propos</a></li>
            <li><a href="/#skills">Compétences</a></li>
            <li><a href="/#projects">Projets</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="/files/CV Antoine Petit.pdf" download="CV Antoine Petit.pdf" className="desktop-nav">
          <button>Télécharger CV</button>
        </a>
        <button id="burger-menu" onClick={toggleMenu}>
          {isOpen ? <X size={32} /> : <AlignJustify />}
        </button>
      </div>
    </header>
  );
}

export default Header;
