import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const HomePage = () => {

  return (
    <div className='fon'>
        <div class="top_img">
          <img src={"/home/top_img.svg"}/>   
        </div>

      <div className='sale_qast'>
      Продажа запасных частей для авто
      </div>

      <div className='sale_tekst_1'>
        <div className='card'>
            <span>Двигатель</span>
            <img src={"/home/dvig.svg"}/>
        </div>
        <div className='card'>
            <span>Система питания</span>
            <img src={"/home/sistem_oxlad.svg"}/>
        </div>
        <div className='card'>
            <span>Система охлаждения</span>
            <img src={"/home/sistem_pit.svg"}/>
        </div>
        <div className='card'>
            <span>Сцепление</span>
            <img src={"/home/sqep.svg"}/>
        </div>
      </div>


    <div className='sale_tekst_1'>
        <div className='card'>
            <span>Коробка передач</span>
            <img src={"/home/peredaq.svg"}/>
        </div>
        <div className='card'>
            <span>Карданный вал</span>
            <img src={"/home/kardan.svg"}/>
        </div>
        <div className='card'>
            <span>Мост передний и задний</span>
            <img src={"/home/most.svg"}/>
        </div>
        <div className='card'>
            <span>Подвеска</span>
            <img src={"/home/podves.svg"}/>
        </div>
      </div>


      <div className='sale_tekst_1'>
        <div className='card'>
            <span>Колеса и ступицы</span>
            <img src={"/home/kolesa.svg"}/>
        </div>
        <div className='card'>
            <span>Тормоза</span>
            <img src={"/home/tormoza.svg"}/>
        </div>
        <div className='card'>
            <span>Рулевое управление</span>
            <img src={"/home/rylev.svg"}/>
        </div>
        <div className='card'>
            <span>Электро-оборудование</span>
            <img src={"/home/electro.svg"}/>
        </div>
      </div>


<div className="about">
    <div class="about_img">
        <img src = {"/home/about_img.svg"}/>
    </div>
    <div class="about_tekst">
      <a>О компании</a>
    <span>На протяжении 6 лет компания «Автомастер» занимается поставками автозапчастей ГАЗ, УАЗ, ПАЗ, ВАЗ, Камаз.
Мы специализируемся на продвижение своего бренда ТМ PRAVT – сертифицированная торговая марка российской компании.
Наша география расширяется по всей России и ближнему зарубежью, мы стали узнаваемые.

На сегодняшний день ассортимент нашей продукции более 600 позиций. 
С каждым годом прогресс увеличения ассортимента 
составляет не менее чем на 35%.
Производственные мощности, партнеры компании расположены на территории КНР.
 </span>
    </div>
</div>


<div class="auto">
          <img src={"/home/car1.svg"}/>   
          <img src={"/home/car2.svg"}/>  
          <img className='ydalit' src={"/home/car3.svg"}/>  
          <img className='ydalit' src={"/home/car4.svg"}/>  
          <img className='ydalit' src={"/home/car5.svg"}/>  
          <img className='ydalit' src={"/home/shest.svg"}/>  
</div>


        <div className='save'>
            <span>БЕЗОПАСНОСТЬ, КОМФОРТ, НАДЕЖНОСТЬ!</span>
        </div>

      <div className='border_bottom'>
        <div className='bottom_1'>
            <span>Вся продукция  изготовлена в соответствии с Директивой  Европейского парламента и Совета Европейского Союза 2007/46/ЕС от 5 сентября 2007 г. 
            На всю продукцию, которая требует подтверждения безопасности использования на территории РФ и Таможенного союза есть подтверждение соответствию требованиям техническим регламентов: ТР ТС 018/2011 и ТР ТС 010/2011</span>
        </div>
        <div className='bottom_2'>
          <span>Варианты оплаты: - Оплата наличными
- Для юридических лиц возможен безналичный расчёт с НДС, для ближнего зарубежья без НДС Так же принимаем к оплате:</span>
        </div>
        <div className='bottom_3'>
          <img src={"/home/3_img.svg"}/>  
          <span>Так же, наша компания является официальным представителем TIRSAN KARDAN (Тирсан Кардан) на территории Нижегородской области. Продукция успешно присутствует 
на российском рынке свыше 9 лет. </span>
        </div>
      </div>

    <div className='plus'>
      <img src={"/home/medal.svg"}/>
      <span>Гарантия качества</span>
      <img src={"/home/car_bot.svg"}/>
      <span>Быстрая доставка</span>
      <img src={"/home/konkr.svg"}/>
      <span>Конкурентные цены</span>
      <img src={"/home/menedgr.svg"}/>
      <span>Персональный менеджер</span>
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

export default HomePage