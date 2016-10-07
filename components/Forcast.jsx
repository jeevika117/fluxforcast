var React = require("react");
var ReactDOM = require("react-dom");
import Store from "../stores/Store";
import FAction from "../actions/ForcastActions";
module.exports = class Forcast extends React.Component{
    constructor(){
        super();
        this.state={
            data:"tetstr",
            weather:[{weather:"initial"}]
        };
    }
    render(){
        var timewise = this.state.weather;
        var lis = timewise.map(function(item,index){
            return ((index<5)?<li>{item.dt_txt} - {item.weather[0].description}</li>:false);
        })
        return <div style={{"backgroundColor":"red","height":"200px","width":"400px"}} >{this.state.data}
            <ul>{lis}</ul>
        </div>
    }
    
  componentWillMount() {
    Store.on("change", function(){
         this.setState({
          data: Store.getAll(),
        });
    });
    FAction(function(resdata){
        this.setState({
            data:resdata.data,
            weather: resdata.weather
        })
    }.bind(this));

  }
}

