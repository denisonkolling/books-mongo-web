import bookService from '../service/book.service';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Home = () => {

  const [bookList, setBookList] = useState([]);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    bookService.getAllBook().then((res) => { setBookList(res.data)})
    .catch((error) => {console.log(error)});
  }

  const deleteBook = (id) => {
    bookService.deleteBook(id).then((res) => { setMsg("Delete Successfully"); init();})
    .catch((error) => {console.log(error)});
  }

  return (
    <>
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header fs-3 text-center">
              All Books List
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}
            </div>

            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Author</th>
                    <th scope="col">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {bookList.map((b, num) => (
                    <tr key={b.id}>
                      <td>{num + 1}</td>
                      <td>{b.name}</td>
                      <td>{b.price}</td>
                      <td>{b.category}</td>
                      <td>{b.author}</td>
                      <td>{b.year}</td>
                      <td>
                        <div className="d-flex">
                        <Link to={'editBook/'+b.id} className="btn btn-sm btn-primary px-4 m-1">
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteBook(b.id)}
                          className="btn btn-sm btn-danger m-1 px-3"
                        >
                          Delete
                        </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
};

export default Home