import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const AboutUs = () => {


  return (
  <div className='about_str'>
    <div className="about_a">
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
        <div class="about_img">
            <img src = {"/home/about_img.svg"}/>
        </div>
    </div>


    <div class="auto">
          <img className='ydalit' src={"/home/car1.svg"}/>   
          <img className='ydalit' src={"/home/car2.svg"}/>  
          <img src={"/home/car3.svg"}/>  
          <img src={"/home/car4.svg"}/>  
          <img className='ydalit' src={"/home/car5.svg"}/>  
    </div>

<div className='garant_tekst'>
    <div className='garant1'>
      <span>Гарантируем качество</span>
    </div>
    <div className='garant2'>
      <span>Одной из основных задач нашей компании является выпуск качественной, надежной 
    и конкурентоспособной продукции, соответствующим всем необходимым стандартам.
    Вся наша продукция ТМ PRAVT имеет наличие сертификатов.
    Изготовление запчастей - это полное соответствие конвейерным элементам 
    с сохранением их конструктивных особенностей и заводской геометрии.
    </span>
    </div> 
</div>
<img src={"/home/shest.svg"}/>


    <div className='partner'>
      <span>Для партнеров</span>
    </div>

<div className='partner_tekst1'>
<img src={"/about/red_shar.svg"}/>
<span>Нашим партнёрам мы предлагаем удобные условия сотрудничества, одинаковая коммерческая политика, система скидок.
</span>
<img src={"/about/red_shar.svg"}/>
<span>Поставляем свою продукцию заводу ГАЗ в упаковке G-part.
</span>
</div>

<div className='partner_tekst1'>
<img src={"/about/red_shar.svg"}/>
<span>Бесперебойная поставка товара, возможность отгрузки день в день.
</span>
<img src={"/about/red_shar.svg"}/>
<span>Маркетинговые составляющие помогают 
в развитие собственной упаковки ТМ PRAVT, раздаточный материал, каталоги и акционные предложения для развития.
</span>
</div>

<div className='partner_tekst1'>
<img src={"/about/red_shar.svg"}/>
<span>Собственные склады и поддержание складских запасов.
</span>
<img src={"/about/red_shar.svg"}/>
<span>Одна из самых сильных сторон фирмы: ценовая политика которая, дает возможность войти в рынок с выгодным ценовым сегментом.
</span>
</div>


<div className='save_a'>
            <span>БЕЗОПАСНОСТЬ, КОМФОРТ, НАДЕЖНОСТЬ!</span>
        </div>

      <div className='border_bottom_a'>
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
export default AboutUs