import React from 'react';



class Numbers extends React.Component {
 
constructor(props)
{
super(props);
this.state={
    a:0,
   b:0,
   array:[],

}



this.aFieldValueChangeHandler=this.aFieldValueChangeHandler.bind(this)
this.bFieldValueChangeHandler=this.bFieldValueChangeHandler.bind(this)

this.generateArray=this.generateArray.bind(this)

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

}



  render() {
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

        </div>
    )

    return content

  }
}

export default Numbers