export const FETCH_BREAKING_BAD_CHARACTERS = "fetch_breaking_bad_characters";
export const FETCH_BREAKING_BAD_CHARACTERS_FAILURE = "fetch_breaking_bad_characters_failure";
export const BEGIN_BREAKING_BAD_CHARACTERS_FETCH = "begin_breaking_bad_characters";

export const fetchBreakingBadCharacterBegins = () => {
   return {
    type: BEGIN_BREAKING_BAD_CHARACTERS_FETCH
    }
}

export const onFetchingBreakingBadCharacters = (data) => {
    return {
     type: FETCH_BREAKING_BAD_CHARACTERS,
     data: data
     }
 }

 export const onFetchingBreakingBadCharactersFail = () => {
    return {
     type: FETCH_BREAKING_BAD_CHARACTERS_FAILURE
     }
 }


export const fetchBreakingBadCharacters = () => {
    return dispatch => {
        dispatch(fetchBreakingBadCharacterBegins);
        fetch("https://www.breakingbadapi.com/api/characters?limit=10&offset=0")
                .then(resp => resp.json())
                .then(resp => {
                    dispatch(onFetchingBreakingBadCharacters(resp));
                })
                .catch(err => {
                    dispatch(onFetchingBreakingBadCharactersFail());
                });
    };
}
