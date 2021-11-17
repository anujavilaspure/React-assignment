import React, { Component } from 'react'
import Data from './Data.json'
const updatecomponent=Originalcomponent=>{
 class HOC extends Component {
    
    state = {
        rows: []
      };
      handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
          [name]: value
        };
        this.setState({
          rows
        });
      };
      handleAddRow = () => {
        const item = {
          Item: "",
          status: "",
          owner:"",
          DueDate:""
        };
        this.setState({
          rows: [...this.state.rows, item]
        });
      };
      handleRemoveRow = () => {
        this.setState({
          rows: this.state.rows.slice(0, -1)
        });
      };
    render() {
        return (
            <div>
                <Originalcomponent addrow={this.handleAddRow} deletrow={this.handleRemoveRow} 
                 tablebody={this.state.rows.map((item, idx) => (
                    <tr key={idx}>
                      <td>{idx}</td>
                      <td>

                        
                        <select   value={this.state.rows[idx].Item} onChange={this.handleChange(idx)}  className="form-control">
                           {
                             Data.Item.map((result)=>(<option text={result.id}>{result.Iname}</option>))
                            
                           }
                        </select>
                      </td>
                      <td>
                        <input type="date" name="date" value={this.state.rows[idx].DueDate}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        
                        <select   value={this.state.rows[idx].status} onChange={this.handleChange(idx)}  className="form-control">
                           {
                             Data.status.map((result)=>(<option text={result.id}>{result.value}</option>))
                            
                           }
                        </select>
                      </td>
                      <td>
                      <select   value={this.state.rows[idx].owner} onChange={this.handleChange(idx)}  className="form-control">
                          {
                             Data.owner.map((result)=>(<option text={result.id}>{result.owenername}</option>))
                            
                           }
                        </select>
                      </td>
                    </tr>
                  ))}
                  />
            </div>
        )
    }
}
return HOC;
}

export default updatecomponent;
