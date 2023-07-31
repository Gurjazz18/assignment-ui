import React from 'react'

const ContactForm = () => {
  return (
    <div style={{marginTop:"40px"}}>

        <div style={{textAlign:"center"}}>
            <h1>Get in Touch with Us</h1>
            <p>Elevate Your Institute Management and Student Success - Contact Us Now!</p>
        </div>



        <div className='formPart'>

                <div className='inpurt-part-left'>
                  <h1>Contact Us</h1>
                  <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>

                    <div className='input-part'>
                         <p><label>Name</label></p>
                         <input placeholder='Doe'/>

                         <p><label>Email</label></p>
                         <input placeholder='Email'/>

                         <p><label>Messange</label></p>
                         <input placeholder='Write your message'/>
                    </div>
                </div>

                 <div className='inputDetailsBack'>
                    <div className='inputDetails'>
                        <h1>Contact Information</h1>
                        <p>✆ +1012 3456 789</p>
                        <p>✉ demo@gmail.com</p>
                        <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                    </div>
                 </div>
        </div>
      
    </div>
  )
}

export default ContactForm
