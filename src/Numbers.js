import React from 'react';



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
    this.generateArray(ev.target.value,this.state.b)
    this.setState({a:ev.target.value});
}
bFieldValueChangeHandler(ev)
{
    console.log("Value changed b:"+ev.target.value)
    this.generateArray(this.state.a,ev.target.value)
    this.setState({b:ev.target.value});
    
}

generateArray(a,b)
{
    document.getElementById('listID').innerHTML = ""
    a=parseInt(a)
    b=parseInt(b)
    if(a<b&&a>0)
    {
        var array=new Array()
        var i=a+1
        var j
        for(j=0;j<b-a-1;i++,j++)
        {
            array[j]=i;
        }

        array.forEach(element=>document.getElementById('listID').innerHTML += "<li>"+element+"</li>")
    }
    
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
       <ul id="listID"/>
        </div>
    );
  }
}

export default Numbers