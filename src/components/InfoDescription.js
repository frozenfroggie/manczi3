import React from 'react'
import { FaInfo, FaInfoCircle, FaExpand } from 'react-icons/fa';

class InfoDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoDescriptionExtended: false
    }
  }
  toogleInfoDescription = () => {
    this.setState(prevState => ({
      infoDescriptionExtended: !prevState.infoDescriptionExtended
    }))
  }
  render() {
    const { info, infoDescription, image } = this.props
    return (
      <div className="info">
        {
          <div onClick={this.toogleInfoDescription} style={{zIndex: 100, backgroundColor: 'rgba(250,250,250,.9)', overflowY: 'auto', transition: 'all 0.1s linear', position: 'absolute', right: 20, bottom: this.state.infoDescriptionExtended ? -250 : -210, width: this.state.infoDescriptionExtended ? '80vw' : '30vw', maxHeight: this.state.infoDescriptionExtended ? '80vh' : 'auto', border: '1px solid #ED1B68', borderRadius: '5px', padding: this.state.infoDescriptionExtended ? '35px 40px' : '25px 35px'}}>
            <FaInfoCircle size="1.2em" style={{position: 'absolute', top: 10, left: 10}}>
            </FaInfoCircle>
            {
              info
            }
            {
              this.state.infoDescriptionExtended && infoDescription &&
              <div style={{marginTop: 35}}>
                <img src={image} align="left" width="50%" style={{margin: '0px 20px 20px 0px'}}/>
                {
                   infoDescription
                }
              </div>
            }
            {
              !this.state.infoDescriptionExtended && infoDescription &&
              <FaExpand size="1.2em" style={{position: 'absolute', top: 10, right: 10}}>
              </FaExpand>
            }
          </div>
        }
      </div>
    )
  }
}

export default InfoDescription
