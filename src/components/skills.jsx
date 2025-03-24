import * as icons from 'lucide-react'

function Skill({icone, titre, description, competences}){
   const listCompetences = competences.map((competence) => {
      return(
         <li>{competence}</li>

      )
   })
   const IconComponent = icons[icone]
   return(
      <article>
         {IconComponent ? (<IconComponent />)  : null}
         <h3>{titre}</h3>
         <p>{description}</p>
         <ul>
            {listCompetences}
         </ul>
      </article>
   )
}

export default Skill