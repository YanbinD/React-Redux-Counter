import React from 'react'
import { connect } from 'react-redux'// connect the component to the store 

class Counter extends React.Component {
  
    render() {

      return (
        <div>
          <h2>Counter</h2>
          <div>
            <button onClick={this.props.onDecrementClick}>-</button>
              {this.props.count}
            <button onClick={this.props.onIncrementClick}>+</button>
          </div>
        </div>
      )
    }
  }

  function mapStateToProps (state) {
      return {
          count : state.count
      };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      onIncrementClick : () => {
        dispatch({
          type: 'INCREMENT_COUNTER'
        })
      },
      onDecrementClick : () => {
        dispatch({
          type: 'DECREMENT_COUNTER'
        })
      }
    }
  } 

  export default connect(mapStateToProps,mapDispatchToProps)(Counter);