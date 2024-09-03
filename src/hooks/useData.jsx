import { useState } from "react"
import { reqPoke } from "../service/Pokedata"

export const useData = () =>{

    const [pokemon, setpokemon] = useState([])
    const [nombre, setNombre] = useState("")

    const handlePokemon = (e, nombre)=>{
        e.preventDefault()
        reqPoke(nombre).then((pokemons) => {
            setpokemon(pokemons)
        })
        setNombre(nombre)
    }

    return{
        handlePokemon,
        pokemon,
        nombre
    }
}