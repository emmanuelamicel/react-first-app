import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        console.log("Appel du constructeur")
        this.state = {
            counter: 0,
            saved: [],
            reset: 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Appel de shouldComponentUpdate (counter")
        if (nextState.counter === this.state.counter && nextState.reset === this.state.reset) {
            return false
        }
        return true
    }

    componentDidMount() {
        console.log("Appel de componentDidMount")
    }

    // Utile si on fait une recherche (mise à jour à chaque nouveau caractère)
    componentDidUpdate() {
        console.log("Appel du componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("Appel de componentWillUnmount")
    }

    render() {
        console.log("Appel de render")
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={() => this.setState(state => ({ counter: state.counter + 1 }))}>Incrémenter</button>
                <button onClick={() => this.setState(state => ({ counter: state.counter - 1 }))}>Décrémenter</button>
                <button onClick={() => this.setState(state => ({ saved: [state.counter, ...state.saved] }))}>Save Value</button>
                <button onClick={() => this.setState(state => ({ counter: state.reset }))}>Reset Counter</button>
                <ul>
                    {this.state.saved.map((number, index) => <li key={index}>{number}</li>)}
                </ul>
            </div>
        )
    }
}

export default Counter