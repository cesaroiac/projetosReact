import Button from "./eventos/Button"

function Evento({numero}){

    function meuEvento(){
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento(){
        console.log(`Ativando o segundo evento!`)
    }

    return(
        <div>
            <p>Clique para disaprar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </div>
    )

}

export default Evento