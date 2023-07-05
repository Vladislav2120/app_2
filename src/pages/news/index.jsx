import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { YMaps, Map } from '@pbe/react-yandex-maps';

const News = () => {


  return (
    <div className='dostavka_vnyt'>
    <div className='dost_tekst'>
      Новости
    </div>

    <div class="auto">
          <img src={"/home/car1.svg"}/>   
          <img src={"/home/car2.svg"}/>  
          <img className='ydalit' src={"/home/car3.svg"}/>  
          <img className='ydalit' src={"/home/car4.svg"}/>  
          <img className='ydalit' src={"/home/car5.svg"}/>  
    </div>

    <div className='news'>
        <div className='card'>
        <img src={"/news/news1.svg"}/> 
        <span>Новинки амортизаторы</span>
        </div>
        <div className='card'>
        <img src={"/news/news2.svg"}/>
        <span>Ожидаемое поступление на склад – вакуумный усилитель тормозов</span>
        </div>
        <div className='card'>
        <img src={"/news/news3.svg"}/>
        <span>Вновь на складе</span>
        </div>
      </div>

      <div className='news'>
        <div className='card'>
        <img src={"/news/news4.svg"}/> 
        <span>Новинки амортизаторы</span>
        </div>
        <div className='card'>
        <img src={"/news/news5.svg"}/>
        <span>Ожидаемое поступление на склад – вакуумный усилитель тормозов</span>
        </div>
        <div className='card'>
        <img src={"/news/news6.svg"}/>
        <span>Вновь на складе</span>
        </div>
      </div>

      <div className='news'>
        <div className='card'>
        <img src={"/news/news7.svg"}/> 
        <span>Новинки амортизаторы</span>
        </div>
        <div className='card'>
        <img src={"/news/news8.svg"}/>
        <span>Ожидаемое поступление на склад – вакуумный усилитель тормозов</span>
        </div>
        <div className='card'>
        <img src={"/news/news9.svg"}/>
        <span>Вновь на складе</span>
        </div>
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
export default News