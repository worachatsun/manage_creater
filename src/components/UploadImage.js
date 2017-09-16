import React, {Component} from 'react'
import {connect} from 'react-redux'
import {storeLogo} from '../actions'
import {Upload, Icon, message, Spin} from 'antd'
import {POST_UPLOAD_DISPLAY} from '../api'
import '../styles/css/index.css'

class UploadImage extends Component {
    state = {
        loading_img: false
    }
    
    handleChange = (info) => {
        this.setState({loading_img: true})
        if (info.file.status === 'done') {
            this.setState({loading_img: false})
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                this.setState({ imageUrl })
                this.props.storeLogo(imageUrl)
            })
        }
    }
    
    render() {
        const imageUrl = this.state.imageUrl
        const uploadButton = (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        )
        
        return (
            <Upload
                className="avatar-uploader"
                name="avatar"
                showUploadList={false}
                action={POST_UPLOAD_DISPLAY}
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
            {this.state.loading_img?<div style={{zIndex: '2', position: 'absolute'}}><Spin /></div>:''}
            {
                imageUrl ?
                <img src={imageUrl} alt="" className="avatar" /> :
                uploadButton
            }
            </Upload>
        )
    }
}

function getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg' || 'image/png'
    if (!isJPG) {
        message.error('You can only upload JPG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!')
    }
    return isJPG && isLt2M
}

export default connect(null, {storeLogo})(UploadImage)