import React from 'react';
import './Contact.scss';
import Container from '../../common/Container';

export default function Contact() {
  return (
      <div className='contact'>
        <Container>
            <div className="contact-section">
                {/* CONTACT INFO */}
                <div className="contact-info">
                  <div>
                    <h2>ADDRESS</h2>
                    <p>
                      123 Anywhere St., Any City, <br />
                      Ontario, Canada, N12 345
                    </p>
                  </div>
                  <div>
                    <h2>EMAIL ADDRESS</h2>
                    <p>
                      hello@lazypizza.com
                    </p>
                  </div>
                  <div>
                    <h2>PHONE NUMBER</h2>
                    <p>
                     +1 226 4567890 <br></br>
                     +1 226 4567890
                    </p>
                  </div>
                </div>

              {/* FORM */}
              <div className="contact-form">
                <form className='orangeBox'>
                  <img src="/delivery.png" alt="" />
                  <h2>DROP A MESSAGE</h2>
                  <p>We'd love to hear from you!</p>
                  <input type="email" placeholder="Your Email" />
                  <textarea placeholder="Your Message"></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
        </Container>
      </div>
  )
    
  
} 
