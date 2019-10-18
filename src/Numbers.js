import React from 'react';



class Numbers extends React.Component {
 
constructor(props)
{
super(props);
this.state={
    a:0,
   b:0
}
this.counter=1;
this.array=new Array

this.aFieldValueChangeHandler=this.aFieldValueChangeHandler.bind(this)
this.bFieldValueChangeHandler=this.bFieldValueChangeHandler.bind(this)
this.processArray=this.processArray.bind(this)

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
        this.array=[]
        var i=a+1
        var j
        for(j=0;j<b-a-1;i++,j++)
        {
            this.array[j]=i;
        }

        this.array.forEach(element=>document.getElementById('listID').innerHTML += "<li>"+element+"</li>")
    }
    
}

processArray()
{
    document.getElementById('processArrayID').innerHTML = ""
   var myArray=Array.from(this.array, element => Math.sqrt(element))
    myArray.forEach(element=>document.getElementById('processArrayID').innerHTML += "<li>"+element+"</li>")
}

  render() {
      console.time("render - "+this.counter.toString())
    const content=(
        <div>
        <label>Number a: </label>
        <input type="number" onChange={this.aFieldValueChangeHandler} />
       <br/>
       <br/>
       <label>Number b: </label>
       <input type="number" onChange={this.bFieldValueChangeHandler} />
       <ul id="listID"/>
       <button onClick={this.processArray}>Process array</button>
        <ul id="processArrayID"></ul>
        </div>
    )
    console.timeEnd("render - "+this.counter.toString())
    this.counter++;
    return content

  }
}

export default Numbers