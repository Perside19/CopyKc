import '../styles/etape.css'
import { ExperiencesList } from '../datas/experienceList'
import {Experiences} from './lists'
import 'bootstrap/dist/css/bootstrap.css'

function Experience() {

	return (
          <div className='kc-experience-box'> 
               <h1 className='kc-experience-h text-6xl text-left textblack text-center'>
               Une expérience exceptionnelle,  <span className='textlight '>sans tracas</span>
               </h1>
               <div className='kc-experience-parent scrollbar row flex items-center lg:flex-row py-10'>
                    {ExperiencesList.map((item) => (
                         <Experiences url={item.name} titre={item.titre} description={item.description} />
                    ))}        
               </div>        
          </div>
	)
}

export default Experience