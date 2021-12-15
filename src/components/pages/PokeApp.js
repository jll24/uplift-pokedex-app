import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadData } from "../../redux/pokeRedux/poke.actions";
import { POKE_KEY } from "../../redux/pokeRedux/poke.reducer";

const PokeApp = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  },[]);

  // view store
  let viewPoke = useSelector((state) => {
    return state[POKE_KEY];
  });
  return (
    <div>
      {/* <pre>{JSON.stringify(viewPoke)}</pre> */}
      <div className="card">
        <div className="card-header centered">
          <h5>THE POKEDEX APP</h5>
        </div>

        <div className="card-body">
          <div className="pokeContainer">
            {viewPoke.data.length === 0 ? null : (
              <React.Fragment>
                {viewPoke.data.results.map((item) => {
                  return (
                    <div key={item.name} >
                      <div className="pokeItem">
                        <div className="pokeNameContainer centered">
                          <p>{item.name}</p>
                        </div>
                        <div className="viewImageContainer centered">
                        <Link to={`/details/${item.name}`}><p>View Image</p></Link> 
                        </div>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>


      
     
  
  );
};

export default PokeApp;