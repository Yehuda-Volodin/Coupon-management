import React from 'react';
import PropTypes from 'prop-types';

import rightArrow from './rightArrow.svg';

export default function CouponList(props) {
    CouponList.propTypes = {
        coupons: PropTypes.object.isRequired,
    }

    const couponsTable = props.coupons.map((element, index) =>
        <div style={{
            "paddingTop": "51px",
            "paddingBottom": "53px",
            "height": "24px",
            "position": "relative",
            "paddingLeft": "121.5px",
            "fontSize": "18px",
            "fontWeight": "600",
            "lineHeight": "24px",
            "letterSpacing": "0.3px"
        }}>
            <span style={{ "display":"inline-block", "minWidth":"121px" }}> {element.brandName} </span>
            <span style={{ "marginLeft":"69px", "display":"inline-block", "minWidth":"179px" }}> {element.couponTitle} </span>
            <span style={{ "marginLeft":"45px" }}>
                {element.coupons.split('/', 2)[0] + "/"}
                <span style={{ "fontWeight": "normal" }}>{element.coupons.split('/', 2)[1]}</span>
            </span>
            {element.issued > 0 ?
                <span style={{
                    "marginLeft": "100px",
                    "display": "inline-block",
                    "minWidth": "42px",
                    "fontWeight": "bold",
                    "color": "#6744D7"
                }}>
                    {element.issued}
                </span>
                :
                <span style={{
                    "marginLeft": "100px",
                    "display": "inline-block",
                    "minWidth": "42px",
                    "fontWeight": "bold",
                    "color": "#FF3158"
                }}>
                    {element.issued}
                </span>
            }
            <span style={{ "marginLeft":"90px", "fontWeight":"bold", "color":"#FF3158" }}> {element.used} </span>
            {element.status ?
                <span style={{
                    "marginLeft": "105px",
                    "display": "inline-block",
                    "minWidth": "71px",
                    "fontWeight": "bold",
                    "color": "#44D7B6"
                }}>
                    Active
                </span>
                :
                <span style={{
                    "marginLeft": "105px",
                    "display": "inline-block",
                    "minWidth": "71px",
                    "fontWeight": "bold",
                    "color": "#FF5575"
                }}>
                    Inactive
                </span>
            }
            <img style={{ "marginLeft": "75px" }}
                src={rightArrow}
                alt="Right Arrow"
                width="14"
                height="24"
            />
            <div style={{
                "borderBottom": "1px solid #E3E3E3",
                "width": "1108px",
                "position": "absolute",
                "bottom": "0",
                "left": "47.5px"
            }} />
        </div>
    )

    return (couponsTable)
}