import React from "react";
import updatecomponent from './Hoc'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
  render() {
    return (
      <>
        <div className="container">
          <h3>Preparation (please HIGHLIGHT your item that needs to deploy and mark status DONE when complete)  </h3>
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table className="table table-bordered table-hover" id="tab_logic" >
                <thead>
                  <tr>
                    <th className="text-center"> sl.no </th>
                    <th className="text-center"> Item </th>
                    <th className="text-center"> Due Date </th>
                    <th className="text-center"> Status </th>
                    <th className="text-center"> owner </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.tablebody}
                </tbody>
              </table>
              <button onClick={this.props.addrow} className="btn btn-primary ">
                Add Row
              </button>

              <button onClick={this.props.deletrow} className="btn btn-danger">
                Delete Row
              </button>
            
            
            </div>
          </div>
        </div>
      </>
    );
  }
}
//export default App;
export default updatecomponent(App)

