import React from 'react'
import './navbar.css'

const Navbar = ({ filterItem, uniqueData }) => {
    return (
        <>
            <div className='navbar'>
                <div className='d-flex'>
                    {
                        uniqueData.map((uniqeItem, index) => {
                            return (
                                <a href="#" key={index} onClick={() => filterItem(uniqeItem)}>{uniqeItem}</a>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar