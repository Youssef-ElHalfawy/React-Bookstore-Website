import React from "react";

export default function AboutPage() {
	return (
		<div className="bg-light p-5">
			<div className="container">
				<div className="row align-items-center mb-5 gy-5 gx-5">
					<div className="col-md-6 col-sm-12">
						<h2 className="text-center section-title mb-4">About us</h2>
						<p className="text-center lead">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
							iste, necessitatibus odit possimus atque ullam, molestiae optio
							sequi quod cumque exercitationem! Temporibus ea natus dignissimos
							iste veritatis maiores, harum eos, veniam optio odio rem nulla quod
							sint? Delectus aliquid, laudantium repudiandae vero voluptas
							corrupti accusantium enim sunt esse, sapiente voluptate?
						</p>
					</div>
					<div className="col-md-6 col-sm-12">
						<img
							className="side-img border-0 rounded-end rounded-5"
							src="/assets/download.jfif"
							alt="about"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
