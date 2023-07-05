import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { YMaps, Map } from '@pbe/react-yandex-maps';

const Contacts = () => {


  return (
    <div className='contacts_vnyt'>
        <div className='contacts_t'>
          Контакты
        </div>

        <YMaps>
          <div className='map' >
          <Map  width='1526px' height='572px' defaultState={{ center: [56.330016, 43.859534], zoom: 20}} />
          </div>
        </YMaps>

        <div className='contacts_sotryd'>
          Контакты сотрудников
        </div>
        <div className='otdel_sale'>
        Отдел продаж
        </div>

        <div className='sotryd_sale'>
          <a>красильникова виктория александровна</a>
          <a>сапунова екатерина евгеньевна</a>
          <a>гуляева надежда андреевна</a>
          <a> макаренкова елена владимировна</a>
        </div>

        <div className='sotryd_poz'>
          <a>Рук. отдела продаж</a>
          <a>Менеджер по продажам</a>
          <a>Менеджер по продажам</a>
          <a>Менеджер по продажам</a>
        </div>

        <div className='sotryd_number'>
          <a>+7 (930) 626 00 89</a>
          <a>+7 (904) 794 98 82</a>
          <a>+7 (987) 559 04 48</a>
          <a>+7 (831) 418-58-57</a>
        </div>


        <div className='otdels2'>
        <a>Отдел снабжения</a>
        <a>Транспортный отдел</a>
        <a>КРО</a>
        <a>Отдел развития</a>
        </div>


        <div className='sotryd_sale2'>
          <a>исаев
андрей игоревич</a>
          <a>леднев
дмитрий игоревич</a>
          <a>Кувшинова 
Светлана Валерьевна </a>
          <a> царев 
алексей сергеевич</a>
        </div>

        <div className='sotryd_poz2'>
          <a>Рук. отдела снабжения</a>
          <a>Рук. складского комплекса</a>
          <a>Рук. отдела развития</a>
          <a>Рук. отдела развития</a>
        </div>

        <div className='sotryd_number2'>
          <a>+7 (910) 104 92 61</a>
          <a>+7 (952) 779 21 20</a>
          <a>+7 (920) 295 25 10</a>
          <a>+7 (999) 076 36 89</a>
        </div>


        


<div class = "bottom">
    <div class = "bottom_t">
        <span>Каталог</span>
        <span>О компании</span>
        <span>Партнёрам</span>
        <span>Новости</span>
        <span>Контакты</span>
    </div>
    <div class="bottom_img">
        <img src={"/home/mobile.svg"}/>   
        <span>Отдел продаж:
7 (831) 418-58-57
7 (831) 418-58-56</span>  
        <img src={"/home/clock.svg"}/>
        <span>Время работы:
8:30 - 16:30
сб,вс - выходной
</span>
        <img src={"/home/marker.svg"}/>
        <span>Адрес: г. Барнаул
Просторная 41
</span>
    </div>   
  </div>
    </div>

  )
}
export default Contacts