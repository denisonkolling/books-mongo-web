import axios from "axios";

const API_URL = "http://localhost:8080"; 

class BookService {

    saveBook(book) {
        return axios.post(API_URL + "/saveBook", book);
    }

    getAllBook() {
        return axios.get(API_URL + "/");
    }

    getBookById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteBook(id) {
        return axios.delete(API_URL + "/deleteBook/" + id);
    }

    editBook(book) {
        return axios.post(API_URL + "/editBook/" + book.id, book);
    }

}

export default new BookService;