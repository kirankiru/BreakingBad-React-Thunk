export const FETCH_BREAKING_BAD_CHARACTERS = "fetch_breaking_bad_characters";
export const FETCH_BREAKING_BAD_CHARACTERS_FAILURE = "fetch_breaking_bad_characters_failure";
export const BEGIN_BREAKING_BAD_CHARACTERS_FETCH = "begin_breaking_bad_characters";

export const fetchBreakingBadCharacterBegins = () => {
   return {
    type: BEGIN_BREAKING_BAD_CHARACTERS_FETCH
    }
}

export const fetchBreakingBadCharacters = () => {
    return dispatch => {
        dispatch(fetchBreakingBadCharacterBegins);
        return fetch("https://www.breakingbadapi.com/api/characters")
                .then(resp => resp.json())
                .then(resp => {
                    console.log(resp);
                })
                .catch(err => {
                    console.log(err);
                });
    };
}
