import React, { Component } from "react";
//import styles from './infoBox.module.css'

import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';


class infoBox extends Component {

    constructor(props) {    
    super(props);  
      this.state = {      
        name: "React",      
        popoverOpen: false    
      };
      this.togglePopover = this.togglePopover.bind(this);
    }
  
  togglePopover() {    
    this.setState({ popoverOpen: !this.state.popoverOpen })  
  }
  
  
  render() {
      const { popoverOpen } = this.state;
      return (
  
        <div>
          <Button id="mypopover" type="button">
          {this.props.Drink}
          </Button>
          <Popover
            placement="bottom"
            isOpen={popoverOpen}
            target="mypopover"
            toggle={this.togglePopover}
          >
            <PopoverHeader>name</PopoverHeader>
            <PopoverBody>{this.props.Drink}
              This is simple popover content
            </PopoverBody>
          </Popover>
        </div>
      );
    }
  }
  
  
 
export default infoBox;