import React from 'react'

function PopupWindow(props) {
    return (props.trigger) ? (
        <div className="popupwindow">
            {props.children}
        </div>
    ) : '';
}

export default PopupWindow
