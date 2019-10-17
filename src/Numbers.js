import React from 'react';

var handler=()=>{
    console.log("This text comes from arrow function outside the class")
}


class Numbers extends React.Component {
 
constructor(props)
{
super(props);
this.state={
    a:0,
   b:0
}

this.aFieldValueChangeHandler=this.aFieldValueChangeHandler.bind(this)
this.bFieldValueChangeHandler=this.bFieldValueChangeHandler.bind(this)

}
aFieldValueChangeHandler(ev)
{
    console.log("Value changed a:"+ev.target.value)
    this.setState({a:ev.target.value},(nextState)=>(console.log()));
}
bFieldValueChangeHandler(ev)
{
    console.log("Value changed b:"+ev.target.value)
    this.setState({b:ev.target.value},(nextState)=>(console.log()));
}
  render() {
    return (
        <div>
        <label>Number a: </label>
        <input type="number" onChange={this.aFieldValueChangeHandler} />
       <br/>
       <br/>
       <label>Number b: </label>
       <input type="number" onChange={this.bFieldValueChangeHandler} />
        </div>
    );
  }
}

export default Numbers