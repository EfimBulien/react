import React from 'react';
import logo from '../images/logo.png';

class Header extends React.Component{
    render(){
        return(
        <header>
            <img src={logo} alt="PS5 Логотип"></img>
            <nav>
                <ul>
                    <li><a href="/">Главная страница</a></li>
                    <li><a href="/">Игровая библиотека</a></li>
                    <li><a href="/">Техническая поддержка</a></li>
                    <li><a href="/">Контакты</a></li>
                </ul>
            </nav>
        </header>
        )
    }
}

export default Header;
