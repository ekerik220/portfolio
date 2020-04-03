import React from 'react';

export default function Technologies() {
    return (
        <section className="technologies">
            <div>
                <h2 className="faded-text">Technologies</h2>
                <hr className="faded-text"></hr>
            </div>
            <div className="technologies__icon-container">
                <div className="technologies__icon">
                    <i className="fab fa-html5 fa-3x" style={{color: '#e34f26'}}></i>
                    <span className="faded-text">HTML5</span>
                </div>
                <div className="technologies__icon">
                    <i className="fab fa-css3-alt fa-3x" style={{color: '#264de4'}}></i>
                    <span className="faded-text">CSS</span>
                </div>
                <div className="technologies__icon">
                    <i className="fab fa-js-square fa-3x" style={{color: '#f7df1e'}}></i>
                    <span className="faded-text">Javascript</span>
                </div>
                <div className="technologies__icon">
                    <i className="fab fa-react fa-3x" style={{color: '#00d8ff'}}></i>
                    <span className="faded-text">React</span>
                </div>
                <div className="technologies__icon">
                    <i className="fab fa-bootstrap fa-3x" style={{color: '#563d7c'}}></i>
                    <span className="faded-text">Bootstrap</span>
                </div>
                <div className="technologies__icon">
                    <i className="fab fa-sass fa-3x" style={{color: '#c69'}}></i>
                    <span className="faded-text">Sass</span>
                </div>
                <div className="technologies__icon">
                    <i className="fab fa-github fa-3x"></i>
                    <span className="faded-text">Github</span>
                </div>
                <div className="technologies__icon">
                    <i className="fab fa-npm fa-3x" style={{color:'#cb3837'}}></i>
                    <span className="faded-text">npm</span>
                </div>
            </div>
        </section>
    );
}