import React, { Component } from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
    text-align: center;`;

const Logo = styled.img`
    width: 200px;
    margin-top: 2%;
`;    

class App extends Component {
  render() {
    return (
      <AppWrapper>
         <Logo src="/breaking_bad_logo.png"/>
      </AppWrapper>
    );
  }
}

export default App;
