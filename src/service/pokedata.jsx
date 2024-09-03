

export  const reqPoke = async (nombre) =>{
    //const nombre = ditto
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`)
        const data = await resp.json()
        console.log(data)
        const pokemons =  {
            nombre: data.name,
            sprite: data.sprites.other['official-artwork'].front_default,
            spriteShiny: data.sprites.other['official-artwork'].front_shiny,
            type: data.types,
            id: data.id,
            estad: data.stats
        }        
        return (pokemons)
        
    } catch (err) {
        console.error(err)
    }
}