import React, { useState } from 'react'
import './menulist.css'
import Menu from './menuApi'
import MenuCard from './MenuCard';
import Navbar from './Navbar'


const uniqeCategory = [
    ...new Set(Menu.map((item) => {
        return item.category
    })
    ),
    "All",
]


const MenuList = () => {
    const [menuData, steMenuData] = useState(Menu);
    const [uniqueDta, steUniqueDta] = useState(uniqeCategory);

    const filterItem = (category) => {
        if (category == "All") {
            return steMenuData(Menu)
        }
        const updatedList = Menu.filter((filterItem) => {
            return filterItem.category == category
        })
        steMenuData(updatedList)
    }
    return (
        <>
            <Navbar filterItem={filterItem} uniqueDta={uniqueDta} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default MenuList;