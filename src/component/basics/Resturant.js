import React ,{ useState } from 'react'
import "./style.css"
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar';
const uniqueList = [...new Set(Menu.map((curElem) =>{ // [] used for making array
    return curElem.category;                     // ... used for spread operator
})),"All"];                                            // new set used for getting only unique elem
const Resturant = () => {
    const [menuData,setMenuData] = useState(Menu);
    const [menuList, setMenuList]= useState(uniqueList);
    const filterItem = (category) =>{
        if(category==="All"){
            setMenuData(Menu)
            return
        }
        const updateList = Menu.filter((curElem)=>{
            return category===curElem.category
        })
        setMenuData(updateList);
    }
  return (
    <>
    <img src={"images/rest.jpeg"} alt="plz wait" className='logo'/>
     <Navbar filterItem={filterItem} menuList={menuList} />
     < MenuCard menuData={menuData}/>
    </>
  );
};

export default Resturant
