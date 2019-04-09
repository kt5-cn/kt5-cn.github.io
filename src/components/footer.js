import { Link } from 'gatsby'
import React from 'react'

const Footer = ({ links }) => (
  <div
    style={{
      width: '100%',
      background: '#efefef',
      borderTop: '1px solid #eee',
      fontSize: 12
    }}
    className="footer"
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center'
      }}
    >
      注： 本站内容全部原创或者来源于网络， 如遇引用版权问题，
      欢迎与本站站长联系！ <br />
      <br />
      {links.map((item, i) =>
        !item.isA ? (
          <Link to={item.to} title={item.title} key={i}>
            {`${i !== 0 ? '-' : ''}${item.title}`}
          </Link>
        ) : (
          <a href={item.to} title={item.title} key={i}>
            {`${i !== 0 ? '-' : ''}${item.title}`}
          </a>
        )
      )}
      <br />
      <a href="mailto:kbl_1794@qq.com" rel="nofollow">
        联系站长
      </a>
      |
      <a href="mailto:kbl_1794@qq.com" rel="nofollow">
        商务合作
      </a>
      |<Link to="/message"> 在线留言 </Link> <br />
      空调网 - 专注于空调 保留所有权© 2017~{new Date().getFullYear()} kt5.cn |
      特聘法律顾问: 杨律师{/*  |
      <img
        src="/images/beiantu.png"
        style={{
          verticalAlign: 'middle'
        }}
        alt="空调网备案图标"
      />
      粤ICP备18002963号 */}
    </div>
  </div>
)

export default Footer
