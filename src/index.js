import React, { createRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as Menu } from './assets/menu.svg'

import styles from './styles.module.css'

export const Navbar = ({ logo, items, style, float, useRouter }) => {
  const navigate = useNavigate()
  const styled = {
    barStyles: {
      background: '#0984e3'
    },
    linkStyles: {
      color: 'white'
    },
    logoStyles: {
      fontSize: '20px',
      color: 'white'
    },
    sidebarStyles: {
      background: 'grey',
      buttonColor: 'white'
    },
    ...style
  }
  const cross = createRef()
  const onOpen = () => {
    cross.current.style.width = '200px'
  }
  const onClose = () => {
    cross.current.style.width = '0'
  }
  return (
    <div
      className={styles.navbar_wrapper}
      style={{
        ...styled.barStyles,
        position: float ? 'fixed' : null
      }}
    >
      <div className={styles.logo_wrapper}>
        {useRouter ? (
          <a
            style={{ ...styled.logoStyles }}
            onClick={() => {
              navigate(logo.link)
              onClose()
            }}
          >
            {logo.img ? <img src={logo.img} alt='logo' /> : logo.text}
          </a>
        ) : (
          <a style={{ ...styled.logoStyles }} href={logo.link}>
            {logo.img ? <img src={logo.img} alt='logo' /> : logo.text}
          </a>
        )}
      </div>
      <div className={styles.nav_elements}>
        {items.map(({ text, link }, indx) => {
          if (useRouter) {
            return (
              <a
                onClick={() => {
                  navigate(link)
                  onClose()
                }}
                key={indx}
                style={{ ...styled.linkStyles }}
              >
                {text}
              </a>
            )
          }

          return (
            <a href={link} key={indx} style={{ ...styled.linkStyles }}>
              {text}
            </a>
          )
        })}
      </div>
      <div className={styles.mob_nav}>
        <Menu
          style={{ fill: styled.sidebarStyles.buttonColor }}
          onClick={onOpen}
        />
        <div
          className={styles.sidebar_wrapper}
          ref={cross}
          style={{ ...styled.sidebarStyles }}
        >
          <button
            onClick={onClose}
            style={{ color: styled.sidebarStyles.buttonColor }}
          >
            &#x2716;
          </button>
          {items.map(({ text, link }, indx) => {
            if (useRouter) {
              return (
                <a
                  onClick={() => {
                    navigate(link)
                    onClose()
                  }}
                  key={indx}
                  style={{
                    ...styled.linkStyles,
                    background: styled.sidebarStyles.background
                  }}
                >
                  {text}
                </a>
              )
            }

            return (
              <a
                href={link}
                key={indx}
                style={{
                  ...styled.linkStyles,
                  background: styled.sidebarStyles.background
                }}
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export const NavbarLeft = ({ logo, items, style, align, float, useRouter }) => {
  const navigate = useNavigate()
  const styled = {
    barStyles: {
      background: '#0984e3'
    },
    linkStyles: {
      color: 'white'
    },
    logoStyles: {
      fontSize: '20px',
      color: 'white'
    },
    sidebarStyles: {
      background: 'grey',
      buttonColor: 'white'
    },
    ...style
  }
  const cross = createRef()
  const onOpen = () => {
    cross.current.style.width = '200px'
  }
  const onClose = () => {
    cross.current.style.width = '0'
  }
  return (
    <div
      className={`${styles.navbar_wrapper} ${styles.left}`}
      style={{
        ...styled.barStyles,
        position: float ? 'fixed' : null
      }}
    >
      <div className={`${styles.logo_wrapper} ${styles.left_logo}`}>
        {useRouter ? (
          <a
            style={{ ...styled.logoStyles }}
            onClick={() => {
              navigate(logo.link)
              onClose()
            }}
          >
            {logo.img ? <img src={logo.img} alt='logo' /> : logo.text}
          </a>
        ) : (
          <a style={{ ...styled.logoStyles }} href={logo.link}>
            {logo.img ? <img src={logo.img} alt='logo' /> : logo.text}
          </a>
        )}
      </div>
      <div className={styles.nav_elements}>
        {items.map(({ text, link }, indx) => {
          if (useRouter) {
            return (
              <a
                onClick={() => {
                  navigate(link)
                  onClose()
                }}
                key={indx}
                style={{ ...styled.linkStyles }}
              >
                {text}
              </a>
            )
          }

          return (
            <a href={link} key={indx} style={{ ...styled.linkStyles }}>
              {text}
            </a>
          )
        })}
      </div>
      <div className={styles.mob_nav}>
        <Menu
          style={{ fill: styled.sidebarStyles.buttonColor }}
          onClick={onOpen}
        />
        <div
          className={`${styles.sidebar_wrapper} ${styles.left_nav}`}
          ref={cross}
          style={{ ...styled.sidebarStyles }}
        >
          <button
            className={styles.btn_left}
            onClick={onClose}
            style={{ color: styled.sidebarStyles.buttonColor }}
          >
            &#x2716;
          </button>
          {items.map(({ text, link }, indx) => {
            if (useRouter) {
              return (
                <a
                  onClick={() => {
                    navigate(link)
                    onClose()
                  }}
                  key={indx}
                  style={{
                    ...styled.linkStyles,
                    background: styled.sidebarStyles.background
                  }}
                >
                  {text}
                </a>
              )
            }

            return (
              <a
                href={link}
                key={indx}
                style={{
                  ...styled.linkStyles,
                  background: styled.sidebarStyles.background
                }}
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
