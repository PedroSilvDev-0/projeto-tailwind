import Logo from './images/logo.svg'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return(
        <div>
            <div className='flex justify-between bg-blue-500 h-16'>
                <div className='flex items-center ml-2'>
                    <a className='flex items-center' href="https://react.dev/">
                        <img src={Logo} alt='Error!' className='w-16'/>
                        <h1 className='text-base text-bluelogo font-bold'>React.js</h1>
                    </a>
                </div>
                <ul className='text-base font-bold flex items-center bg-blue-500'>
                    <li className="bg-blue-500 text-bluelogo flex items-center justify-center w-32 h-16 border-b-4 border-b-bluelogo"> <Link to="/">Home</Link> </li>
                    <li className="bg-blue-500 text-gray-100 hover:text-bluelogo flex items-center justify-center w-32 h-16 hover:border-b-4 border-bluelogo ml-2"> <Link to="/sobre">Sobre</Link> </li>
                    <li className="bg-blue-500 text-gray-100 hover:text-bluelogo flex items-center justify-center w-32 h-16 hover:border-b-4 border-bluelogo ml-2"> <Link to="/contato">Contato</Link> </li>
                </ul>
            </div>

            <section className='flex justify-center mt-64 mb-64'>
                <div className='grid justify-items-center'>
                    <img className='w-64' src={Logo} alt='Error'/>
                    <h1 className='text-white font-bold text-6xl mb-6'>React</h1>
                    <h3 className='text-white font-bold text-3xl'>A biblioteca para interfaces de usuário web e nativas</h3>

                    <h3 className='bg-blue-500 text-gray-100 hover:text-bluelogo flex items-center justify-center p-6 '>Componentes-React</h3>
                    <h3 className='bg-blue-500 text-bluelogo hover:text-gray-100 flex items-center justify-center p-6'>Fale Comigo</h3>
                </div>
            </section>

            <div className='grid grid-flow-col m-10'>
                <div className='w-64 h-64 bg-bluelogo'>Hello</div>
                <div className='w-64 h-64 bg-bluelogo'>Hello2</div>
            </div>
        </div>
    )
}

export default Navbar