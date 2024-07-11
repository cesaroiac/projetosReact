import Item from "./Item"

function List(){

    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="lamborguini" ano_lancamento={1990}/>
                <Item marca="Honda" ano_lancamento={1987}/>
                <Item />
            </ul>
        </>
    )

}

export default List