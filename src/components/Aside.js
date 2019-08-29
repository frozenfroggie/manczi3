import React from 'react'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from "styled-components"
import { FaFilter } from 'react-icons/fa';
import classNames from 'classnames';

const AsideStyled = styled.aside`
  width: 100%;
  height: auto;
  z-index: 100;
  margin-left: 0px !important;
  margin-bottom: 60px;
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
  filterPostsBy,
  tag: selectedTag,
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <AsideStyled>
    <TagList className="columns is-12">
      <li key="all" className="column is-2" style={{marginTop: 4}} >
        <div className={classNames(["btn-pink", {"btn-pink-active": 'all' === selectedTag}])} onClick={() => filterPostsBy('all')}>
          Wszystkie
        </div>
      </li>
      {group.map(tag => (
        <li key={tag.fieldValue} className="column is-2" style={{marginTop: 4}} >
          <div className={classNames(["btn-pink", {"btn-pink-active": tag.fieldValue === selectedTag}])} onClick={() => filterPostsBy(tag.fieldValue)}>
            {tag.fieldValue.charAt(0).toUpperCase() + tag.fieldValue.slice(1) }
          </div>
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
