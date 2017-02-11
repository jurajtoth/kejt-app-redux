
import React from 'react'
import {Modal} from 'react-bootstrap'

export default class ModalWindow extends React.Component {

  render () {
    return <div className="static-modal">
                <Modal show={this.props.show} onHide={this.props.hide}>
                    <Modal.Header>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.body}
                    </Modal.Body>
                    <Modal.Footer>
                        {this.props.footer}
                    </Modal.Footer>
            </Modal>
        </div>
  }
}

