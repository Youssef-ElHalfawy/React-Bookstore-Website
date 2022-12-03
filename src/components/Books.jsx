import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Dropdown, DropdownButton } from 'react-bootstrap';
import { getBooks, booksActions } from "../store/reducers/booksSlice";
import BookItem from "./BookItem";

export default function Books() {

  //----State from booksSlice

  const { books, filteredBooks, isLoading, error } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {dispatch(getBooks())}, []);

  //----Dynamic Dropdown list

  const bookCategories = ["all",...new Set(books.map(book => book.type))];
  const dropdownCategories = bookCategories.map(category => <Dropdown.Item as="button" key={category}
                                            onClick={()=>{filterHandler(category)}}>{category}</Dropdown.Item>)

  //----Choosing a category fires a filter Action

  const [categoryName, setCategoryName] = useState('Select Category');
  const filterHandler = (category) => {dispatch(booksActions.categoryFilter(category))
    setCategoryName(category);
  }
  // console.log(categoryName);
  
  //----Search filters again based on input

  const [searchInput, setSearchInput] = useState('');
  const searchHandler = (e)=> setSearchInput(e.target.value);

  let searchedBooks = books;
  if (filteredBooks.length === 0) {
    searchedBooks = books.filter( book => book.title.toLowerCase().indexOf(searchInput)!==-1);
  } else {
    searchedBooks = filteredBooks.filter( book => book.title.toLowerCase().indexOf(searchInput)!==-1);
  }
  // console.log(searchedBooks);

  const finalBookList =
    books.length == 0 ? (
      <p className="lead fs-3">No Books To Show</p>
    ) : (
      <div className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
  
        {searchedBooks.map(book => <BookItem key={book.id} bookData={book} />)}
      </div>
    );

  return (
    <div className="bg-light p-5">
      <h2 className="mb-5 text-primary">Our Books</h2>
      <div className="container">
        <div className="row mb-5 d-flex justify-content-around">
          <div className="col-md-8 my-4">
            <input type="search"
              className={'form-control mx-start'}
              placeholder="Search Book Title ..."
              onChange={searchHandler}
              value={searchInput.toLowerCase()}
            />
          </div>
          <div className="col-md-3 my-4">
            <DropdownButton variant="success" id="dropdown-basic-button" title={categoryName}>
              {dropdownCategories}
            </DropdownButton>
          </div>
        </div>
      </div>
      <div className="container text-light">
        {isLoading && (<Alert className="position-fixed text-center mx-3 bottom-0 start-0 w-25"
					variant="info">Loading products...</Alert>)}

        {!error && finalBookList}

        {error && (<Alert className="position-fixed text-center mx-3 bottom-0 start-0 w-25"
					variant="danger">Couldn't get products from Database</Alert>)}
      </div>
    </div>
  );
}
