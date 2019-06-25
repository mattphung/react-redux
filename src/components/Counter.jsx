import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from "../actions/";

class Counter extends Component {
    
    // Please note that the props are automatically injected by the connect component from react-redux
    // That is why you can call this.props.incrementCount as a function. Even though the incrementCount action
    // is an object. Connect sprinkles magic dust onto the action and converts them to functions.
    render() { 

        //
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

//this maps the state from the store to the props
// in this case, the counterReducer is renamed to countMatty in the combinedReducer file
// and then mapped to countBlakie for the props
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