import React from 'react'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from "styled-components"

const AsideStyled = styled.aside`
  width: 100%;
  height: auto;
  background-color: rgba(250,250,250,0.7);
  z-index: 100;
  padding: 30px;
  margin-left: 0px; !important
`

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    list-style-type: none;
    color: #202020;
    transition: all .3s;
    padding: 5px;
    &:hover {
      color: #339933;
    }
    a {
      &:hover {
        color: #339933;
      }
    }
  }
`

const Aside = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <AsideStyled>
    <h1 className="title is-size-2 is-bold-light">Kategorie</h1>
    <TagList  className="columns is-12">
      {group.map(tag => (
        <li key={tag.fieldValue} className="column is-3">
          <Link className="btn-pink" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue.charAt(0).toUpperCase() + tag.fieldValue.slice(1) } ({tag.totalCount})
          </Link>
        </li>
      ))}
    </TagList>
  </AsideStyled>
)

export default props => (
  <StaticQuery
    query={graphql`
      query AsideQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data, location) => (
      <Aside data={data} {...props} />
    )}
  />
)
