class Header extends React.Component
{
    constructor(prop){
        super(prop)
        this.title="Counter";
        
    }
render(){
   
    return(
    <div>
<h1>{this.title}</h1>
    </div>
    );
}

}

class Counter extends React.Component
{

    constructor(prop){
        super(prop);
        this.state={
            count:0
        }
        this.handleAdd=this.handleAdd.bind(this);
        this.handleSubtract=this.handleSubtract.bind(this);
        this.handleReset=this.handleReset.bind(this);
    }
handleAdd(){
this.setState((prevState)=>{
   return({
count:prevState.count+1
   })
})
}
handleSubtract(){
    this.setState((prevState)=>{
        return({
     count:prevState.count-1
        })
     })
}
handleReset(){
    alert("handleReset");
}
render()
{
    return(
    <div>
<Header/>
<h1>{this.state.count}</h1>
<button onClick={this.handleAdd}>+ :</button>
<button onClick={this.handleSubtract}>- :</button>
<button onClick={this.handleReset}>resetCount:</button>
    </div>
    );

}

}

let appRoot=document.getElementById("app");
ReactDOM.render(<Counter/>,appRoot);