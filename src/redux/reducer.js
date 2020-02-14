import {BEGIN_BREAKING_BAD_CHARACTERS_FETCH} from './actions';

const initialState = {
    breakingBadCharacters: [{
        name: 'Mike Ermhantraut',
        nickName: 'Mike',
        occupation: 'Assasin'
    },
    {
        name: 'Mike Ermhantraut',
        nickName: 'Mike',
        occupation: 'Assasin'
    }]
}

const reducer = (state = initialState, action) => {
    console.log('ca;lled',state, action);
    switch(action.type) {
        case BEGIN_BREAKING_BAD_CHARACTERS_FETCH: 
            let temp = state.breakingBadCharacters;
            temp.push({
                name: 'Mike Ermhantraut',
                nickName: 'Mike',
                occupation: 'Assasin'
            });
        return {
            breakingBadCharacters: temp
        }
        default: return state;
    }
}

export default reducer;