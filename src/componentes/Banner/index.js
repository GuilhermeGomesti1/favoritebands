import { Fragment } from 'react'
import './Banner.css'
import banner from  '../../imagens/banner.jpg'
function Banner() {
    return (
       <Fragment>
           
            <header className='banner'>
            <img src={banner}></img>
            </header>
            <h1>Your favorite bands</h1>
        </Fragment>

    )

}

export default Banner