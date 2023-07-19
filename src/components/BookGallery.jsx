import React, { useEffect, useState } from 'react';
import bookService from '../service/book.service';


const BookGallery = () => {
	
	const [bookList, setBookList] = useState([]);

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		bookService
			.getAllBook()
			.then((res) => {
				setBookList(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<section id="grid-area" className="container d-block  justify-content-center">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="main-title text-center my-4">Books Gallery</h3>
					</div>
					{bookList.map((b) => (
						<div className="col-md-3 my-2 d-flex align-items-stretch">
							<div className="card">
								<img className="card-img-top" src={b.image} alt="..." />
								<div className="card-body">
									<h6>{b.name}</h6>
									<p>
										{b.author} - {b.category} - {b.year}
									</p>
									<h6>{b.price}</h6>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BookGallery;
