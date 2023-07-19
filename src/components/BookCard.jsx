import 'bootstrap/dist/css/bootstrap.min.css';
import imageUrl from '../assets/img1.jpg';

const BookCard = () => {
	return (
		<div className="container">
			<div className="card col-3 m-4">
				<img className="card-img-top mt-4" src={imageUrl} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title"></h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
