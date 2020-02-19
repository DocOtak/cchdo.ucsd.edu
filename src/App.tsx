import React from 'react';

import {Container, Row, Col, Card, Button, InputGroup} from 'react-bootstrap';
import {Nav, Navbar, Form, NavDropdown} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead'; 

import thData from './thdata.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';

import CCHDOLogo from './svg/logo_cchdo.svg';
import CLIVARLogo from './svg/logo_clivar.svg';
import NOAALogo from './svg/logo_noaa.svg';
import NSFLogo from './svg/logo_nsf.svg';
import SIOLogo from './svg/logo_sio_color.svg';


function HomeWelcome(){
  return (
    <Card>
      <Card.Header>Welcome to the CCHDO</Card.Header>
      <Card.Body>
        <Card.Text>
          <p>
            The CCHDO's primary mission is to deliver the highest possible quality global CTD and hydrographic data to users. These data are a product of decades of observations related to the physical characteristics of ocean waters carried out during WOCE, CLIVAR and numerous other oceanographic research programs. Whenever possible we provide these data in three easy-to-use formats: WHP-Exchange (which we recommend for data submissions to the CCHDO), WOCE, and netCDF.
          </p>
          <p>
            The CCHDO also manages public and non-public CTD data to be used for the global Argo and OceanSITES programs.
          </p>
          <p>
            This site is funded by the National Science Foundation and the National Oceanic and Atmospheric Administration's Climate Observations Division.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

function HomeSearch(){
  return (
    <Card>
      <Card.Header>Search</Card.Header>
      <Card.Body>
        <Card.Text>
          <p>Keyword search is provided by the search box in the upper right of the page. Other options include:</p>
          <p><Button size="sm">Map Search</Button> lets you draw a box on a map to search for station data.</p>
          <p><Button size="sm">Advanced Search</Button> lets you finely define key word, bounding box, and temporal searches.</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

function HomeStartHere(){
  return (
    <Card>
      <Card.Header>Some Starting Searches</Card.Header>
      <Card.Body>
        <Card.Text>
          <p>Here are some searches which may be of general interest:</p>
          <h5>Basins</h5>
          <ul>
            <li><a href="/search?bbox=-180,65,180,90">Arctic Ocean</a></li>
            <li><a href="/search?bbox=-75,-60,20,65">Atlantic Ocean</a></li>
            <li><a href="/search?bbox=120,-60,-75,65">Pacific Ocean</a></li>
            <li><a href="/search?bbox=21,-70,120,23">Indian Ocean</a></li>
            <li><a href="/search?bbox=-180,-90,180,-40">Southern Ocean</a></li>
          </ul>
          <h5>Programs</h5>
          <ul>
            <li><a href="/search?q=GO-SHIP">GO-SHIP</a></li>
            <li><a href="/search?q=SOCCOM">SOCCOM</a></li>
            <li><a href="/search?q=USHYDRO">USHYDRO</a></li>
            <li><a href="/search?q=WOCE">WOCE</a></li>
            <li><a href="/search?q=DIMES">DIMES</a></li>
            <li><a href="/search?q=ELLETT">ELLETT</a></li>
            <li><a href="/search?q=CARINA">Project Carina</a></li>
          </ul>
          <h5>Time Series</h5>
          <ul>
            <li><a href="/search?q=HOT+timeseries">Hawaii Ocean Time Series</a></li>
            <li><a href="/search?q=BATS+timeseries">Bermuda Atlantic Time Series</a></li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

function HOMEFooter() {
  return (
    <div>
    <a href="http://www.clivar.org/">
      <img src={CLIVARLogo} alt="CLIVAR Logo" height={60} width={90} />
    </a>
    <a href="https://www.nsf.gov/">
      <img src={NSFLogo} alt="NSF Logo" height={60} width={60} />
    </a>
    <a href="https://www.noaa.gov/">
      <img src={NOAALogo} alt="NOAA Logo" height={60} width={60} />
    </a>
    <a href="https://scripps.ucsd.edu/">
      <img src={SIOLogo} alt="SIO Logo" height={60} width={60} />
    </a>
    <br />
    <small>This web site and all other CCHDO (CLIVAR and Carbon Hydrographic Data Office) activities are supported by the National Science Foundation and the National Oceananic and Atmospheric Administration. Any opinions, findings, and conclusions or recommendations expressed in this web site are those of the PI, James Swift, and the CCHDO and do not necessarily reflect the views of the supporting Federal agencies.</small>
    <br />
    <small>THE NOAA ® EMBLEM IS A REGISTERED TRADEMARK OF THE U.S. DEPARTMENT OF COMMERCE, USED WITH PERMISSION. THE USE OF THE NOAA EMBLEM RECOGNIZES THE COLLABORATIVE RESEARCH PARTNERSHIP BETWEEN THE INSTITUTE AND NOAA AND DOES NOT CONSTITUTE ENDORSEMENT BY THE DEPARTMENT OF COMMERCE/NATIONAL OCEANIC AND ATMOSPHERIC ADMINISTRATION OF THE INFORMATION, PRODUCTS, OR SERVICES CONTAINED THEREIN THAT WERE NOT DEVELOPED IN PARTNERSHIP WITH NOAA.</small>
    </div>
  )
}

function CCHDONav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
        <img
        src={CCHDOLogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />{' '}
        CCHDO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Find Data" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Map Search</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Arctic Ocean Data</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Atlantic Ocean Data</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Pacific Ocean Data</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Indian Ocean Data</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Southern Ocean Data</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">GO-SHIP Data</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">SOCCOM Data</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">USHYDRO Data</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">WOCE Data</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">DIMES Data</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">ELLETT Data</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Project Carina Data</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">HOT Data</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">BATS Data</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Advanced Search</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Submit Data</Nav.Link>
          <NavDropdown title="Information" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">How to Cite</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Manuals and Policy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">File Formats and Parameters</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Feature Requests and Bugs</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">User Login</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
            <InputGroup>
              <Typeahead options={thData.typeahead} maxResults={10} minLength={1} />
              <InputGroup.Append>
              <Button variant="outline-primary">Search</Button>
              </InputGroup.Append>
            </InputGroup>
        </Form>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

function App() {
  return (
    <div>
    <CCHDONav />
    <Container>
      <Row></Row>
      <Row>
        <Col><HomeWelcome /></Col>
      </Row>
      <Row>
        <Col sm><HomeSearch /></Col>
        <Col sm><HomeStartHere /></Col>
      </Row>
      <Row>
        <Col>
          <HOMEFooter />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
