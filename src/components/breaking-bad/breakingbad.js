import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CharacterContainer from '../card/characterContainer';
import store from '../../redux/store';
import {BEGIN_BREAKING_BAD_CHARACTERS_FETCH, fetchBreakingBadCharacterBegins,fetchBreakingBadCharacters} from  '../../redux/actions';

const Container = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-items: flex-start;
    flex-wrap: wrap;
`;

const Btn = styled.button`
    width: 100%;
    padding: 1%;
    font-size: 20px;
    background-color: #093009;
    color: white;
`;

const BreakingBad = (props) => {

    const handleClick = () => {
        store.dispatch(fetchBreakingBadCharacters());
    }

    return (
        <div>
            <Btn onClick={handleClick}>
                Click to get Breaking bad characters
            </Btn>
            
            { props.loading && <p>Loading ....</p> }
            {!props.loading && !props.error &&
            <Container>
                {
                    props.breakingBadCharacters.map((val, index) => {
                        return (
                            <CharacterContainer key={index} img={val.img} name={val.name} nickName={val.nickName} occupation={val.occupation} />
                        )
                    })
                }
            </Container> }
            {!props.loading && props.error && <p> Somr=eething went wrong </p>}
        </div>
    );
}


function mapStateToProps(state) {
    return {
        breakingBadCharacters: state.breakingBadCharacters
    };
}

export default connect(mapStateToProps)(BreakingBad);