import React from 'react'
import {Link} from 'react-router';
import {Modal, Button, ButtonGroup, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';

import ModalWindow from './../../../components/ModalWindow/component/ModalWindow';

export default class Bazal extends React.Component {

  render () {
    return <div className="main-div">
        <form>
            <div className="form-group">
                <label htmlFor="vek">Váha:</label>
                <input defaultValue={this.props.weight} onBlur={this.props.handleInputChange} type="text" pattern="\d*" className="form-control" id="weight" autoComplete="off"/>
                <div className={this.props.configSetToDefault ? 'label label-success' : 'label label-danger'}>
                    {this.props.configSetToDefault ? 'Na výpočet sú nastavené štandardné hodnoty.' : 'Pozor! Nastavené hodnoty nie sú štandardné.'}
                </div>
            </div>
        </form>
            {/* Modal window for configuration of bazal */}
            <ModalWindow 
                title="Nastavenie" 
                show={this.props.showConfigModal} 
                body={
                    <form>
                        <FormGroup controlId="until10">
                            <ControlLabel>Objem (ml) na 1kg (do 10kg)</ControlLabel>
                            <FormControl onChange={this.props.handleInputChange} value={this.props.until10} id="until10" type="text" pattern="\d*" autoComplete="off"/>
                        </FormGroup>
                        <FormGroup controlId="until20">
                            <ControlLabel>Objem (ml) na 1kg (od 11kg do 20kg)</ControlLabel>
                            <FormControl onChange={this.props.handleInputChange} value={this.props.until20} id="until20" type="text" pattern="\d*" autoComplete="off"/>
                        </FormGroup>
                        <FormGroup controlId="above20">
                            <ControlLabel>Objem (ml) na 1kg (nad 20kg)</ControlLabel>
                            <FormControl onChange={this.props.handleInputChange} value={this.props.above20} id="above20" type="text" pattern="\d*" autoComplete="off" />
                        </FormGroup>
                    </form>}
                footer={
                     <div>
                        <Button onClick={this.props.setDefaultConfig}>Default hodnoty</Button>
                        <Button bsStyle="primary" onClick={this.props.triggerConfigModal}>Zavrieť</Button>
                     </div>
                    }
            />
            {/* Modal window with result */}
            <ModalWindow 
                title="Výsledok bazálnej potreby tekutín" 
                show={this.props.showResultModal} 
                body={
                    <div>
                        {this.props.bazalResult.map((el,index) => {
                            return <div key={index}>{el}</div>;
                        })}
                    </div>}
                footer={
                    <div>
                        <ButtonGroup bsSize="large">
                            <Button bsStyle="primary">Výpočet roztoku</Button>
                            <Button onClick={this.props.closeResultModal}>Zavrieť</Button>
                        </ButtonGroup>
                    </div>}
            />
            <ButtonGroup vertical block>
                <Button bsStyle="primary" bsSize="large" onClick={this.props.calculateBazal}>Vypočítať</Button>
                <Button bsStyle="info" bsSize="large" onClick={this.props.triggerConfigModal}>Nastavenia</Button>
                <Link to="/" className="btn btn-lg btn-danger">Back</Link>
            </ButtonGroup>
    </div>
  }
}