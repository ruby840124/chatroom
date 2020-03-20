import React, { Component } from 'react'
import ClassCropperModal from './ClassCropperModal/ClassCropperModal'
import './chat.css'

const MAX_FILE_SIZE = 5 * 1024 * 1024 
class information extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classModalVisible: false,
      classModalFile: null,
      classResultImgUrl: 'https://upload.cc/i1/2020/03/19/9wyBXq.jpg',
    }
  }

  handleClassFileChange = e => {
    const file = e.target.files[0]
    if (file) {
      if (file.size <= MAX_FILE_SIZE) {
        this.setState(
          {
            classModalFile: file 
          },
          () => {
            this.setState({
              classModalVisible: true 
            })
          }
        )
      } else {
        console.log('圖片過大')
      }
    }
  }

  handleGetResultImgUrl = key => blob => {
    const str = URL.createObjectURL(blob)
    this.setState({
      [key]: str
    })
  }

  render() {
    const {
      classModalVisible,
      classModalFile,
      classResultImgUrl,
    } = this.state
    return (
      <div className="content">
          <label style={{fontSize:'16px',margin:'8px 0'}}>id: ruby840124</label>
          <div className="img-container">
            {classResultImgUrl && (
              <img
                style={{width:'120px',height:'120px'}}
                src={classResultImgUrl}
                alt="classResultImgUrl"
              />
            )}
          </div>
          <div className="upload-btn-wrapper">
            <button className="_button">Upload Photo</button>
            <input type="file" onChange={this.handleClassFileChange} accept="image/*" />
          </div>
          <input type="text" placeholder="name"  />
          <input type="text" placeholder="input your emotion here" />
          <div className="upload-btn-wrapper">
            <button className="_button">Update</button>
          </div>
          <div className="upload-btn-wrapper">
            <button className="_button">Logout</button>
          </div>
        {classModalVisible && (
          <ClassCropperModal
            uploadedImageFile={classModalFile}
            onClose={() => {
              this.setState({ classModalVisible: false })
            }}
            onSubmit={this.handleGetResultImgUrl('classResultImgUrl')}
          />
        )}
      </div>
    )
  }
}

export default information;
