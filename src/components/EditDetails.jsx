import { useState } from "react";
import { deleteBook, editBook, addBook } from "../store/reducers/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Alert, Form } from "react-bootstrap";

export default function EditDetails() {

  //----state is carrying the data from BookDetails

  const { state } = useLocation();
  const navigator = useNavigate();
  const { id: paramId } = useParams();
  
  const { addedBook, editedBook, deletedBook } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  //----Handling data from Inputs

  const [formData, setFormData] = useState({
    title: state ? state.title : "",
    desc: state ? state.desc : "",
    author: state ? state.author : "",
    type: state ? state.type : "",
    price: state ? state.price : "",
    preview: state ? state.preview : "",
    imgSrc: state ? state.imgSrc : "",
  });
  const [errorMessage, setErrorMessage] = useState({
    title: "",
    desc: "",
    author: "",
    type: "",
    price: "",
    preview: "",
  });

  //----Validating and accepting data from Inputs

  const changeHandler = (e) => {
    if (e.target.value.length > 0) {
      setFormData({
        ...formData,
        // ...state,
        [e.target.name]: e.target.value,
      });
      setErrorMessage({
        ...errorMessage,
        [e.target.name]: "",
      });
    } else {
      setErrorMessage({
        ...errorMessage,
        [e.target.name]: "Input field is required",
      });
    }
  };

  //----Buttons fire Actions to delete/edit||add

  // let noDeleteAlert = false;
  const deleteHandler = (e) => {
    e.preventDefault();

    if (paramId && state) {
      let idArg = state.id;
      dispatch(deleteBook(idArg));
    } else {
      // noDeleteAlert = true
    }

    setTimeout(() => {navigator("/books")}, 2000);
  };
  
  const submitHandler = (e) => {
    e.preventDefault();

    let bookArg = formData;
    if (paramId && state) {
      let idArg = state.id;
      dispatch(editBook({idArg, bookArg}));    //args names must match the names in CRUD
    } else if (!paramId && state) {
      dispatch(addBook(bookArg));
    } else {
      console.log("Not Authorized to Add/Edit to Database");  //!!!
    }

    setTimeout(() => {navigator(-1)}, 2000);
  };

  return (
    <div className="bg-light">
    <Form
      noValidate
      className="p-5 text-dark"
      onSubmit={submitHandler}
      onChange={changeHandler}
    >
      <h2 className="mb-5 text-primary">{paramId ? "Edit Info" : "Add new Book"}</h2>
      <div className="container border rounded-5 border-2 border-dark">
        <div className="row border-bottom border-1 border-dark">
          <div className="col-lg-2 col-4 mb-2 py-3">
            <img src={formData.imgSrc} style={{width:"100%"}}/> 
          </div>
          <div className="col-10 mb-2 py-3">
            <Form.Control
              name="title" type="text" id="bookTitle"
              className="form-control fs-3 fw-semibold bg-transparent border-0 ms-1 my-3 text-primary"
              defaultValue={formData.title} placeholder="Enter a Title"
            />
            <div className="text-danger">{errorMessage.title}</div>
            <Form.Control
                name="desc" as="textarea" rows={4} id="bookDesc"
                className="form-control fw-semibold bg-transparent border-0 ms-1 my-3 "
                defaultValue={formData.desc} placeholder="Enter a Description"
              />
            <div className="text-danger">{errorMessage.desc}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-12 border-end border-1 border-dark">
            <h4 className="my-4 text-primary">Author:
              <Form.Control
                name="author" type="text" id="bookAuthor"
                className="form-control text-center fs-4 fw-semibold bg-transparent mt-2 border-0 text-dark"
                defaultValue={formData.author} placeholder="Enter Author Name"
              />
            </h4>
              <div className="text-danger">{errorMessage.author}</div>
            <div className="my-3 fw-semibold text-primary">Book Type:
              <Form.Control
                name="type" type="text" id="bookType"
                className="form-control text-center fw-semibold bg-transparent mt-2 border-0 text-dark"
                defaultValue={formData.type} placeholder="Enter Book Type"
              />
            </div>
              <div className="text-danger">{errorMessage.type}</div>
            <div className="my-3 fw-semibold text-primary">Price: 
              <Form.Control
                name="price" type="text" id="bookPrice"
                className="form-control text-center fw-semibold bg-transparent mt-2 border-0 text-dark"
                defaultValue={formData.price} placeholder="Enter Book Price"
              />
            </div>
              <div className="text-danger">{errorMessage.price}</div>
          </div>
          <div className="col-md-9 col-12">
            <h4 className="my-4 text-primary">Book Preview</h4>
            <Form.Control
                name="preview" as="textarea" rows={10} id="bookPreview"
                className="form-control bg-transparent border-0 my-3 "
                defaultValue={formData.preview} placeholder="Enter a preview"
              />
            <div className="text-danger">{errorMessage.preview}</div>
          </div>
        </div>
      </div>

      <div className="row pt-5">
        <button className="col-1 btn btn-success fw-semibold mx-auto"
          name="edit/add"> {paramId ? "Edit" : "Add"}
        </button>
      </div>
    </Form>

      <div className="container">
      <div className="row pb-5">
        <button className={paramId ? "col-1 btn btn-danger fw-semibold mx-auto" : "disabled invisible col-1 btn btn-danger fw-semibold mx-auto"}
          onClick={deleteHandler}> {paramId ? "Delete" : "----"}
        </button>
      </div>
      </div>

      {addedBook && (<Alert className="position-fixed text-center mx-3 bottom-0 start-0 w-25"
          variant="success">Book Added successfully</Alert>)}
      {editedBook && (<Alert className="position-fixed text-center mx-3 bottom-0 start-0 w-25"
          variant="success">Book Edited successfully</Alert>)}
      {deletedBook && (<Alert className="position-fixed text-center mx-3 bottom-0 start-0 w-25"
          variant="success">Book Deleted successfully</Alert>)}
      {/* {noDeleteAlert && (<Alert className="position-fixed text-center mx-3 bottom-0 start-0 w-25"
          variant="warning">Not Authorized to Delete from Database</Alert>)} */}
    </div>
  );
}