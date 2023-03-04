import React from 'react';
import ContactForm from './ContactForm';
import FooterLowerSection from './FooterLowerSection';

const Footer = () => {
    return (
        <div>
            <ContactForm/>
            <div>
            <h5 className='text-center'>Email us at<a href="mailto:partner@bobble.ai">&nbsp;vrtechnocraft@gmail.com</a></h5>
            </div>
            <FooterLowerSection/>
            
        </div>
    );
}

export default Footer;
