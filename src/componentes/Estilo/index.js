import Colaborador from '../colaborador'
import './estilo.css'

const Estilo =(props) => {


    
    const css = {backgroundImage: `url(${props.corSecundaria})`}

    function deletarColaborador(colaborador){
        const colaboradoresFiltrados = props.colaboradores.filter((el)=>el.banda !== colaborador.banda)
        props.setColaboradores(colaboradoresFiltrados)
    }
    return (

       (props.colaboradores.length > 0 ) ? <section className='estilo' style={css}>
            
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>

            {props.colaboradoresfiltrados
            .map((colaborador) => <Colaborador onDelete={()=>deletarColaborador(colaborador)} corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} banda={colaborador.banda} imagem={colaborador.imagem} />)}
           

            </div>



        </section>
        :''

    )


}

export default Estilo