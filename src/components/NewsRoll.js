import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Img from 'gatsby-image'
import styled, { keyframes } from "styled-components"
import classNames from 'classnames'
import News from './News'

const NewsTitle = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 10px 5px 7px;
  background: linear-gradient(to top, rgba(189,227,222, 0.8), transparent);
  a {
    color: white !important;
    text-decoration: none !important;
  }
`

class NewsRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const imageStyle = { borderRadius: '5px', width: '100%' }
    return (
      <div className="columns is-multiline">
        <div className="is-parent column is-6">
          { posts[0] && <News post={posts[0].node} idx="0"/> }
        </div>
        <div className="is-parent column is-6">
          <div className="columns is-12">
            <div className="is-child column is-6">
              { posts[1] && <News post={posts[1].node} idx="1"/> }
            </div>
            <div className="is-child column is-6">
              { posts[2] && <News post={posts[2].node} idx="2"/> }
            </div>
          </div>
          <div className="is-12 has-text-centered">
            <Link style={{width: '100%'}} className="btn btn-pink" to="/blog">
              Pokaż więcej
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

NewsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsRollQuery {
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
                    fluid(maxWidth: 700, quality: 100) {
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
    render={(data, count) => <NewsRoll data={data} count={count} />}
  />
)
