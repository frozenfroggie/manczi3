import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Img from 'gatsby-image'
import styled, { keyframes } from "styled-components"

const NewsTitle = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 10px 5px 7px;
  background: linear-gradient(to top, rgba(237, 27, 104, 0.8), transparent);
  a {
    color: white !important;
    text-decoration: none !important;
  }
`

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const imageStyle = { borderRadius: '5px', width: '100%' }
    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => {
            console.log(post.frontmatter.featuredimage)
            return (
            <div className="is-parent column is-6" key={post.id}>
              <article
                style={{padding: 0}}
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}>
                <header>
                {
                  !!post.frontmatter && !!post.frontmatter.featuredimage && !!post.frontmatter.featuredimage.childImageSharp &&
                  <Img style={imageStyle} fluid={post.frontmatter.featuredimage.childImageSharp.fluid} alt={post.title} />
                }
                  <p className="post-meta">
                    <NewsTitle>
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </NewsTitle>
                  </p>
                </header>
              </article>
            </div>
          )
          })
        }
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
