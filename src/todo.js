import React from 'react';
export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            intext: "",
            ArrData: [],
            outData:[]
        }
    }
    handleChange = (event) => {
        this.setState({
            intext: event.target.value,
        })
    }
    handleAdd = () => {
        var temp = this.state.ArrData;
        temp.push(this.state.intext);
        this.setState({
            ArrData: temp
        })
    }
    handleDel = (index) =>{
        var temp1 = this.state.ArrData;
       var x =  temp1.splice(index, 1);  // DATE DELETE FROM HERE

        var outTemp = this.state.outData;
        outTemp.push(x);

        this.setState({
            ArrData: temp1,
            outData: outTemp

        })
    }
    render() {

        return (
            <div>
                <h1>Todo List</h1><br /><br />
                <input type="text" value={this.state.intext} onChange={this.handleChange} /><button onClick={this.handleAdd} disabled={this.state.intext === "" ? true: false}>Push</button>
                {this.state.ArrData.length === 0 ? <h1> Nothing added yet</h1>: <h1>Few Items has added</h1> }
                {/* FIRSTTABLE STATRED FROM HERE  */}
                <h1>1st table</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    {this.state.ArrData.map((data, indexitself) => {
                        return (
                            <tbody>
                            <tr>
                        <td>{indexitself+1}</td>
                        <td> {data}   <button onClick={(e) =>{this.handleDel(indexitself)}}>Done</button></td>
                            </tr>
                        </tbody>
                        )
                    })}
                </table> 
{/* SECOND TABLE STATRED FROM HERE  */}
<h1>2nd table</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    {this.state.outData.map((donedata, i2) => {
                        return (
                            <tbody>
                            <tr key={i2}>
                        <td>{i2+1}</td>
                        <td> {donedata}</td>
                            </tr>
                        </tbody>
                        )
                    })}
                </table>

            </div>
        )
    }

}