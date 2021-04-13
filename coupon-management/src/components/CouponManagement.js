import React, { useState } from 'react'

import './CouponManagement.css';

import MainHeader from './MainHeader';
import CouponList from './CouponList';

export default function CouponManagement() {
    const [coupons, setCoupons] = useState([
        { brandName: "Starbucks", couponTitle: "Free cupcake", coupons: "123/278", issued: 98, used: 57, status: true },
        { brandName: "McDonald’s", couponTitle: "30% meal discount", coupons: "123/278", issued: 274, used: 57, status: true },
        { brandName: "Children land", couponTitle: "1+1 Tickets", coupons: "123/278", issued: 0, used: 57, status: false },
        { brandName: "McDonald’s", couponTitle: "Free ice-cream", coupons: "123/278", issued: 98, used: 57, status: false }
    ]);

    return (
        <div className="mainDiv">
            <MainHeader
                headerText="Coupon Management"
                headerStyle={{ "fontSize":"33.32px", "float":"left", "letterSpacing":"-0.01px" }}
                handleClick={setCoupons}
                coupons={coupons}
            />
            {/*Coupons table headers*/}
            <div style={{
                "marginTop": "131px",
                "paddingTop": "19.5px",
                "paddingBottom": "18.5px",
                "backgroundColor": "#F6F7F8",
                "height": "24px",

                "paddingLeft": "121px",
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
            <CouponList coupons={coupons} />
        </div>
    )
}