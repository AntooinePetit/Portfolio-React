import Footer from "../components/footer";
import Header from "../components/header";

function Error404(){
   return(
      <>
         <Header />
         <main>
            <h1>Erreur 404 ! Cette page n'existe pas.</h1>
         </main>
         <Footer />
      </>
   )
}

export default Error404