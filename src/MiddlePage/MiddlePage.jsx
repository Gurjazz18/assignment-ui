import React from 'react'

const MiddlePage = () => {
  return (
    <div className='MiddleCss'>

        <div className='middle-imagep-part'>
            <img src="Group.png" alt='service'  />
        </div>



        <div >
            <h1 style={{textAlign:"center",color:"white",paddingTop:"20px"}}>Our Services</h1>


            <div className='middle-service-part'>
            <div className='service-acco'>
                 <img src='accommodation 1.png' alt='Accommodation'/>
                <h3>Accommodation</h3>
                <p>• 20,000+ Listed Properties  across 5 countries.</p>
                <p>• 100+cities</p>
            </div>
            <div className='service-acco'>
                 <img src='boarding-pass 2.png' alt='Accommodation'/>
                <h3>Visa Application</h3>
                <p>• 20,000+ Listed Properties  across 5 countries.</p>
                <p>• 100+cities</p>
            </div>
            <div className='service-acco'>
                 <img src='community 1.png' alt='Accommodation'/>
                <h3>Centralized Community</h3>
                <p>• 20,000+ Listed Properties  across 5 countries.</p>
                <p>• 100+cities</p>
            </div>
            <div className='service-acco'>
                 <img src='real-estate.png' alt='Accommodation'/>
                <h3>Education Loan</h3>
                <p>• 20,000+ Listed Properties  across 5 countries.</p>
                <p>• 100+cities</p>
            </div>

            </div>

        </div>
      
    </div>
  )
}

export default MiddlePage
