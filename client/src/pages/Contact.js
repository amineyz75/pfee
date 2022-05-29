import React from 'react'
 import emailjs from 'emailjs-com';
//import './contact.css'
import Navigation from './Navigation';
function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_eta0q9g', 'template_ownp52p', e.target, 'dL6d7A0J2FlVxWeus')
        .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
        });
        e.target.reset()
        }

  return (
    <div >
           {/* <Navigation />
      <div className='container'>
        <form onSubmit={sendEmail}>
        <div className='row pt-5 mx-auto'>
        <div className='col-8 form-group mx-auto'>
            <input type="text" className="form control" placeholder="name" name="name"/>
        </div>
        <div className='col-8 form-group pt-2 mx-auto'>
            <input type="text" className="form control" placeholder="Email Adress" name="email"/>
        </div>
        <div className='col-8 form-group pt-2 mx-auto'>
            <input type="text" className="form control" placeholder="Subject" name="subject"/>
        </div>
        <div className='col-8 form-group pt-2 mx-auto'>
            <textarea type="text" className="form control" id="" cols="30" rows="8" placeholder="Your message" name="message"/>
        </div>
        <div className='col-8 pt-3 mx-auto'>
            <input type="submit" className="btn btn-info" value="Send message" />
        </div>

        </div>



        </form>
      </div> */}
      <section className='contact'>
            <div className='contente'>
                    <h2>Contact us</h2>
                     <p>UNION DE FACTORING (UNIFACTOR) est une société anonyme de droit
                          tunisien, créée en avril 2000 avec un capital de six millions de 
                          dinars, porté en décembre 2006 à dix millions de dinars. Le siège de la société se situe à ENNOUR Building - Centre 
                         Urbain Nord à Tunis. La société dispose de 2 agences : Sfax et Sousse</p>   
            </div>
                <div className='containteer'>
                    <div className='contactInfo'>
                        <div className='box'>
                           <div className='icone'> </div>
                               <div className='text'>
                                <h3>adresse</h3>
                                    <p>4617 tunis , <br></br>Sousse 4755<br></br></p>
                              
                               </div> 
                        </div>
                        <div className='box'>
                           <div className='icone'> </div>
                               <div className='text'>
                                <h3>Phone</h3>
                                    <p>986137988</p>
                              
                               </div> 
                        </div>
                        <div className='box'>
                           <div className='icone'> </div>
                               <div className='text'>
                                <h3>Email</h3>
                                    <p>aminechan@gmail.com</p>
                              
                               </div> 
                        </div>
                    </div>

                </div>

      </section>
  </div>
  
       
           
      
  )
}

export default Contact