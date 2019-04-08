import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const links = [
        { title: '首页', isA: false, to: '/', match: '^\\/$' },
        {
          title: '纸浆和造纸行业的新闻',
          isA: true,
          to: '/news/index.html',
          match: '/news'
        },
        { title: 'A4纸知多少', isA: false, to: '/fun', match: '\\/fun' },
        { title: '纸张百科', isA: false, to: '/baike', match: '\\/baike' },
        { title: 'A4纸价格', isA: false, to: '/price', match: '\\/price' },
        { title: 'A4纸畅言吧', isA: false, to: '/bbs', match: '\\/bbs' }
      ]
      return (
        <>
          <Header
            siteTitle={data.site.siteMetadata.title}
            location={location}
            links={links}
          />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 20px',
              overflow: 'auto'
            }}
          >
            <main> {children} </main>
          </div>
          <Footer links={links} />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
