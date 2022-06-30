import './Footer.css';
import React from 'react'

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='row1'>
                {/* column1 */}
                <div className='col'>
                    <h4>STONE ADDA INC</h4>
                    <ul className='list-unstyled'>
                        <li>324-345-5647</li>
                        <li>Delhi, India</li>
                        <li>12 street Rajiv Chowk</li>
                    </ul>
                </div>
                {/* column2 */}
                <div className='col'>
                    <h4>STUFF</h4>
                    <ul className='list-unstyled'>
                        <li>Products</li>
                        <li>Products</li>
                        <li>Products</li>
                    </ul>
                </div>
                {/* column3 */}
                <div className='col'>
                    <h4>Timing</h4>
                    <ul className='list-unstyled'>
                        <li>monday</li>
                        <li>Friday</li>
                        <li>9:00-16:00</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='row2'>
                <p className='col-sm'>
                    &copy;{new Date().getFullYear()} STONE ADDA INC| All rights reserved | Terms of service | Privacy
                </p>
            </div>
        </div>
    )
}

export default Footer