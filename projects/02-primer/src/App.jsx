import { useState } from "react";

function App() {

  const [count, setCount] = useState(4);

  const isEven = (val) => {
    return count % 2 === 0 ? "Even" : "Odd";
  };

  const getClassName = (val) => {
    return val % 2 === 0 ? "bg-primary text-white text-center p-2 m-1" : "bg-secondary text-white text-center p-2 m-1";
  };

  const handleClick = () => {
    setCount(count + 1)
  };

  return (
    <>
    <h2>Grid with div</h2>
    <div className="container-fluid p-4">
      <div className="row bg-info text-white p-2">
        <div className="col font-weight-bold">Value</div>
        <div className="col-6 font-weight-bold">Even?</div>
      </div>
      <div className="row bg-light p-2 border">
        <div className="col">{ count }</div>
        <div className="col-6">{ isEven( count) }</div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-info m-2"
                  onClick={ handleClick }>
            Click Me
          </button>
        </div>
      </div>
    </div>
    <h2>Grid with table</h2>
    <table className="table table-striped table-bordered table-sm">
      <thead className="bg-info text-white">
        <tr>
          <th>Value</th>
          <th>Even?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ count }</td>
          <td>{ isEven(count) } </td>
        </tr>
      </tbody>
      <tfoot className="text-center">
        <tr>
          <td colSpan="2">
            <button className="btn btn-info m-2"
                    onClick={ handleClick }>
              Click Me
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
    <h2>Forms</h2>
    <div className="m-2">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>City:</label>
        <input type="text" className="form-control" />
      </div>
    </div>
    </>
  )
}

export default App
