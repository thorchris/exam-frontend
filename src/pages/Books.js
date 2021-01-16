import apiFacade from "../api/apiFacade";
import React, { useState, useEffect } from "react";
import { FaSistrix } from "react-icons/fa"
import Vamada from "../images/logo.png";


export default function Books({ isLoggedIn }) {
  const [filteredData, setFilteredData] = useState([]);
  const [dataFromServer, setDataFromServer] = useState([]);
  const [q, setQ] = useState("")

  useEffect(() => {
    apiFacade.getBooks().then((data) => {
       setDataFromServer(data.all);
       setFilteredData(data.all);
    })
  }, []);

  const filtered = (e) => {
    const filtered =
      dataFromServer &&
      dataFromServer.filter((item) => {
        return item.title.toLowerCase().startsWith(e.toLowerCase());
      });
    setFilteredData(filtered);
  };


  return (
    <div className="container-fluid padding">
      <img className="logo" src={Vamada} alt=""></img>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="text-center mt-5 mb-2">Books</h2>
          <p className="text-muted">Search for a book by title</p>

          <div className="input-group rounded mb-5 mt-2">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                filtered(e.target.value);
              }}
            />
            <button type="button" className="btn btn-primary">
              <FaSistrix />
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ISBN</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Publisher</th>
                <th scope="col">Publish year</th>
              </tr>
            </thead>
            <tbody>
            {filteredData && filteredData.length > 0
              ? filteredData.map((m) => (
                  <tr key={m.isbn}>
                    <td>{m.isbn}</td>
                    <td>{m.title}</td>
                    <td>{m.author}</td>
                    <td>{m.publisher}</td>
                    <td>{m.publishYear}</td>
                  </tr>
                ))
              : null}
            </tbody>
          </table>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
