import { useState } from "react"
export const Search = ({handlePokemon})=>{
    const [nombre, setNombre] = useState("")
    return(
        <>
            <div className="container ">
                <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                    <form onSubmit={(e) => {handlePokemon(e, nombre)}} className="d-flex">
                        <input type="text" className="form-control m-1 shadow bg-body-tertiary " onChange={(e) => {setNombre(e.target.value)}} />
                        <input type="submit" value={"Buscar Pokemon"} className="btn btn-outline-success"/>
                    </form>
                </div>
                <br />
            </div>
        </>
    )
}