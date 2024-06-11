import React, { useState } from 'react'
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";

export default function ContactForm() {


const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [msg, setMsg] = useState("");

const onSubmit =(e)=>{
e.preventDefault();
console.log(name + " " + email + " " + msg);

setName("");
setMsg("");
setEmail("");



}



  return (
   <section className={styles.container}>

        <div className={styles.contact_form}>
               <div className={styles.top_btn}
               >
                 <Button  text={'VIA SUPPORT CHAT'} flag={1}><MdMessage /></Button>
                
                <Button text={'VIA CALL'} flag={1} ><IoMdCall /></Button>

               </div>

               <Button text={'VIA EMAIL FORM'} flag={0}><CiMail /></Button>

               <form action="" className={styles.form_label_input} onSubmit={onSubmit}>
               <div className={styles.form_control}>
                    <label htmlFor="name"  type="text">Name</label>
                    <input value={name} type="text" name="name" onChange={(e)=>setName(e.target.value)} />
               </div>
               <div className={styles.form_control}>
                    <label htmlFor="email"  type="text">Email</label>
                    <input type="text"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
               </div>
               <div className={styles.form_control}>
                    <label htmlFor="text"  type="text">Text</label>
                    <textarea type="text"  name="text" rows={8} value={msg} onChange={(e)=>setMsg(e.target.value)}/>
               </div>

                <div className={styles.submit_btn}>
                <Button text={'Submit'} flag={1}></Button>
                </div>
               
               </form>
        </div>

        <div className={styles.contact_image_div} >
                <img src="../../../public/contact.svg" alt="contact image" className={styles.contact_image} />
        </div>

   </section>
  )
}
