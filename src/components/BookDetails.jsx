import { useEffect } from "react";
import { Alert } from 'react-bootstrap';
import { getOneBook } from "../store/reducers/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from 'react-router-dom';

export default function BookDetails() {
  const { book, isLoading, error } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {dispatch(getOneBook(id))}, []);

  return (
    <div className="bg-light p-5 text-dark">
      <h2 className="mb-5 text-primary">Book Info</h2>
      {!error && <div className="container border rounded-5 border-2 border-dark">
        <div className="row border-bottom border-1 border-dark">
          <div className="col-lg-2 col-4 mb-2 py-3">
            <img src={book.imgSrc} style={{width:"100%"}}/> 
          </div>
          <div className="col-10 mb-2 py-3">
            <div className="d-flex w-100 justify-content-between">
            <h3 className="ms-3 my-4 text-primary">{book.title}</h3>
            <div>
              <NavLink className="btn btn-success text-white fw-bold rounded-pill"
                to={`/edit/${id}`} state={book}> Edit
              </NavLink>
            </div>
            </div>
            <div className="fw-semibold ms-3 my-3">{book.desc}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-12 border-end border-1 border-dark">
            <h4 className="my-4 text-primary">Author: 
              <div className="text-dark text-center my-3">{book.author}</div>
            </h4>
            <div className="my-3 fw-semibold text-primary">Book Type: 
              <div className="text-dark text-center my-3">{book.type}</div>
            </div>
            <div className="my-3 fw-semibold text-primary">Price: 
              <div className="text-dark text-center my-3">${book.price}</div>
            </div>
          </div>
          <div className="col-md-9 col-12">
            <h4 className="my-4 text-primary">Book Preview</h4>
            <p className="my-4 ms-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{book.preview}</p>
          </div>
        </div>
      </div>
      }

      {isLoading && (<Alert className="position-fixed text-center mx-3 bottom-0 start-0 w-25"
					variant="info">Loading product...</Alert>)}

      {error && (<>
        <p className="lead fs-3 my-5 text-center">No Details to show! Please go back to Our Books Page</p>
        <Alert className="position-fixed text-center mx-3 bottom-0 start-0 w-25"
          variant="danger">Couldn't get product from Database</Alert>
        </>)}
    </div>
  );
}