import React, {useReducer} from 'react'

const initialState = 0;

function reducer (state, action) {

    switch (action) {

        case 'INCREMENT' :
            return state + 1;

        case 'DECREMENT' :
            return state - 1;

        case 'RESET' :
            return initialState;

        default :
            return state;

    }

}

export default function Compteur() {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch('INCREMENT')}>Incrémente</button>
            <button onClick={() => dispatch('DECREMENT')}>Décrémente</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </div>
    )
}
