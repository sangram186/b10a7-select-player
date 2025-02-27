
import PropTypes from 'prop-types';
import coin from '../assets/images/coin.png';
import logo from '../assets/images/logo.png'
const Header = ({balanceCoin}) => {


    


    return (
        <div className='h-[146px]'>
            <nav className='fixed top-0 w-10/12 mx-auto md:flex justify-between items-center py-4 md:py-6 z-50 bg-[#ffffff8c]'>
                <div>
                    <img className="" src={logo} alt="logo" />
                </div>
                <div>
                    <ul className="flex gap-4 md:gap-8 items-center">
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                        <li>
                            <span className='font-bold border-2 border-gray-300 rounded-xl px-3 py-2'>{balanceCoin} coin <img className='w-5 inline' src={coin} alt="" /></span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

Header.propTypes={
    balanceCoin: PropTypes.number
}

export default Header;