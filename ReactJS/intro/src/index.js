import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from './Button';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import "./styles.css"

// ----------------------------------------------------------------------//

function exampleJSX() {
    return ( 
        <div className = "color">
            Wesley - ReactJs 
            <h1> Sum: { sum(10, 20) } </h1> 
        </div>
    )
}

function sum(a, b) {
    alert(a + b)
}

const App = () => {
        return ( <div className = "App" > { exampleJSX() } </div>)
        }

        //const rootElement = document.getElementById('root')
        //ReactDOM.render( <App /> , rootElement)

        // -----------------------------------------------------------------------//

        const element = 'Digital Innovation' // React Element
        const element2 = <h1> Hello!!! </h1>   // React Element

        function App2() { // React Component -> The return always between an HTML element(<div>, etc). Javascripts always between {}
            return ( // 
                <div className = "color" > 
                    { element } { element2 } 
                </div>
            )
        }

        //const rootElement = document.getElementById('root')
        //ReactDOM.render( <App2 /> , rootElement)

        // ------------------------------------------------------------------------//

        function App3() {
            return ( 
            <div className = "App">
                Hello World!
                <Button func = {() => sum(10, 20) } name = "Result" />
                <ComponentA>
                    <ComponentB>
                        <Button func = {() => sum(15, 30) } name = "Result2" />
                    </ComponentB> 
                </ComponentA> 
            </div>
            )
        }

        //const rootElement = document.getElementById('root')
        // ReactDOM.render( <App3 /> , rootElement)

        // --------------------------------------------------------------------------//

        class App4 extends Component {
            constructor(props) {
                super(props)

                this.state = {
                    clock: 1000,
                    word: 'start'
                }
            }

            changeWord = () => {
                this.setState({
                    word: 'finish'
                })
            }

            componentDidMount() { // After rendering
                window.setTimeout(() => {
                    this.setState({
                        word: 'after'
                    })
                }, 2000)

            }

            render() {
                const { clock, word } = this.state
                return ( 
                <div>
                    <h1> { clock } </h1> 
                    <button onClick = {() => this.changeWord() } > { word } </button> 
                </div>
                )
            }
        }

        const rootElement = document.getElementById('root')
        ReactDOM.render( < App3 / > , rootElement)