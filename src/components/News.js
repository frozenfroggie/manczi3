import React from 'react'
import Img from 'gatsby-image'
import styled from "styled-components"
import { Link } from 'gatsby'

const NewsTitle = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 25px 5px 7px;
  width: 100%;
  transition: all .2s;
  text-align: left;
  background: linear-gradient(to top, rgba(237, 27, 104, 0.85), transparent);
  a {
    font-weight: 600;
    color: white !important;
    text-decoration: none !important;
    font-size: ${props => props.size + 'em'} !important;
    &:hover {
      color: white !important;
    }
  }
`
const News = ({post, idx}) => {
  console.log(idx)
  const imageStyle = { borderRadius: '4px', minHeight: '100%', width: 'auto' }
  if (idx === '0') {
    imageStyle.height = 360
  } else {
    imageStyle.height = 277
  }
  return (
    <div>
      <article
        style={idx === '0' ? {padding: 0, minHeight: 350} : {padding: 0, minHeight: 267}}
        className={`blog-list-item tile is-child box notification ${
          post.frontmatter.featuredpost ? 'is-featured' : ''
        }`}>
        {
          !!post.frontmatter && !!post.frontmatter.featuredimage && !!post.frontmatter.featuredimage.childImageSharp &&
          <Img style={imageStyle} fluid={post.frontmatter.featuredimage.childImageSharp.fluid} alt={post.title} />
        }
          <p className="post-meta">
            <NewsTitle size={idx === '0' ? '1.4' : '1.05'}>
              <Link
                className="title has-text-primary is-size-4"
                to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
            </NewsTitle>
          </p>
      </article>
    </div>
  )
}

export default News
