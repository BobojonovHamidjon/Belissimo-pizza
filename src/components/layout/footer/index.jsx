import React from 'react'
import FooterLogo from '../../../assets/icons/FooterLogo'
import FacebookLogo from '../../../assets/icons/FacebookLogo'
import InstagramLogo from '../../../assets/icons/InstagramLogo'
import TelegramLogo from '../../../assets/icons/TelegramLogo'

function Footer(){
    return(
        <footer className="footer">
         <div className="footer-main">
            <div className="footer-logo">
                <h2 className="footer-list">
               <FooterLogo
               />
                </h2>
                <br />
              
                <h4>Raqamga qo'ng'iroq qiling <a href="tel:1174">1174</a></h4>
            </div>
            <ul className="footer-listBlock">
                <li className='footer-listBlock_text'><a href="#">Biz haqimizda</a></li>
                <li className='footer-listBlock_text'><a href="#">Ommaviy oferta</a></li>
                <li className='footer-listBlock_text'><a href="#">Maxfiylik siyosati</a></li>
                <li className='footer-listBlock_text'><a href="#">Halol sertifikati</a></li>
                <li className='footer-listBlock_text'><a href="#">Restoranlar</a></li>
            </ul>
            <ul className='footer-listBlock'>
            <li><a href="https://jobs.bellissimo.uz/">Bizning ish o'rinlarimiz</a></li>
            </ul>
            <div className="footer-socials">
                <h3 className="footer-listTitle">
                Bizni kuzatib boring
                </h3>
                <ul className="footer-socialsList">
                    <li> <FacebookLogo/> </li>
                    <li> <InstagramLogo/> </li>
                    <li> <TelegramLogo/> </li>
                </ul>
            </div>
            <ul className='footer-payMethodBlock'>
                <li className="footer-payMethods">
                   <img src="/images/Paymeuz_logo.png" alt="payMethod" />
                </li>
                <li className="footer-payMethods">
                   <img src="/images/uzcard_logo.png" alt="payMethod" />
                </li>
                <li className="footer-payMethods">
                  <img src="/images/Click_logo.png" alt="payMethod" />
                </li>
            </ul>
         </div>
         <div className="footer-lower">
            <p>© 2016-2024  Bellissimo Pizza.</p>
         </div>
                
        
        </footer>
    )
}

export default Footer