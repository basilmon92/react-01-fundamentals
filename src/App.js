import './App.css';
import {books} from './books';
import {Book} from './Components/Books'
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const SearchForm = () => {
    const handleFormInput = (e) => {
        console.log("handle form input "+e.target.value+" "+e.target.name);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");
    }
    return (
        <div className="mt-3">
            <h2>Best Seller Books which I have read</h2>
            <section className="d-flex justify-content-center align-items-center">
                <form>
                    <input className="input-field" placeholder="Search" type="text" name="example" style={{margin: "1rem 0"}} onChange={handleFormInput}/>
                </form>
                <button className="searchbtn" onClick={(e)=>handleFormSubmit(e)}>Search</button>
            </section>
        </div>
    )
}

const BookList = () => {
    const getBook = (id) => {
        const book = books.find((book)=> book.id === id );
        console.log(book);
    }
    return (
        <>
            <SearchForm />
            <section className="booklist">
                {books.map((item,index)=>{
                    return (
                        <Book {...item} key={item.id} number={index} getBook={getBook}>
                            {item.id === 1 ? <p>Currently Reading</p> : null}
                        </Book>
                    )
                })}
            </section>
        </>
    )
}

function App() {
  return (
      <div className="App">
        <BookList />
      </div>
  );
}

serviceWorkerRegistration.register();

export default App;
