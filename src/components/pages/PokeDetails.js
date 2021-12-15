import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
 import { loadPokeName } from '../../redux/pokeRedux/poke.actions'
 import { POKE_KEY } from '../../redux/pokeRedux/poke.reducer'
import {Link} from 'react-router-dom'


const PokeDetails = () => {
    let dispatch = useDispatch()

    let pokemonName = useParams().url

    // loading pokemon name
    useEffect(() => {
         dispatch(loadPokeName(pokemonName))
    }, [])


      //  view store
        let viewPoke = useSelector((state) => {
          return state[POKE_KEY];
        });

    return (
   
      <div className="detailContainer">
      <div className="detailContent centered">
        {
          Object.keys(viewPoke.pokeUrlData).length === 0? null:
          <React.Fragment>
              <h5>{pokemonName} </h5>
          <img src={viewPoke.pokeUrlData.sprites.front_default} alt="" width='200' height='200'/>
         <Link to='/' ><h5><i className="fa fa-arrow-left" ></i> BACK</h5></Link>
          </React.Fragment>
        }
             
          </div>
      </div>
    
  
  
    
     )
}

export default PokeDetails