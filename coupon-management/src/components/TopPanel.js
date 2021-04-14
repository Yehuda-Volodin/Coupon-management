import React from 'react';

import kidpickLogo from './kidpickLogo.png';
import smallRightArrow from './smallRightArrow.png';

export default function TopPanel(props) {
    return (
        <div style={{
            "height": "73px",
            "backgroundColor": "white",
            "boxShadow": "0px 2px 4px rgba(216,216,216,0.37)",
            "paddingLeft": "39px",
            "paddingRight": "27px",
        }}>
            <img style={{ "marginTop":"24.5px", "float":"left" }}
                src={kidpickLogo}
                alt="Kidpick Logo"
                width="93"
                height="24"                
            />
            <div style={{
                "marginTop": "25.5px",
                "float": "left",
                "fontSize": "16px",
                "fontWeight": "600",
                "letterSpacing": "0.27px",
                "lineHeight": "22px",
                "marginLeft": "10px",
            }}>
                | Hello Yuval
            </div>
            <img style={{ "float":"right", "marginTop":"29.5px", "marginLeft":"10px" }}
                src={smallRightArrow}
                alt="Small Right Arrow"
                width="16"
                height="16"                
            />
            <div style={{
                "marginTop": "27px",
                "float": "right",
                "color": "#FF3863",
                "fontSize": "14px",
                "fontWeight": "bold",
                "letterSpacing": "0.23px",
                "lineHeight": "19px"
            }}>
                Logout
            </div>            
        </div>
    )
}