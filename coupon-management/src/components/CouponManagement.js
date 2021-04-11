import React, { useState, useEffect } from 'react'

import './CouponManagement.css';

import MainHeader from './MainHeader';

export default function CouponManagement() {
    return (
        <div className="mainDiv">
            <MainHeader 
                headerText="Coupon Management" 
                headerStyle={{ "fontSize": "46px", "color": "#616A82", "float": "left" }} 
            />
        </div>
    )   
}