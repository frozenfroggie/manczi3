import React from 'react'
import classNames from 'classnames'
import defaultDog from '../img/default_dog.png'
import { Link } from 'gatsby'
import styled, { keyframes } from "styled-components"

import { FaCamera } from 'react-icons/fa';

const Folder = styled.div`
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
    transform: rotate(360deg) translateY(-7px);
    transition-delay: .3s;
  }
`

const FolderText = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
`

const FolderFront = styled.div`
  position: absolute;
  border-radius: 50%;
  box-sizing: border-box;
  border: 4px solid #009999;
  background-color: #BDE3DE;
  transition: all .4s;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transition-timing-function: cubic-bezier(.175, .885, .32, 1.275); */
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

const FolderBack = styled.div`
  position: absolute;
  height: calc(100% + 4px);
  width: calc(100% + 4px);
  background-color: #009999;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  padding: 22px;
  transition: all .4s;
  /* transition-timing-function: cubic-bezier(.175, .885, .32, 1.275); */
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transform-style: preserve-3d;
  perspective: 1000px;
`

const Img = styled.img`
  min-width: 100%;
  min-height: 100%;
  width: 162px;
  height: 162px;
  position: relative;
  transition: all .4s;
`

const FolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
`

const FolderName = styled.div`
  padding-top: 25px;
  font-size: 1em;
  text-align: center;
`

const GalleryFolder = props => {
  return (
  <div
    style={{display: 'flex', justifyContent: 'center'}}
    className="is-parent column is-4"
    key={props.id}>
    <Link to={props.slug}>
      <FolderWrapper>
        <Folder>
          <FolderText>
            <Img className="text" src={props.titleImage.childImageSharp.fluid.src} alt="Clipping" />
          </FolderText>
          <FolderFront className="front">
            <Img src={props.iconImage.childImageSharp.fluid.src} alt="Gallery image" />
          </FolderFront>
          <FolderBack className="front">
            <div className="is-size-5" style={{color: "white", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
              <div>
              {
                !props.galleryImages || props.galleryImages && props.galleryImages.length === 0 ?
                  `0 zdjęć`
                  :
                  props.galleryImages.length === 1 ?
                    `${props.galleryImages.length} zdjęcie`
                    :
                    `${props.galleryImages.length} zdjęcia`
              }
              </div>
              <FaCamera size="3em" color="white"/>
            </div>
          </FolderBack>
        </Folder>
      </FolderWrapper>
    </Link>
  </div>
)}

export default GalleryFolder

//
// <div key={`folder-${props.id}`} className={classNames("is-child", "folder")} onClick={() => props.openFolder()}>
//   {
//     props.titleImage &&
//     <img key={`title-image-${props.id}`} className={classNames('title-image')}
//       src={!!(props.titleImage && props.titleImage.childImageSharp) ? props.titleImage.childImageSharp.fluid.src : defaultDog} />
//   }
//   {
//     props.iconImage &&
//     <img key={`folder-image-${props.id}`} className={classNames('folder-image')}
//       src={!!(props.iconImage && props.iconImage.childImageSharp) ? props.iconImage.childImageSharp.fluid.src : defaultDog} />
//   }
//   <div className="title is-size-5" style={{color: "#ED1B68"}}>
//     <FaCamera className="camera" size="1.1em" color="#ED1B68"/>
//   </div>
// </div>
