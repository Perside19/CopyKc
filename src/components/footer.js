import '../styles/menu.css'
import 'bootstrap/dist/css/bootstrap.css'

function Footer() {
	return (
          <div className='kc-footer'>
               <div className='kc-footer-you row flex-center flex flex-wrap'>
                    <div className=' justify-center col-6 gap-y-6 '>
                         <p className='text-center textp'>Créer votre compte maintenant</p>
                         <a href='#' className='borderround colorlink link text-center justify-center items-center font-semibold text-white '>S'inscrire</a>
                    </div>
                    <div className=' justify-center gap-y-6 col-6'>
                         <p className='text-center textp'>Besoin de plus d'informations</p>
                         <a href='#' className='borderround colorlink2 link text-center justify-center items-center font-semibold'>Réservez un entretien</a>
                    </div>
               </div>
               <div className='kc-footer-me row flex-center flex flex-wrap'> 
                    <div className='col-2'>
                         <h4>Contact</h4> 
                         <ul>
                              <li>EPFL</li>
                              <li>Innovation Park</li>
                              <li>La Forge (Bâtiment C)</li>
                              <li>1015 Lausanne Switzerland</li>
                         </ul>
                    </div>
                    <div className='col-2'>
                         <h4>Informations</h4>
                         <ul>
                              <li>Devenir un partenaire medical</li>
                              <li>Conditions d'utilisation</li>
                              <li>Politique de confidentialité</li>
                              <li>Foire aux questions</li>
                         </ul>
                    </div>
                    <div className='col-2'>
                         <h4>Entreprise</h4>
                         <ul>
                              <li>A propos</li>
                              <li>Blog</li>
                              <li>Témoignages</li>
                         </ul>
                    </div>
                    <div className='col-3'>
                         <h4>Top articles</h4>
                         <ul>
                              <li>Envoyez des soins, pas d'argent séries </li>
                              <li>Envoyez de l'argent aux proches au Kenya</li>
                              <li>Payez les soins de santé de ces proches en Afrique</li>
                              <li>La santé de vos proches commence par la prévention</li>
                              <li>Pourquoi les Africains ne vont pas à l'hôpital</li>
                         </ul>
                    </div>
                    <div className='col-3'>
                         <h4>Suivez nous</h4>
                         <div className='kc-footer-reseau'> </div>
                         <div className='kc-footer-app'> </div>
                    </div>
               </div>
          </div>
	)
}

export default Footer