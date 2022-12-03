import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import classes from "./BookItem.module.css";
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/reducers/counterSlice';

export default function BookItem({ bookData }) {
  const { title, desc, price, id, imgSrc } = bookData;

  const dispatch = useDispatch();
	const { add } = cartActions;
  	const addToCart = () => {
			dispatch(add(bookData));
		};
  
  const readMore = (e)=>{
    e.preventDefault();
    setShowDesc(<Card.Text>{desc}</Card.Text>)
  }
  const [showDesc, setShowDesc] = useState(
    <Card.Text><span className={`${classes.truncate}`}>{desc}</span>
    <a href='#' className='text-light' onClick={readMore}>Read more</a></Card.Text>
  );

  return (
    <div className='d-flex align-items-stretch my-2'>
      <Card className={`bg-primary shadow ${classes.oneCard}`}>
        <Card.Img variant="top" src={imgSrc}/>
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="text-white">{title} <span className="fs-6 text-warning">${price}</span></Card.Title>
          <hr/>{showDesc}<hr/>
          <NavLink className="btn btn-success btn py-2 my-1"
            to={`/view/${id}`}>Preview
          </NavLink>
          <Button className="bg-transparent text-white fw-bold border-0" onClick={addToCart}>+ Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}