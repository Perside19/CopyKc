import '../styles/partenariat.css'
import { partenairesList } from '../datas/partenairesList'
import {Partenaires} from './lists'
import 'bootstrap/dist/css/bootstrap.css'

function Partenaire() {

	return (
          <div className='kc-partenaire-box'> 
               <h1 className='text-6xl text-left textblack text-center'>
                    Ils  <span className='textlight '>font confiance</span> à KimboCare
               </h1>
               <div className='flex-center flex flex-wrap'>
                    {partenairesList.map((item) => (
                         <Partenaires url={item.name} titre={item.titre} />
                    ))}        
               </div>        
          </div>
	)
}

export default Partenaire