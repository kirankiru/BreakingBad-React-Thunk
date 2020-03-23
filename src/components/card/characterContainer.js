import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 300px;
    background-color: #093009;
    border: 1px solid black;
    margin-left: 1px;
    margin-right: 3px;
    margin-bottom: 5px;
`;

const CharacterImg = styled.img`
    width: 300px;
`;

const CharacterName = styled.div `
    padding: 20px;
    color: white;
    font-size: 18px;
    text-align: center;
`;

const CharacterSmallText = styled.div `
    color: white;
    font-size: 16px;
    padding: 10px;
    text-align: left;
`;

const CharacterContainer = (props) => {
    return (
        <Container>
            <div>
                <CharacterImg src={props.img}></CharacterImg>
                <CharacterName>{props.name}</CharacterName>
                <CharacterSmallText> Nickname:  {props.nickName}</CharacterSmallText>
                <CharacterSmallText> Occupation: {props.occupation} </CharacterSmallText>
            </div>
        </Container>
    );
}

export default CharacterContainer;