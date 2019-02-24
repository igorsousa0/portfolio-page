import React, { Component } from 'react';
import './Taskboard.css'

export default class SideCard extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                            <div className="card-body">
                                <h5 className="card-title">Sobre mim</h5>
                                <p className="card-text">Meu nome é Igor de Sousa Oliveira e atualmente estudante
                                no curso de sistemas de informação na Universidade 7 de Setembro. Comecei
                        aprendendo Java no curso a distância chamado <a href="http://projetolead.com.br">
                                        Projeto Lead</a> oferecido pela Dell. Apartir de então, fui aprendendo na Universidade
                        o uso do HTML, CSS e JavaScript. Aprendi a usar React e logo depois, Angular 6 e
                        Bootstrap e usei Angular 6 e Bootstrap para um projeto junto com um professor da Universidade no intuito de melhorar o
                        sistema de reservas da Universidade em um aplicação Web. Pretendo fazer papel de Desenvolvedor, atualmente, 
                        a procura de estágio para aprimorar meus conhecimentos.
                    </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                            <div className="card-body">
                                <h5 className="card-title">Experiências</h5>
                                <p className="card-text">HTML - Intermédiario<br/>
                                CSS - Intermédiario<br/>
                                JavaScript - Intermédiario<br/>
                                Java - Intermédiario<br/>
                                Angular - Iniciante<br/>
                                React - Iniciante
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}