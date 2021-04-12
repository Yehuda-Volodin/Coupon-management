import React, { useState, useEffect } from 'react'

import './CouponManagement.css';

import MainHeader from './MainHeader';

export default function CouponManagement() {
    const [coupons, setCoupons] = useState([
        { brandName: "Starbucks", couponTitle: "Free cupcake", coupons: "123/278", issued: 98, used: 57, status: true },
        { brandName: "McDonald’s", couponTitle: "30% meal discount", coupons: "123/278", issued: 274, used: 57, status: true },
        { brandName: "Children land", couponTitle: "1+1 Tickets", coupons: "123/278", issued: 0, used: 57, status: false },
        { brandName: "McDonald’s", couponTitle: "Free ice-cream", coupons: "123/278", issued: 98, used: 57, status: false }
    ]);

    const couponsTable = coupons.map((element, index) =>
        <div style={{
            "paddingTop": "51px",
            "paddingBottom": "53px",
            "height": "24px",
            "borderBottom": "1px solid #E3E3E3",

            "paddingLeft": "121px",
            "fontSize": "18px",
            "fontWeight": "600",
            "lineHeight": "24px",
            "letterSpacing": "0.3px"
        }}>
            {element.brandName}
            <span style={{ "marginLeft": "78px" }}> {element.couponTitle} </span>
            <span style={{ "marginLeft": "105.5px" }}> {element.coupons} </span>
            {element.issued > 0 ?
                <span style={{ "marginLeft": "88.5px", "fontWeight": "bold", "color": "#6744D7" }}> {element.issued} </span>
                :
                <span style={{ "marginLeft": "88.5px", "fontWeight": "bold", "color": "#FF3158" }}> {element.issued} </span>
            }
            <span style={{ "marginLeft": "72.5px", "fontWeight": "bold", "color": "#FF3158" }}> {element.used} </span>
            {element.status ?
                <span style={{ "marginLeft": "84.5px", "fontWeight": "bold", "color": "#44D7B6" }}> Active </span>
                :
                <span style={{ "marginLeft": "84.5px", "fontWeight": "bold", "color": "#FF5575" }}> Inactive </span>
            }
        </div>
    )

    return (
        <div className="mainDiv">
            <MainHeader
                headerText="Coupon Management"
                headerStyle={{ "fontSize": "33.32px", "float": "left", "letterSpacing": "-0.01px" }}
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

            {couponsTable}
        </div>
    )
}