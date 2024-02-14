import '../styles/etape.css'
import { EtapesList } from '../datas/etapesList'
import {Etapes} from './lists'
import 'bootstrap/dist/css/bootstrap.css'

function Etape() {

	return (
          <div className='kc-etape-box'> 
               <h1 className='text-6xl text-left textblack text-center'>
                    KimboCare en  <span className='textlight '>4 étapes</span>
               </h1>
               <div className='kc-etape scrollbar row flex items-center'>
                    {EtapesList.map((item) => (
                         <Etapes url={item.name} etape={item.etape} titre={item.titre} description={item.description} />
                    ))}        
               </div>        
          </div>
	)
}

export default Etape