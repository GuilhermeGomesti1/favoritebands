import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
const Formulario = (props) => {

    const estilos =[
        'Black Music',
        'Blues',
        'Classic Rock',
        'CLássico',
        'Country',
        'Dance',
        'Eletronica',
        'Emocore',
        'Folk',
        'Funk',
        'Gótico',
        'Grunge',
        'Hard Rock',
        'Hardcore',
        'Heavy Metal',
        'Hip Hop',
        'Indie',
        'Industrial',
        'Instrumental',
        'Jazz',
        'Metal',
        'MPB',
        'Pop Rock',
        'Progressivo',
        'Punk Rock',
        'Reggae',
        'Rock',





    ]
   
 
     const [banda, setBanda] = useState('')
     const [imagem, setImagem] = useState('')
     const [estilo, setEstilo] = useState('')
     




    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
           
            banda,
            estilo,
            imagem


        })
        
        setBanda('')
        setImagem('')
        setEstilo('')

    }
    return (

        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um card musical</h2>
                

                <CampoTexto obrigatorio={true} label="Banda" placeholder="Digite uma banda favorita para adicionar"
                valor={banda} 
                aoAlterado={valor => setBanda(valor)}
                />
                
                <ListaSuspensa  obrigatorio={true} 
                label="Estilo "
                itens={props.estilos}
                valor={estilo}
                aoAlterado={valor => setEstilo(valor)}
                />
                
                <CampoTexto  label="Imagem" placeholder="Cole o endereço de imagem da banda"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)} />
                <Botao>
                    Criar card
               
                </Botao> 

            </form>

        </section>


    )


}
export default Formulario