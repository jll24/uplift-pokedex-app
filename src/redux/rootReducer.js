import { pokeReducer, POKE_KEY } from './pokeRedux/poke.reducer'
import {combineReducers} from 'redux'


let rootReducer = combineReducers({
    [POKE_KEY]: pokeReducer
})

export {rootReducer}