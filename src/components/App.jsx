
import { useData } from "../hooks/useData"
import { Container } from "./Container"
import { Search } from "./Search"

export const App = () =>{
    const {pokemon, handlePokemon, nombre} = useData()
    return(
    <>
            <Search handlePokemon={handlePokemon}/>
            <Container pokemon={pokemon} nombre={nombre}/>
    </>
   )
}
//<img className="w-100 m-5 l-5  border border-4 rounded-top ms-2" src={sprites} alt="image"/> (e) => {handdleGif(e, categoria)}
//(e) => {setNombre(e.target.value)}