import React from 'react'
import './navbar.css'
import Menu from './menuApi'

const Navbar = ({ filterItem, uniqueDta }) => {
    return (
        <>
            <div className='navbar'>
                <div className='d-flex'>
                    {
                        uniqueDta.map((uniqeItem, index) => {
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