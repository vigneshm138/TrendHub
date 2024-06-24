import React from 'react'
import './Item.css'

const Item = ({img,proName,proPrice,oldPrice}) => {
    return (
        <div className='item'>
            <div className='item-img'>
                <img src={img} />
            </div>
            <div className='item-details'>
                <p>{proName}</p>
                <div>
                    <span>{proPrice}</span>
                    <span>{oldPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default Item