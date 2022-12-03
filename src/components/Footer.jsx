import React from 'react'

export default function Footer() {
  return (
		<>
		<div className="bg-dark text-light pt-5">
			<footer className="container">
				<div className="row">
					<div className="col-6 col-md-2 mb-3">
						<h5>About</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<button className="nav-link p-0 bg-transparent border-0 text-muted">
									Gifts 
								</button>
							</li>
							<li className="nav-item mb-2">
								<button className="nav-link p-0 bg-transparent border-0 text-muted">
									Features
								</button>
							</li>
							<li className="nav-item mb-2">
								<button className="nav-link p-0 bg-transparent border-0 text-muted">
									Pricing
								</button>
							</li>
							<li className="nav-item mb-2">
								<button className="nav-link p-0 bg-transparent border-0 text-muted">
									FAQs
								</button>
							</li>
							<li className="nav-item mb-2">
								<button className="nav-link p-0 bg-transparent border-0 text-muted">
									Our blog
								</button>
							</li>
						</ul>
					</div>
					<div className="col-6 col-md-2 mb-3">
						<h5>Support</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<button className="nav-link p-0 bg-transparent border-0 text-muted">
									Help
								</button>
							</li>
							<li className="nav-item mb-2">
								<button className="nav-link p-0 bg-transparent border-0 text-muted">
									Purchase help
								</button>
							</li>
							<li className="nav-item mb-2">
								<button className="nav-link p-0 bg-transparent border-0 text-muted">
									AdChoices
								</button>
							</li>
							<li className="nav-item mb-2">
								<button className="nav-link p-0 bg-transparent border-0 text-muted">
									Privacy
								</button>
							</li>
							<li className="nav-item mb-2">
								<button className="nav-link p-0 bg-transparent border-0 text-muted">
									Copyright
								</button>
							</li>
						</ul>
					</div>
					
					<div className="col-md-5 offset-md-1 mb-3">
						<form>
							<h5>Subscribe to our Blog</h5>
							<p>New online novels and interesting books every month.</p>
							<div className="d-flex flex-column flex-sm-row w-100 gap-2">
								<label htmlFor="newsletter1" className="visually-hidden">
									Email address
								</label>
								<input
									id="newsletter1"
									type="email"
									className="form-control"
									placeholder="Email address"
								/>
								<button className="btn btn-success" type="button">
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="d-flex flex-column flex-sm-row justify-content-between py-2 border-top">
					<p>&copy; MyBookstore, All rights reserved.</p>
					{/* <ul className="list-unstyled d-flex">
						<li className="ms-3">
							<a className="link-dark" href="/home">
								<svg className="bi" width="24" height="24"></svg>
							</a>
						</li>
						<li className="ms-3">
							<a className="link-dark" href="/home">
								<svg className="bi" width="24" height="24"></svg>
							</a>
						</li>
						<li className="ms-3">
							<a className="link-dark" href="/home">
								<svg className="bi" width="24" height="24"></svg>
							</a>
						</li>
					</ul> */}
				</div>
			</footer>
		</div>
		</>
	);
}
