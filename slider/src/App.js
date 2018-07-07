import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
            <SayFullName name="Илья" surname="Кудряшов" link="https://shop-mpkursus.ru"/>
            <SayFullName name="Вася" surname="Кудряшов" link="https://shop-mpkursus.ru"/>
            <SayFullName name="Петя" surname="Кудряшов" link="https://shop-mpkursus.ru"/>
      </div>
    );
  }
}

function Hello() {
  let phrase = "World!"
  return (
            <h1>Hello {phrase}</h1>
    )
}

function SayFullName(props) {
    return (
            <div>
            <h1>Моё имя {props.name}, фамилия - {props.surname}</h1>
            <a href={props.link}> Ссылка на мой профиль </a>
            </div>
      )
}

function MeetAll() {
    return (
            <div>
            <SayFullName name="Илья" surname="Кудряшов" link="https://shop-mpkursus.ru"/>
            <SayFullName name="Вася" surname="Кудряшов" link="https://shop-mpkursus.ru"/>
            <SayFullName name="Петя" surname="Кудряшов" link="https://shop-mpkursus.ru"/>
            </div>
      )

}

const element = <SayFullName name="Илья" surname="Кудряшов" link="https://shop-mpkursus.ru"/>

export default App;
