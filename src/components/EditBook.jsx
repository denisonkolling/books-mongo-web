import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import bookService from "../service/book.service";

const EditBook = () => {

  const [book, setBook] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    author: "",
    year: "",
    image: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const [msg, setMsg] = useState("");

  useEffect(()=> {
    bookService
    .getBookById(id)
    .then((res) =>{
      setBook(res.data);
    })
    .catch((error) => {
      console.log(error)
    });
  },[]);

  const handleChange = (e) => {
    const value = e.target.value;
    setBook({ ...book, [e.target.name]: value });
  };

  const BookUpdate = (e) => {
    e.preventDefault();

    bookService
    .editBook(book)
    .then((res) => {
      navigate("/");
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <>
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center">Edit Book</div>
            {msg && <p className="fs-4 text-center text-success">{msg}</p>}

            <div className="card-body">
              <form onSubmit={(e)=> BookUpdate(e)}>
                <div className="mb-3">
                  <label>Enter Book Name</label>
                  <input 
                  type="text" 
                  name="name"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={book.name}
                  />
                </div>

                <div className="mb-3">
                <label>Enter Category</label>
                  <input 
                  type="text" 
                  name="category"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={book.category}
                  />
                </div>
              
                <div className="mb-3">
                <label>Enter Author</label>
                  <input 
                  type="text" 
                  name="author"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={book.author}
                  />
                </div>

                <div className="mb-3">  
                <label>Enter Year</label>
                  <input 
                  type="text" 
                  name="year"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={book.year}
                  />
                </div>

                <div className="mb-3">
                <label>Enter Price</label>
                  <input 
                  type="text" 
                  name="price"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={book.price}
                  />
                </div>

                <div className="mb-3">
                <label>Enter Image Link</label>
                  <input 
                  type="text" 
                  name="image"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={book.image}
                  />
                </div>

                <button className="btn btn-primary col-md-12">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EditBook;



