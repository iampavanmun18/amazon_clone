import React from 'react'
import './newnavbar.css'
import nav from '../../assets/nav.jpg'
const NewNavBar = () => {
  return (
    <div className="new_nav">
        <div className="nav_data">
            <div className="left_data">
            <p>All</p>
            <p>Mobile</p>
            <p>BestSeller</p>
            <p>Fashion</p>
            <p>Customer Services</p>
            <p>Electronics</p>
            <p>Prime</p>
            <p>Today's Deal</p>
            <p>Amazon Pay</p>
            </div>
            <div className="right_data">
            <img src={nav} alt="NewNav" />
            </div>
        </div>
    </div>
  )
}

export default NewNavBar