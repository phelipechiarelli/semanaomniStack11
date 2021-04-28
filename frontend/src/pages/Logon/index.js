import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg'

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="Be the hero" />
            <form>
                <h1>logon</h1>
                <input placeholder="Sua ID"/>
                <button className="button" type="submit">Entrar</button><br></br>
                <a href="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho cadastro
                </a>
            </form>
            </section>

            <img className="heroesImg" src={heroesImg} alt="Heroes"/>
        </div>

    )
}