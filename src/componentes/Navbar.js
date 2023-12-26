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
        </div>
    )
}

export default Navbar