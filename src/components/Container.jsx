export const Container = ({pokemon, nombre})=>{
    return(
        <>
         <h1 className='fst-italic text-nowrap m-2 p-3 text-center fs-4 p-3 mb-2 bg-primary text-white'>{nombre?`Pokemon: ${nombre}`: "Ingresa el nombre del Pokemon"}</h1>
            <div className="card d-flex justify-content-center p-3 mb-2 bg-danger text-white">
                <div className="d-flex justify-content-center">
                    <h5 className="card-title">Normal</h5>
                <img src={pokemon.sprite} className="card-img-top border border-4 rounded-top ms-2 w-25" alt="..." />
                <img src={pokemon.spriteShiny} className="card-img-top border border-4 rounded-top ms-2 w-25" alt="..." />
                    <h5 className="card-title">Shiny</h5>
                </div>
                <div className="card-body container align-self-stretch">
                    <div className="text-start me-auto p-2">
                        <h5 className="card-title">Pokedex Id: {pokemon.id}</h5>
                        <h5 className="card-title">Nombre: {pokemon.nombre}</h5>
                        {pokemon.length != 0 && pokemon.type.map(({type, slot})=>(
                            <h5 key={slot} className="card-title">Tipo:{type.name}</h5>
                        ))}
                    </div>
                    <div className="text-end me-auto p-2">
                        {pokemon.length != 0 && pokemon.estad.map(({stat, base_stat})=>(
                            <h5 className="card-title">{stat.name}: {base_stat}</h5>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}