import React from 'react'

function Box(props) {
    return (
        <div className='boxMainContainer'>
            <div className='boxContainer'>
                <p className='boxText'>
                    {props.name}
                </p>
            </div>
            <p className='boxUnderText'>
                {props.designation}
            </p>
        </div>
    )
}

export default Box