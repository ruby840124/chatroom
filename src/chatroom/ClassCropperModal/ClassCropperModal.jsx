import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Cropper from 'react-cropper' // 引入Cropper
import 'cropperjs/dist/cropper.css' // 引入Cropper对应的css

import './ClassCropperModal.css'

export default class ClassCropperModal extends Component {
  static propTypes = {
    uploadedImageFile: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      src: null
    }
  }

  componentDidMount() {
    const fileReader = new FileReader()
    fileReader.onload = e => {
      const dataURL = e.target.result
      this.setState({ src: dataURL })
    }

    fileReader.readAsDataURL(this.props.uploadedImageFile)
  }

  handleSubmit = () => {
    if (!this.state.submitting) {
      console.log('上傳圖片')
      this.cropper.getCroppedCanvas().toBlob(async blob => {
        this.props.onSubmit(blob);
        this.props.onClose()
      })
    }
  }

  render() {
    return (
      <div className="class-cropper-modal">
        <div className="modal-panel">
            <div className="cropper-container">
              <Cropper
                src={this.state.src}
                className="cropper"
                ref={cropper => (this.cropper = cropper)}
                viewMode={1}
                zoomable={false}
                aspectRatio={1}
                guides={false}
                preview=".cropper-preview"
              />
            </div>
            <div className="preview-container">
              <div className="cropper-preview" />
            </div>
          <div className="button-row">
            <div className="_button" onClick={this.handleSubmit}>
              submit
            </div>
          </div>
        </div>
      </div>
    )
  }
}
