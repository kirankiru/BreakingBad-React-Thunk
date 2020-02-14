import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CharacterContainer from '../card/characterContainer';
import store from '../../redux/store';
import {BEGIN_BREAKING_BAD_CHARACTERS_FETCH} from  '../../redux/actions';

const Container = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-items: flex-start;
    flex-wrap: wrap;
`;

const BreakingBad = (props) => {


    //store.dispatch({type: BEGIN_BREAKING_BAD_CHARACTERS_FETCH});

    const handleClick = () => {
        alert("Button clicked");
    }

    return (
        /*<Container>
              <CharacterContainer name={'Mike Ermhantraut'} nickName={'Mike'} occupation={'Assasin'} />
              <CharacterContainer name={'Mike Ermhantraut'} nickName={'Mike'} occupation={'Assasin'} />
              <CharacterContainer name={'Mike Ermhantraut'} nickName={'Mike'} occupation={'Assasin'} />
              <CharacterContainer name={'Mike Ermhantraut'} nickName={'Mike'} occupation={'Assasin'} />
              <CharacterContainer name={'Mike Ermhantraut'} nickName={'Mike'} occupation={'Assasin'} />
              <CharacterContainer name={'Mike Ermhantraut'} nickName={'Mike'} occupation={'Assasin'} />
              <CharacterContainer name={'Mike Ermhantraut'} nickName={'Mike'} occupation={'Assasin'} />
              <CharacterContainer name={'Mike Ermhantraut'} nickName={'Mike'} occupation={'Assasin'} />
              <CharacterContainer name={'Mike Ermhantraut'} nickName={'Mike'} occupation={'Assasin'} />
              <CharacterContainer name={'Mike Ermhantraut'} nickName={'Mike'} occupation={'Assasin'} />
        </Container>*/
        <div>
            <button onClick={handleClick}>Click to get Breaking bad characters</button>
            <Container>
                {
                    props.breakingBadCharacters.map(val => {
                        return (
                            <CharacterContainer name={val.name} nickName={val.nickName} occupation={val.occupation} />
                        )
                    })
                }
            </Container>
        </div>

    );
}


function mapStateToProps(state) {
    console.log(state);
    return {
        breakingBadCharacters: state.breakingBadCharacters
    };
}

export default connect(mapStateToProps)(BreakingBad);