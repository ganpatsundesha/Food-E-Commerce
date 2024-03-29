import React, { useState } from 'react'
import './menulist.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqeCategory = [
    ...new Set(Menu.map((item) => {
        return item.category
    })
    ),
    "All",
]


const MenuList = () => {
    const [menuData, steMenuData] = useState(Menu);
    const [uniqueData, steUniqueData] = useState(uniqeCategory);

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
            <Navbar filterItem={filterItem} uniqueData={uniqueData} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default MenuList;