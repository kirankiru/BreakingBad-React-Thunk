import {BEGIN_BREAKING_BAD_CHARACTERS_FETCH, FETCH_BREAKING_BAD_CHARACTERS_FAILURE, FETCH_BREAKING_BAD_CHARACTERS} from './actions';


Array.prototype.createBreakingBadCharacters = function() {
    return this.map(val => {
        return { id: val.char_id, nickName: val.nickname,name: val.name, img: val.img,occupation: val.occupation }
    });
}

const initialState = {
    breakingBadCharacters: [],
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    console.log('ca;lled',state, action);
    switch(action.type) {
        case BEGIN_BREAKING_BAD_CHARACTERS_FETCH: 
        return {
           ...state,
           loading: true
        }
        case FETCH_BREAKING_BAD_CHARACTERS:
            return {
                ...state,
                loading: false,
                breakingBadCharacters: action.data.createBreakingBadCharacters() // immutability
            }
        case FETCH_BREAKING_BAD_CHARACTERS_FAILURE: 
            return {
                ...state,
                loading: false,
                error: true
            }
        default: return state;
    }
}

export default reducer;