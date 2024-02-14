import '../styles/acceuil.css'
import { acceuilList } from '../datas/acceuilList'
import { avantagesList } from '../datas/avantagesList'
import { useState } from 'react'
import Avantages from './lists'
import 'bootstrap/dist/css/bootstrap.css'

function Acceuil() {
     const [currentphotoIndex, setCurrentPhotoIndex] = useState(0);
     const handleNext = () => { 
          //setCurrentPhotoIndex(currentphotoIndex+1);
          setCurrentPhotoIndex( currentphotoIndex === acceuilList.length - 1 ? 0 : currentphotoIndex + 1 )
     };
     const handlePrevious = () => {
          //setCurrentPhotoIndex(currentphotoIndex-1)
          setCurrentPhotoIndex( currentphotoIndex === 0 ? acceuilList.length - 1 : currentphotoIndex - 1 )
     };

	return (
          <div className='kc-acceuil bg-white flex flex-col'> 
               <div className='bg-white flex flex-col row'>
                    <div className='flex-grow flex flex-col justify-center col-5'>
                         <h1 className='text-6xl text-left textblack'>
                              <span className='textlight '> Envoyez des soins,</span><br/>
                              pas de l'argent
                         </h1>
                         <p className='kc-acceuil-p text-left textgrey textp'> Votre compte KimboCare vous permet d'acheter des forfaits de soins de qualité 
                         (crédits de santé) pour vos proches au pays. Ces crédits de santé sont versés directement aux prestataires de 
                         soins de KimboCare une fois la visite médicale de votre patient terminée. <strong>Pas besoin de transfert d'argent.</strong></p>
                         <div class="kc-acceuil-a">
                              <a href="https://app.kimbocare.com" class="borderround link colorlink text-center flex justify-center items-center font-semibold text-white" target="_blank" rel="noreferrer">
                              Envoyer des crédits de santé</a>
                         </div>
                    </div>
                    <div className='xl:h-[40.625rem] xl:w-2/3 flex-grow xl:order-1 col-7'>
                         <img src={acceuilList[currentphotoIndex].name} alt={acceuilList[currentphotoIndex].alt} />
                    </div>
		     </div>
               <div className='kc-acceuil-direction flex-center row'>
                    <button onClick={handlePrevious} className='col-1 borderround kc-acceuil-button flex-center'><p className='textgrey'>{'<'}</p></button> 
                    <button onClick={handleNext} className='col-1 borderround kc-acceuil-button flex-center'><p className='textgrey'>{'>'}</p></button>           
               </div>
               <div className='kc-acceuil-pres row'>
                    {avantagesList.map((item) => (
                         <Avantages url={item.name} titre={item.titre} description={item.description} />
                    ))}        
               </div>
               {/* <div className='flex-center row'>
                    <div className='col-4 kc-avantages-hr'> </div>
                    <div className='col-4 kc-avantages-hr'> </div>
                    <div className='col-4 kc-avantages-hr'> </div>
               </div> */}
          </div>
	)
}

export default Acceuil