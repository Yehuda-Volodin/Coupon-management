import React from 'react'
import PropTypes from 'prop-types';

import headerLogo from './headerLogo.png';

export default function MainHeader(props) {
    MainHeader.propTypes = {
        headerText: PropTypes.string.isRequired,
        headerStyle: PropTypes.object,
    }

    return (
        <div style={{ "marginBottom": "71px", "marginLeft": "48px", "marginRight": "55px" }}>
            <div
                style={props.headerStyle}
            >
                <img
                    src={headerLogo}
                    alt="Header Logo"
                    width="43"
                    height="60"
                />
                {props.headerText}
            </div>

            <div style={{ "float": "right", "verticalAlign":"bottom"}}>
                <button
                    style={{
                        "marginTop": "13px",
                        "width": "211px",
                        "height": "46px",
                        "backgroundColor": "#44D793",
                        "color": "#FFFFFF",
                        "borderRadius": "12px",
                        "borderWidth": "0px",
                        "fontWeight": "bold",
                        "lineHeight": "22px",
                        "cursor": "pointer"
                    }}
                >
                    + Add new coupon
            </button>
            </div >
        </div >
    )
}