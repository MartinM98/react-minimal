import React from 'react';



class Numbers extends React.Component {
 
constructor(props)
{
super(props);
this.state={
    a:0,
   b:0,
   array:[],
   myArray:[],
   flag:false
}
this.counter=1;


this.aFieldValueChangeHandler=this.aFieldValueChangeHandler.bind(this)
this.bFieldValueChangeHandler=this.bFieldValueChangeHandler.bind(this)
this.processArray=this.processArray.bind(this)
this.generateArray=this.generateArray.bind(this)
this.processArrayFlag=this.processArrayFlag.bind(this)
}


aFieldValueChangeHandler(ev)
{

    console.log("Value changed a:"+ev.target.value)
    
    this.setState({a:ev.target.value});
    this.generateArray(ev.target.value,this.state.b)
}
bFieldValueChangeHandler(ev)
{

    console.log("Value changed b:"+ev.target.value)
   
    this.setState({b:ev.target.value});
    this.generateArray(this.state.a,ev.target.value)
    
}

generateArray(a,b)
{
    a=parseInt(a)
    b=parseInt(b)
    if(a<b&&a>0)
    {
        this.state.array=[]
        var i=a+1
        var j
        for(j=0;j<b-a-1;i++,j++)
        {
            this.state.array[j]=i;
        }
    }
    else
    {
        this.state.array=[]
    }
    if(this.state.flag)
    {
    this.processArray();
    }
}

processArray()
{

   this.state.myArray=Array.from(this.state.array, element => Math.sqrt(element))
   
}
processArrayFlag()
{
    
    this.setState({flag:true});
    this.processArray();
    
    
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
       <ul>
          {this.state.array.map(item => (
            <li key={item}>{item}</li>))}
        </ul>
       <button onClick={this.processArrayFlag}>Process array</button>
       <ul>
          {this.state.myArray.map(item => (
            <li key={item}>{item}</li>))}
        </ul>
        </div>
    )
    console.timeEnd("render - "+this.counter.toString())
    this.counter++;
    return content

  }
}

export default Numbers