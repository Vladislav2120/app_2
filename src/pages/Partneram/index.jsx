import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const Partners = () => {


  return (
    <div className='partners_vnyt'>
          <div className='part_t'>
            Партнёрам
          </div>


          <div className="part_priv">

    <div class="part_priv_tekst">
      <a>Компания «Автомастер» занимается продвижением своей торговой марки Pravt</a>
      <a>Если вы занимаетесь продажей автозапчастей или только планируете открыть бизнес, вас интересует покупка запасных частей оптом: Газ, ВАЗ, УАЗ, ПАЗ, КаМАЗ., то
готовы предложить вам следующие:
</a>
    <span>Качественная продукция по выгодным ценам - залог вашего успеха!</span>
    <a>Мы гарантируем, что работа с нами - это развитие бизнеса.
</a>
    </div>
    <div class="part_priv_img">
        <img src = {"/partneram/top_img.svg"}/>
    </div>
</div>
      
<div className='nash'>
Нашим оптовым партнерам предлагаем:
</div>
<div className="pred">
  <div className='one'>
    <span>
    •Ассортимент автозапчастей от 600 наименований, с постоянным ростом около 35% в год.<br/>
    •Индивидуальную программу по отсрочке платежа.<br/>
    •Воспользоваться услугами удобной для партнера транспортной компании при доставке товара в регионы.<br/>
    •Иллюстрированным on-line каталогом, позволяющим максимально оптимизировать время поиска деталей.<br/>
    •Оповещение о новинках и акциях.<br/>
    •Заключить договор на долгосрочный период.<br/>
    •Равные условия сотрудничества для всех.<br/>
    </span>
  </div>
  <div className='two'>
    <span>
    •Доставку собственным транспортом по Нижнему Новгороду, Москве, России.<br/>
    •Персональный менеджер.<br/>
    •Репутация партнера как для покупателей, так и для поставщиков.<br/>
    •Все средства автоматизированного учета ЭДО.<br/>
    •Возможна отгрузка день в день.<br/>
    •Удобная форма оплаты, определяется по согласованию сторон.<br/>
    •Предоставление сертификатов качества.<br/>
    •Маркетинговая составляющая каталоги, раздаточный материал, для продвижения.<br/>
    •Собственная узнаваемая упаковка.<br/>

    </span>
  </div>
</div>

<div class="auto">
          <img src={"/home/car1.svg"}/>   
          <img src={"/home/car2.svg"}/>  
          <img className='ydalit' src={"/home/car3.svg"}/>  
          <img className='ydalit' src={"/home/car4.svg"}/>  
          <img className='ydalit' src={"/home/car5.svg"}/>   
</div>


<div className='mid_tekst'>
  <div className='top_mid_t'>
    <div className='one_t'>
    <a>Условия сотрудничества:<br/></a>
    <span>
    • Наличие юридического лица или ИП.<br/>
    • Заключение договора.<br/>
    • Способ оплаты заказов - безналичный расчет с НДС и без НДС для стран ближнего зарубежья.<br/>
    </span>
    </div>
    <div className='two_t'>
    <a>Для работы с оптовым отделом необходимо:<br/></a>
    <span>
    • Заполнить анкету.<br/>
    • Заключить договор о сотрудничестве.<br/>
    • Ознакомиться с коммерческой политикой.<br/>
    • Сделать заказ.<br/>
    </span>
    </div>
  </div>
</div>


<div class="tree_imgs">
    <a href="#" >
    <img src={"/partneram/mid_img1.svg"}/>
    </a>
    <a href="#" >
    <img src={"/partneram/mid_img2.svg"}/>
    </a>
    <a href="#" >
    <img src={"/partneram/mid_img3.svg"}/>
    </a>  
</div>


<div className='sklad_t'>
Наш склад
</div>

<div class="sklad_imgs">
          <img src={"/partneram/sklad1.svg"}/>   
          <img src={"/partneram/sklad2.svg"}/>  
          <img src={"/partneram/sklad3.svg"}/>   
          <img src={"/partneram/sklad4.svg"}/>   
</div>


<div className='questions'>
Остались вопросы?
</div>

<div className='bot'>
  <div className='bottom_teeksst'>
    <a>Требуется консультация или остались вопросы по работе, вы можете связаться с менеджером в разделе контакты 
  или отправив письмо на почту:<br/></a>
  <span>proavto@proavto.biz</span>
  </div>
  <div class="bottom_t_img">
    <a href="#">
    <img src = {"/partneram/zapros.svg"}/>
    </a>
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
export default Partners