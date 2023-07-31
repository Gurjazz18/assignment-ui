import React from 'react'

const TopHeroPage = () => {

  return (
    <>
         <div className='Top-hero-class'>

<div>
   
    <div className='heding'>
           <div className='headings'>
             <h1>Start Your IELTS Preparation</h1>
             <h1 id='heading-line-2'>And Get Desire Brands</h1>
           </div>
        <div className='paragraps'>
             <p>• Get access to IELTS Centralised Library</p>
             <p id='heading-line-2'>• British Council Certified Teacher</p>
        </div>
    </div>
    
    <div className='Box-left'>
        <div style={{display:"flex",justifyContent:"space-between",width:"60%",margin:"auto"}}>
            <p>✅Start</p>
            <p>➋ Fill Detail</p>
            <p>➌ Confirm</p>
        </div>
       
         <div className='formCss'>
           <h1 style={{marginTop:"-13px",color:"#051C45",paddingTop:"15px"}}>Free IELTS Classes</h1>
          <input placeholder='Enter Your Full Name'/>
        
          <div style={{display:"flex"}}>
              <p style={{width:"30%",}}>+91</p>
              <input placeholder='Phone Number' style={{width:"100%"}}/>
          </div>
           <button>Continue</button>
            <p style={{fontSize:"10px",width:"90%",margin:"auto",marginTop:"-15px"}}>By continuing, you agree to our Term of services & Privacy policy</p>
         </div>
    </div>
</div>

<div className='box-right-add'>
    <img src='/adds.png' width="90%" alt='addsimage'/>
</div>

        </div>

        {/*.................. mode -part ..........................*/}

        <div className='ModulePart'>

         <div className='Mode-box'>
            <img src="/mode1.png" alt="mode" width="40px"/>
             <h3>Free IELTS Modules</h3>
             <p>20,000+ Listed Properties  across 5 countries.</p>
         </div>

         <div className='Mode-box'>
            <img src="/mode2.png" alt="mode" width="40px"/>
             <h3>Offline Classes</h3>
             <p>20,000+ Listed Properties  across 5 countries.</p>
         </div>

         <div className='Mode-box'>
            <img src="/mode3.png" alt="mode" width="40px"/>
             <h3>Live / Online Classes</h3>
             <p>20,000+ Listed Properties  across 5 countries.</p>
         </div>

        </div>
    </>
   
  )
}

export default TopHeroPage
