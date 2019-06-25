import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from "../actions/";

class Counter extends Component {
    
    render() { 

        return ( 
            <React.Fragment>
                <h1>{this.props.countBlakie}</h1>

                <p>
                    <button onClick={() => this.props.incrementCount() }> + </button>
                    <button onClick={() => this.props.decrementCount() }> - </button>
                </p>
            </React.Fragment>
         );

    }//render

}//Counter

const mapStateToProps = (state) => {
    return {
        countBlakie: state.countMatty //count is the name we gave it in reducers-index.jsx combine reducers
    }
}//mapStateToProps

const mapDispatchToProps = () => {
    return {
        incrementCount,
        decrementCount
    }
}//mapDispatchToProps
 
//react-redux has a function that takes mapStateToProps and mapDispatchToProps and
//returns a function that takes a component. The function will then return a new component
//of the same kind that you supplied to the function. In this case, the Counter component.
export default connect( mapStateToProps, mapDispatchToProps() )(Counter);