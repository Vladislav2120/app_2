import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export const HeaderPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <React.Fragment>
    <div className={'header'}>
      <div className={'header__menu'}>
      <div>
        <img src={'/header/burger.svg'} />
        <Link to={'/'}>Каталог</Link>
        </div>
        <div>
          <Link to={'/'}>Главная</Link>
        </div>
        <div>
          <Link to={'/about'}>О компании</Link>
        </div>
        <div>
          <Link to={'/partneram'}>Партнёрам</Link>
        </div>
        <div>
          <Link to={'/news'}>Новости</Link>
        </div>
        <div>
          <Link to={'/contacts'}>Контакты</Link>
        </div>
    </div>
    </div>

    <div className={'header-mobile'}>
        <div className={'header-mobile__menu'}>
        <div class="tekst_logo">
        <Link to={'/'}>Производство запасных частей 
для грузового коммерческого
транспорта</Link>
        </div>
          <div class = 'phone_m'>
            <img src={'/header_mobile/phone.svg'} />
          </div>
          <div onClick={() => setIsOpen(!isOpen)}>
            <img src={'/header_mobile/burger.svg'} />
          </div>
        </div>
        <div
          className={classNames('header-mobile__block', {
            'header-mobile__block-open': isOpen,
          })}
        >
          {isOpen && (
            <>
              <div>
                <Link to={'/'}>Каталог</Link>
              </div>
              <div>
                <Link to={'/'}>Главная</Link>
              </div>
              <div>
                <Link to={'/about'}>О компании</Link>
              </div>
              <div>
                <Link to={'/partneram'}>Партнёрам</Link>
              </div>
              <div>
                <Link to={'/news'}>Новости</Link>
              </div>
              <div>
                <Link to={'/contacts'}>Контакты</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}
