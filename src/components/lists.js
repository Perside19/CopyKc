export function Avantages({ url, titre, description }) {
	return (
          <div className='col-3 around'>
               <div className='w-60 mt-3 row'> 
                    <div className='col-4'> </div>
                    <div className='kc-avantages-img flex-center items-center backgreen borderround col-4'> 
                         <img className='' src={url} /> 
                    </div>
                    <div className='col-4'> </div>
               </div>
               <div className='text-black text-center flex flex-col items-center justify-center'>
                    <h3 className='w-60 mt-3'> {titre} </h3> 
                    <p className='kc-avantages-p w-60 mt-3'> {description} </p>
               </div>  
          </div>
	)
}

export function Etapes({ url, etape, titre, description }) {
	return (
          <div className='kc-etape-content flex-shrink-0 flex row'>
               <div class="col-7">
                    <img className='' src={url} /> 
               </div>
               <div class="kc-etape-text col-5">
                    <h2 className=''> {etape}</h2>
                    <h1 className='kc-etape-h textblack'> {titre} </h1>
                    <p className='kc-etape-p textgrey '> {description} </p>
               </div>
          </div>
	)
}

export function Experiences({ url, titre, description }) {
	return (
          <div className='kc-experience flex'>
               <div className='kc-experience-img'>
                    <img className='' src={url} /> 
               </div>
               <div className=''>
                    <h3 className=''> {titre}</h3>
                    <p className='kc-etape-p textgrey '> {description} </p>
               </div>
          </div>
	)
}

export function Partenaires({ url, titre }) {
	return (
          <div className='col-3 flex px-5 justify-center items-center'>
               <div className=''>
                    <img className='' src={url} /> 
               </div>
               <div className=''>
                    <p className=' textgrey '> {titre} </p>
               </div>
          </div>
	)
}

export default Avantages