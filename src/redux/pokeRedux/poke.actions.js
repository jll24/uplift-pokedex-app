import { LOAD_DATA_REQUEST,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE,
    LOAD_POKE_REQUEST,
    LOAD_POKE_SUCCESS,
    LOAD_POKE_FAILURE
                       } from "./poke.actionTypes";

import Axios from 'axios'


export const loadData = () =>{
return async (dispatch) =>{
   try{
       dispatch({type: LOAD_DATA_REQUEST})
    //    let dataURL = `https://pokeapi.co/api/v2/pokemon`
       let dataURL = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`
       let response = await Axios.get(dataURL)
       dispatch({type: LOAD_DATA_SUCCESS, payload: response.data})
   }
   catch(error){
       dispatch({type: LOAD_DATA_FAILURE, payload:error})
   }
}
}



// loading poke data

export const loadPokeName = (pokemonName) =>{
    return async (dispatch) =>{
       try{
           console.log('I am back here: '+ pokemonName)
           dispatch({type: LOAD_POKE_REQUEST})
           console.log('I am back here2: '+ pokemonName)
           let dataURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
           let response = await Axios.get(dataURL)
           dispatch({type: LOAD_POKE_SUCCESS, payload: response.data})
       }
       catch(error){
           dispatch({type: LOAD_POKE_FAILURE, payload:error})
       }
    }
    }