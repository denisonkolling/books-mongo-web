import React, { useState } from "react";
import bookService from "../service/book.service";

const AddBook = () => {

  const [book, setBook] = useState({
    name: "",
    price: "",
    category: "",
    author: "",
    year: "",
    image: "",
  });

  const [msg, setMsg] = useState("");
  
  const handleChange = (e) => {
    const value = e.target.value;
    setBook({ ...book, [e.target.name]: value});
  };

  const BookRegister = (e) => {
    e.preventDefault();
    bookService
    .saveBook(book).then((res) => {
      setMsg("Book Added Successfuly");
      setBook({
        name: "",
        price: "",
        category: "",
        author: "",
        year: "",
        image: "",
      });
    })
    .catch((error) =>{
      console.log(error);
    })

  };

  return (
    <>
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center h3">Add New Book</div>
            {msg && <p className="fs-4 text-center text-success">{msg}</p>}

            <div className="card-body">
              <form onSubmit={(e)=> BookRegister(e)}>
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
                  name="price"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={book.image}
                  />
                </div>

                <button className="btn btn-primary col-md-12">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddBook;