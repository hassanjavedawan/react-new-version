/** @format */


import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg '>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img
              src='https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png'
              alt='Logo'
              width='50'
              className='d-inline-block align-text-top'
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarText'>
            <ul className='navbar-nav m-auto mb-2 '>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Features
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Pricing
                </a>
              </li>
            </ul>
            <span className='navbar-text'>
              <button>App</button>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
