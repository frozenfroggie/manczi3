import React from 'react'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from "styled-components"
import { FaFilter } from 'react-icons/fa';
import classNames from 'classnames';

import AboutUs from '../img/about-us.png'
import AboutUsText from '../img/about-us-text.png'
import Competitions from '../img/competitions.png'
import CompetitionsText from '../img/competitions-text.png'
import Exhibitions from '../img/exhibitions.png'
import ExhibitionsText from '../img/exhibitions-text-2.png'
import Courses from '../img/courses.png'
import CoursesText from '../img/courses-text-2.png'

const Service = styled.div`
  position: relative;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  &:hover .text {
    transform: rotate(-360deg);
  }
  &:hover .front {
    transform: rotate(360deg);
  }
`
const ServiceText = styled.div`
  position: relative;
  width: 245px;
  height: 245px;
  border-radius: 50%;
`

const ServiceFront = styled.div`
  position: absolute;
  height: 175px;
  width: 175px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 4px solid #009999;
  transition: all .4s;
  /* transition-timing-function: cubic-bezier(.175, .885, .32, 1.275); */
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  &:hover {
    cursor: pointer
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all .4s;
`

const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
`

const ServiceName = styled.div`
  padding-top: 25px;
  font-size: 1em;
  text-align: center;
`

const AsideStyled = styled.aside`
  width: 100%;
  height: auto;
  z-index: 100;
  margin-left: 0px !important;
  margin-bottom: 15px;
  position: relative;
  top: -10px;
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

// <div className={classNames(["btn-pink", {"btn-pink-active": 'all' === selectedTag}])} onClick={() => filterPostsBy('all')}>
//   Wszystkie
// </div>


// <div className={classNames(["btn-pink", {"btn-pink-active": tag.fieldValue === selectedTag}])} onClick={() => filterPostsBy(tag.fieldValue)}>
//   {tag.fieldValue.charAt(0).toUpperCase() + tag.fieldValue.slice(1) }
// </div>

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
      <div className="column is-3">
        <ServiceWrapper onClick={() => filterPostsBy('piszą o nas')}>
          <Service>
            <ServiceText>
              <Img className="text" src={AboutUsText} alt="Piszą o nas" />
            </ServiceText>
            <ServiceFront className="front">
              <Img src={AboutUs} alt="Piszą o nas" style={{top: -6, left: 0}}/>
            </ServiceFront>
          </Service>
        </ServiceWrapper>
      </div>
      <div className="column is-3">
        <ServiceWrapper onClick={() => filterPostsBy('konkursy')}>
          <Service>
            <ServiceText>
              <Img className="text" src={CompetitionsText} alt="Konkursy" />
            </ServiceText>
            <ServiceFront className="front">
              <Img src={Competitions} alt="Konkursy" style={{top: -6, left: 0}}/>
            </ServiceFront>
          </Service>
        </ServiceWrapper>
      </div>
      <div className="column is-3">
        <ServiceWrapper onClick={() => filterPostsBy('wystawy')}>
          <Service>
            <ServiceText>
              <Img className="text" src={ExhibitionsText} alt="Wystawy" />
            </ServiceText>
            <ServiceFront className="front">
              <Img src={Exhibitions} alt="Wystawy" style={{top: -6, left: 0}}/>
            </ServiceFront>
          </Service>
        </ServiceWrapper>
      </div>
      <div className="column is-3">
        <ServiceWrapper onClick={() => filterPostsBy('szkolenia')}>
          <Service>
            <ServiceText>
              <Img className="text" src={CoursesText} alt="Szkolenia" />
            </ServiceText>
            <ServiceFront className="front">
              <Img src={Courses} alt="Szkolenia" style={{top: -6, left: 0}}/>
            </ServiceFront>
          </Service>
        </ServiceWrapper>
      </div>
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
