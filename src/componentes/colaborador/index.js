import './colaborador.css'




const Colaborador = ({nome, imagem, banda, corDeFundo,onDelete}) => {
    return (
        <div className='colaborador'>
               <div className='cabecalho' style={ {backgroundColor: corDeFundo }}>
                    <img src={imagem} alt={nome} />
            
                </div>

                <div className='rodape'>
                    <h4>{nome}</h4>
                    <h5>{banda}</h5>
                    <div onClick={onDelete}>

                        
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
                    </div>
            
                </div>
               


        </div>
     

    )
  

}

export default Colaborador
