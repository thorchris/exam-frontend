import apiFacade from "../api/apiFacade";
import React, { useState, useEffect } from "react";
import { FaSistrix, FaTrash, FaPencilAlt, FaCheckCircle } from "react-icons/fa"
import Vamada from "../images/logo.png";


export default function Admin() {
  const [filteredData, setFilteredData] = useState([]);
  const [dataFromServer, setDataFromServer] = useState([]);
  const [q, setQ] = useState("");

  const init = { isbn: "", title: "", author: "", publisher: "", publishYear: ""};
  const [newBook, setNewBook] = useState(init);

  
  const addNewBook = (evt) => {
    evt.preventDefault();
    apiFacade.addBook(newBook.isbn, newBook.title, newBook.author, newBook.publisher, newBook.publishYear);
    setNewBook("")
    };

  const onChange = (evt) => {
    setNewBook({
      ...newBook,
      [evt.target.id]: evt.target.value,
    });
  };

  const deleteBook = (id) => {
    apiFacade.deleteBook(id)
  };

  useEffect(() => {
    apiFacade.getBooks().then((data) => {
      setDataFromServer(data.all);
      setFilteredData(data.all);
    });
  }, [addNewBook, deleteBook]);

  const filtered = (e) => {
    const filtered =
      dataFromServer &&
      dataFromServer.filter((item) => {
        return item.title.startsWith(e);
      });
    setFilteredData(filtered);
  };

  return (
    <div className="container-fluid padding">
      <img className="logo" src={Vamada} alt=""></img>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 text-center">
          <h2 className="text-center mt-5 mb-2">Add, delete or edit books</h2>
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
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
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
                      <td>
                        <button type="submit" onClick={() => deleteBook(m.id)} className="btn btn-danger"><FaTrash /></button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-primary"><FaPencilAlt /></button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 text-center">
          <h3 className="mt-4">Add book</h3>
          <form onChange={onChange}>
          <input type="text" id="isbn" className="form-control rounded mt-1" placeholder="ISBN" />
          <input type="text" id="title" className="form-control rounded mt-1" placeholder="Title" />
          <input type="text" id="author" className="form-control rounded mt-1" placeholder="Author"/>
          <input type="text" id="publisher" className="form-control rounded mt-1" placeholder="Publisher"/>
          <input type="text" id="publishYear" className="form-control rounded mt-1" placeholder="Publish Year"/>
          </form>
          <button type="submit" onClick={addNewBook} className="btn btn-primary mt-2">
            <FaCheckCircle />
          </button>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}
