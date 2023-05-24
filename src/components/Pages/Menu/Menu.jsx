import "./Menu.css"
import menu1 from '../../../assets/menu1.png';
import menu2 from '../../../assets/menu2.png';
import menu3 from '../../../assets/menu3.png';
import menu4 from '../../../assets/menu4.png';
import menu5 from '../../../assets/menu5.png';
import menu6 from '../../../assets/menu6.png';
import React from "react";

const Menu = () => {
  return (

    <div className="special">
      <div className="special-tittle">
       
       <h3>MENYU</h3>
       <div className="special-bar">
       <div className="specials">
        <p>ROLLAR</p>
        </div>

        
       <div className="special-cards">
        <div className='cart'>
        <img src={menu1} alt="" />
        <h2>California Salmon</h2>
        <p>DÜYÜ, NORİ, XİYAR </p>
        <span>32 AZN</span>
        </div>
       <div className='cart'>
       <img src={menu2} alt="" />
       <h2>Oasis Roll</h2>
       <p>DÜYÜ, NORİ, XİYAR </p>
       <span>32 AZN</span>
       </div>
       <div className='cart'>
       <img src={menu3} alt="" />
       <h2>Philadelphia Classic</h2>
       <p>DÜYÜ, NORİ, XİYAR </p>
       <span>32 AZN</span>
       </div>
       <div className='cart'>
       <img src={menu4} alt="" />
       <h2>Unagi Classic</h2>
       <p>DÜYÜ, NORİ, XİYAR </p>
       <span>32 AZN</span>
       </div>
       <div className='cart'>
       <img src={menu5} alt="" />
       <h2>Tuna Classic</h2>
       <p>DÜYÜ, NORİ, XİYAR </p>
       <span>32 AZN</span>
       </div>
       <div className='cart'>
       <img src={menu6} alt="" />
       <h2>Mango Fusion</h2>
       <p>DÜYÜ, NORİ, XİYAR </p>
       <span>32 AZN</span>
       </div>
       </div>
       
       </div>
       
      </div>
     
    </div>
  )
}

export default Menu
