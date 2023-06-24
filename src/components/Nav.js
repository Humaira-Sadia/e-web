import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Button } from '../styles/Button';

const Nav = () => {
    const Nav = styled.nav`
         .navbar-lists{
         display: flex;
         gap: 4.8rem;
         align-items: center;
    
     .navbar-links{
         &:link,
         &:visited{
             display: inline-block;
             text-decoration: none;
             font-size: 1.8rem;
             font-weight: 600;
             text-transform: uppercase;
             color: ${({ theme }) => theme.colors.helper};
             transition: color 0.3s linear;
         }

         &:hover{
             color: ${({ theme }) => theme.colors.black};
         }
         &:active{
             color: ${({ theme }) => theme.colors.blue};
         }
     }
 }

    .toggle-btn{
        display: none;
        background-color: transparent;
        cursor: pointer;
        border: none;
    }

    .toggle-btn .toggle-btn--close{
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}){
        .toggle-btn{
            display: inline-block;
            z-index: 999;
            /* border: ${({ theme }) => theme.colors.black}; */

            .toggle-nav--icon{
                margin-top: -10%;
                font-size: 4.2rem;
                color: ${({ theme }) => theme.colors.helper};
            }
        }

        .active .toggle-nav--icon{
            display: none;
            font-size: 4.2rem;
            position: absolute;
            top: 30%;
            right: 10%;
            color: ${({ theme }) => theme.colors.black};
            z-index: 9999;
        
        }
        .active .toggle-btn--close{
            margin-top: 0%;
            display: inline-block;
        }

        .navbar-lists{
            width: 100vw;
            height: 80vh;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            visibility: hidden;
            opacity: 0;
            transform: translateX(100%);
            transition: all 3s linear;
        }

        .active .navbar-lists{
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
            transform-origin: right;
            transition: all 3s linear;
        }

        .navbar-links{
            font-size: 4.2rem;
        }
    }


    .cart-trolley--link{
        position: relative;
    }
    .cart-trolley{
        position: relative;
        font-size: 3.2rem;
    }

    .cart-trolley--items{
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000000;
        color: #000000;
        font-size: 1.4rem;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.blue};
    }

    button{
            padding:0.5rem 2rem 0.5rem 2rem;
            background-color: rgb(98 84 243);
            color: rgb(255 255 255);
            /* border-radius: 2rem; */
            border: none;

            &:hover,
            &:active {
                box-shadow: 0 2rem 2rem 0 rgb(132 144 255 /             30%);
                box-shadow: ${({ theme }) => theme.colors.          shadowSupport};
                transform: scale(0.96);
            }
        }
    
    `;
    const [menuIcon, setMenuIcon] = useState();
    return (
        <Nav>
            <div className={menuIcon ? "navbar active" : "navbar"}>
                <ul className='navbar-lists'>
                    <li>
                        <NavLink to='/' className='navbar-links'
                            onClick={() => setMenuIcon(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className='navbar-links'
                            onClick={() => setMenuIcon(false)}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/products' className='navbar-links'
                            onClick={() => setMenuIcon(false)}>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='navbar-links'
                            onClick={() => setMenuIcon(false)}>
                            Contact
                        </NavLink>
                    </li>

                    <button>Log in</button>

                    <li>
                        <NavLink to='/cart' className='navbar-links cart-trolley--link'
                            onClick={() => setMenuIcon(false)}>
                            <AiOutlineShoppingCart className='cart-trolley' />
                            <span className='cart-trolley--items'>10</span>

                        </NavLink>
                    </li>
                </ul>
                <div className='toggle-btn'>

                    <FaBars
                        name='menu-open' className='toggle-nav--icon toggle-btn--open'
                        onClick={() => setMenuIcon(true)} />

                    <FaTimes
                        name='menu-close' className='toggle-nav--icon toggle-btn--close'
                        onClick={() => setMenuIcon(false)} />

                </div>

            </div>
        </Nav>
    )
}

export default Nav
