import React from 'react'
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";

export default function ContactForm() {
  return (
   <section className={styles.container}>

        <div className={styles.contact_form}>
               <div className={styles.top_btn}
               >
                 <Button text={'VIA SUPPORT CHAT'} flag={1}><MdMessage /></Button>
                
                <Button text={'VIA CALL'} flag={1}><IoMdCall /></Button>

               </div>

               <Button text={'VIA EMAIL FORM'} flag={0}><CiMail /></Button>
        </div>

        <div className={styles.contact_image}>
                <img src="../../../public/contact.svg" alt="" />
        </div>

   </section>
  )
}
