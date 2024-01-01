import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <>
            <div className='d-flex'>
                {
                    menuData.map((item, index) => {

                        const { category, itemName, imageUrl, discription } = item

                        return (
                            <div className='card-box' key={index}>
                                <span>{index + 1}</span>
                                <div>{category}</div>
                                <div className='name'>{itemName}</div>
                                <img src={imageUrl} alt="" />
                                <div className='discription'>{discription}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MenuCard