import React, { useState, useEffect } from 'react'

import './CouponManagement.css';

import MainHeader from './MainHeader';

export default function CouponManagement() {
    return (
        <div className="mainDiv">
            <MainHeader
                headerText="Coupon Management"
                headerStyle={{ "fontSize":"33.32px", "float":"left", "letterSpacing": "-0.01px" }}
            />
            {/*Coupons table headers*/}
            <div style={{
                "marginTop": "131px",
                "paddingLeft": "121px",
                "paddingTop": "19.5px",
                "paddingBottom": "18.5px",
                "backgroundColor": "#F6F7F8",
                "height": "24px",
                "fontSize": "18px",
                "fontWeight": "600",
                "lineHeight": "24px",
                "letterSpacing": "0.3px"
            }}>
                Brand name
                <span style={{ "marginLeft": "78px" }}> Coupon title </span>
                <span style={{ "marginLeft": "105.5px" }}> Coupons </span>
                <span style={{ "marginLeft": "88.5px" }}> Issued </span>
                <span style={{ "marginLeft": "72.5px" }}> Used </span>
                <span style={{ "marginLeft": "84.5px" }}> Status </span>
            </div>
        </div>
    )
}