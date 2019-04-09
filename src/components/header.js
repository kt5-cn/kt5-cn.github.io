import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ location, links }) => {
  // console.log(location)
  const { pathname } = location
  return (
    <div
      style={{
        marginBottom: '1rem'
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1rem 1.0875rem'
        }}
        className="clearfix"
      >
        <div
          style={{
            margin: 0,
            maxWidth: '30%'
          }}
          className="logo fl"
        >
          <Link
            to="/"
            style={{
              color: '#ff9c00',
              textDecoration: 'none'
            }}
            title={'空调网首页'}
          >
            <img src={'/images/logo.png'} alt="空调网LOGO" />
          </Link>
        </div>
        <div
          style={{
            margin: 0,
            maxWidth: '50%'
          }}
          className="friends-link fr"
        >
          <a
            href="http://www.iampua.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 16,
              color: '#333',
              textShadow: '2px 2px 0px #ddd'
            }}
          >
            Sponsor 泡学达人
          </a>
        </div>
      </div>
      <div
        className="header-nav"
        style={{
          borderBottom: '2px solid #343434',
          height: 40,
          lineHeight: 40
        }}
      >
        <ul
          className="nav-list clearfix"
          style={{
            margin: '0 auto',
            maxWidth: 960,
            display: 'block',
            padding: '0 40px',
            height: 40,
            overflow: 'hidden'
          }}
        >
          {links.map((item, i) => (
            <li
              className={
                pathname.match(new RegExp(item.match, 'i')) ? 'active' : null
              }
              key={i}
            >
              {!item.isA ? (
                <Link to={item.to} title={item.title}>
                  {item.title}
                </Link>
              ) : (
                <a href={item.to} title={item.title}>
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          background:
            '#b1dff0 url(/img/banner-2017.jpg) no-repeat center center',
          height: 94
        }}
      />
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
