/* this action populates the store with the data fetched from the API */

import {RECEIVE_COCKTAILS} from './actionTypes';

export default function receiveCocktails(cocktailsJson, requestId) {
    // if cocktailsJson.drinks is null, it means that no results where obtained, so we transform this answer
    // to an empty list
    const drinks = (cocktailsJson.drinks !== null) ? cocktailsJson.drinks : [];
    return {
        type: RECEIVE_COCKTAILS,
        requestId,
        cocktails: {
            byId: drinks.reduce(
                (cocktailsById, drink) => Object.assign(cocktailsById,
                    {
                        [drink.idDrink]:
                            {
                                cocktail: drink.strDrink,
                                picURL: drink.strDrinkThumb,
                            },
                    }),
                {}
            ),
            allIds: drinks.map(cocktail => cocktail.idDrink),
        },
    };
}
