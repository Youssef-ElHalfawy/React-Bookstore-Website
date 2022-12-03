import React from "react";
import { NavLink } from 'react-router-dom';
import "./NotFoundPage.css";

export default function NotFoundPage() {
	return (
		<div className="position-relative">
			<img
				src="/assets/404-wallpaper-896224a78b7722f1dbeb1ea0dd738ee6.jpg"
				alt="Not Found"
				className="not-found-img"
			>
			</img>
				<NavLink to="/" className="btn btn-success not-found-btn">Back to Home</NavLink>
		</div>
	);
}
