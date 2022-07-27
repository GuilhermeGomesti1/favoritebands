


import { useState } from 'react';
import Banner from './componentes/Banner';
import Estilo from './componentes/Estilo';
import Formulario from './componentes/Formulario';
import bm from './imagens/blackmusic1.jpg'
import blues from './imagens/blues.jpg'
import rockclassico from './imagens/rockclassico.jpeg'
import musicaclassica from './imagens/musicaclassica.jpg'
import Country from './imagens/country.jpg'
import dance from './imagens/dance.jpg'
import eletronica from './imagens/eletronica.jpg'
import emocore from './imagens/emocore.jpg'
import folk from './imagens/folk.jpeg'
import funk from './imagens/funk.jpg'
import gotico from './imagens/gotico.jpg'
import grunge from './imagens/grunge.jpg'
import hardrock from './imagens/hardrock.jpg'
import hardcore from './imagens/hardcore.jpg'
import heavymetal from './imagens/heavymetal.jpg'
import hiphop from './imagens/hiphop.jpg'
import indie from './imagens/indie.jpg'
import indu from './imagens/indu.jpg'
import instrumental from './imagens/instrumental.jpg'
import jazz from './imagens/jazz.png'
import mpb from './imagens/mpb.jpg'
import poprock from './imagens/poprock.jpeg'
import progressivo from './imagens/progressivo.jpg'
import punk from './imagens/punk.jpg'
import reggae from './imagens/reggae.jpg'
import rock from './imagens/rock.jpeg'

function App() {
  const estilos = [
    {
      nome: 'Black Music',
      corPrimaria: '#F1B88D',
      corSecundaria: bm,


    },
    {
      nome: 'Blues',
      corPrimaria: '#CA581F',
      corSecundaria: blues,

    },
    {
      nome: 'Classic Rock',
      corPrimaria: 'gray',
      corSecundaria: rockclassico,

    },
    {
      nome: 'CLássico',
      corPrimaria: '#E4DAAE',
      corSecundaria: musicaclassica,

    },
    {
      nome: 'Country',
      corPrimaria: '#C47F48',
      corSecundaria: Country

    },
    {
      nome: 'Dance',
      corPrimaria: 'pink',
      corSecundaria: dance

    },
    {
      nome: 'Eletronica',
      corPrimaria: '#EC71E6',
      corSecundaria: eletronica

    },
    {
      nome: 'Emocore',
      corPrimaria: 'black',
      corSecundaria: emocore

    },
    {
      nome: 'Folk',
      corPrimaria: '#822114',
      corSecundaria: folk

    },
    {
      nome: 'Funk',
      corPrimaria: '#775FB0',
      corSecundaria: funk

    },
    {
      nome: 'Gótico',
      corPrimaria: '#0F0E13',
      corSecundaria: gotico

    },
    {
      nome: 'Grunge',
      corPrimaria: '#4E100C',
      corSecundaria: grunge

    },
    {
      nome: 'Hard Rock',
      corPrimaria: '#94331F',
      corSecundaria: hardrock

    },
    {
      nome: 'Hardcore',
      corPrimaria: 'red',
      corSecundaria: hardcore

    },
    {
      nome: 'Heavy Metal',
      corPrimaria: '#F7F7F7',
      corSecundaria: heavymetal

    },
    {
      nome: 'Hip Hop',
      corPrimaria: '#F3AA37',
      corSecundaria: hiphop

    },
    {
      nome: 'Indie',
      corPrimaria: '#4F5C2F',
      corSecundaria: indie

    },
    {
      nome: 'Industrial',
      corPrimaria: '#BCF6D4',
      corSecundaria: indu

    },
    {
      nome: 'Instrumental',
      corPrimaria: '#2C4259',
      corSecundaria: instrumental

    },
    {
      nome: 'Jazz',
      corPrimaria: '#F5832A',
      corSecundaria: jazz

    },
    {
      nome: 'Metal',
      corPrimaria: '#F7F7F7',
      corSecundaria: heavymetal


    },
    {
      nome: 'MPB',
      corPrimaria: '#775F97',
      corSecundaria: mpb

    },
    {
      nome: 'Pop Rock',
      corPrimaria: 'black',
      corSecundaria: poprock

    },
    {
      nome: 'Progressivo',
      corPrimaria: '#E03E20',
      corSecundaria: progressivo


    },
    {
      nome: 'Punk Rock',
      corPrimaria: 'red',
      corSecundaria: punk

    },
    {
      nome: 'Reggae',
      corPrimaria: 'yellow',
      corSecundaria: reggae

    },
    {
      nome: 'Rock',
      corPrimaria: 'black',
      corSecundaria: rock

    },


  ]



  /*const imgDelete = document.createElement('colaborador')
imgDelete.src= '.bi bi-trash-fill'
imgDelete.setAttribute("onclick","colaborador.deletar()")*/

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    localStorage.setItem('colaboradores',JSON.stringify([...colaboradores, colaborador]))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario estilos={estilos.map(estilo => estilo.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)
      } />

      {estilos
      .filter(est=>
        colaboradores.some(col=>est.nome === col.estilo ))
      .map(estilo => <Estilo
        key={estilo.nome}
        nome={estilo.nome}
        corPrimaria={estilo.corPrimaria} 
        colaboradoresfiltrados={colaboradores.filter(col=>col.estilo===estilo.nome)}
        colaboradores={colaboradores}
        corSecundaria={estilo.corSecundaria}
        setColaboradores={setColaboradores}
        
        
      />

      )

      }


    </div>



  );


  //deletar() {
  // alert('deletar');
  //}
}

export default App;
