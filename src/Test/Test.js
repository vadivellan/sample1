import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Collapse,Alert, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Button,CardBlock, Card,Container, Row, Col,Jumbotron } from 'reactstrap';
import './Test.css'

export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div >
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        


        
        <div className="container">
        <Alert color="success">
        <strong>Well done!</strong> You successfully read this important alert message.
      </Alert>

        
        <Jumbotron>
        <Example1/>
        </Jumbotron>
        </div>
        

        
      </div>
    );
  }
}

const Example = (props) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb tag="nav">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
        <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};


const GridSample = (props) => {
  return (


      <Container className="col">
    <Row>
      <Col >.col</Col>
    </Row>
    <Row>
      <Col >.col</Col>
      <Col>.col</Col>
      <Col>.col</Col>
      <Col>.col</Col>
    </Row>
    <Row>
      <Col  xs="3">.col-3</Col>
      <Col xs="auto">.col-auto - variablvbmvbmvbme width content</Col>
      <Col xs="3">.col-3</Col>
    </Row>
    <Row>
      <Col xs="6">.col-6</Col>
      <Col xs="6">.col-6</Col>
    </Row>
    <Row>
      <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
      <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
      <Col sm="4">.col .col-sm-4</Col>
    </Row>
    <Row>
      <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>.col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2</Col>
    </Row>
    <Row>
      <Col sm="12" md={{ size: 8, offset: 2 }}>.col .col-sm-12 .col-md-6 .col-md-offset-3</Col>
    </Row>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
      <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
    </Row>
  </Container>
  
  
  
   
      );
  };


  class Example1 extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
    }
  
    toggle() {
      this.setState({ collapse: !this.state.collapse });
    }
  
    render() {
      return (
        <div>
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
          <Collapse isOpen={this.state.collapse}>
           <GridSample/>
          </Collapse>
        </div>
      );
    }
  }