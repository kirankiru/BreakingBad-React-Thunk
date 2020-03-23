import React, { Component } from 'react';

import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';
import BreakingBad from './components/breaking-bad/breakingbad';


const AppWrapper = styled.div`
    background: gray;
`;

const LogoWrapper = styled.div`
  text-align: center;
`;

/*const TextHeaderWrapper = styled.div`
  text-align: center;
  background-color: gray;
  border:1 px solid white;
`;*/

const Logo = styled.img`
    width: 200px;
    margin-top: 2%;
`;

console.log('store: ', store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWrapper>
          <LogoWrapper>
            <Logo src="/breaking_bad_logo.png" />
          </LogoWrapper>
          <div>
            <BreakingBad></BreakingBad>
          </div>
        </AppWrapper>
      </Provider>
    );
  }
}

export default App;
