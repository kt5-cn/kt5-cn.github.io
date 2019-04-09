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
        { title: '空调售后电话', isA: false, to: '/hotline', match: '\\/hotline' },
        { title: '空调常见问题', isA: false, to: '/qna', match: '\\/qna' },
        { title: '空调价格', isA: false, to: '/price', match: '\\/price' },
        { title: '空调种类', isA: false, to: '/type', match: '\\/type' },
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
