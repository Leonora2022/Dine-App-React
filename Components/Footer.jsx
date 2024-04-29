
import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
        <h2 className='footer-title'>dine</h2>
        <address className='footer-address'>
        Marthwaite, Sedbergh <br />
        Cumbria <br />
        +00 44 123 4567
        </address>
        <div className="footer-time">
            <h3>Open Times</h3>
            <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
            <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
        </div>
    </footer>
  )
}