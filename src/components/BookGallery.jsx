import React, { useEffect, useState } from 'react';
import bookService from '../service/book.service';
import BookCard from './BookCard';

const BookGallery = () => {
	const [bookList, setBookList] = useState([]);

	const [msg, setMsg] = useState('');

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
		<section id="grid-area" class="container d-block  justify-content-center">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h3 class="main-title text-center my-4">Books Gallery</h3>
					</div>
					{bookList.map((b) => (
						<div class="col-md-3 my-2 d-flex align-items-stretch">
							<div class="card">
								<img class="card-img-top" src={b.image} alt="..." />
								<div class="card-body">
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
