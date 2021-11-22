import React from "react";
import {Typography} from "antd";

const About = () => {
    return(
        <>
        <div className="con" style={{height:'80vh'}}><Typography.Title style={{color:'var(--secondry)',textShadow:'var(--shadow)',textTransform:'uppercase',letterSpacing:'1px'}}>About Us</Typography.Title>
<p style={{color:'fontVariant(--text)',lineHeight:'2rem',fontSize:'1rem',padding:'0.5rem'}}>Coinbase: the simple, safe way to buy, manage and sell digital currency. Transfer, store and convert digital currency securely on Coinbase using our e-money ...
    <br></br>Welcome to the world's #1 cryptocurrency exchange by trading volume, trusted by millions of users worldwide. Get started today and buy Bitcoin, Ethereum, ....</p>
    <p style={{color:'fontVariant(--text)',lineHeight:'2rem',fontSize:'1rem',padding:'0.5rem'}}>By far the most popular type of cryptocurrency application, exchanges allow you to buy and sell cryptocurrencies using USD, BTC, ETH and many other currencies. You can connect your bank account through ACH, or use a credit or debit card to buy crypto on most exchanges.</p>
    <h5 style={{color:'var(--secondry)',textShadow:'var(--shadow)',fontSize:'1rem',fontWeight:'bold',letterSpacing:'1px'}}>Developed by GouravBajpai(CoolDevelopers)</h5>  </div>
              
        
        
        
        </>
    )
}
export default About;