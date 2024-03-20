import Product from "../components/Product";
import "./Catalog.css";

function Catalog(){

    const data = [
        {
            title: 'Strawberries',
            category: 'Fruit',
            price: 6.99,
            image: 'strawberries.jpeg',
            _id: '1',
        }
        ,
        {
            title: 'Apples',
            category: 'Fruit',
            price: 2.99,
            image: '.apple.jpeg',
            _id: '2',
        }
        ,
        {
            title: 'Guavas',
            category: 'Fruit',
            price: 3.99,
            image: 'img1.jpg',
            _id: '3',
        }
        ,
        {
            title: 'Pears',
            category: 'Fruit',
            price: 2.99,
            image: 'img1.jpg',
            _id: '4',
        },
        {
            title: 'Passion fruit',
            category: 'Fruit',
            price: 5.99,
            image: 'img1.jpg',
            _id: '5',
        },
        {
            title: 'Starfruit',
            category: 'Fruit',
            price: 3.99,
            image: 'img1.jpg',
            _id: '6',
        },
        {
            title: 'Lychee',
            category: 'Fruit',
            price: 6.99,
            image: 'img1.jpg',
            _id: '7',
        },
    ];


    return (
        <div className="catalog page">
            <h1>Our amazing catalog!</h1>

        <Product info={data[0]} />
        <Product info={data[1]} />
        <Product info={data[2]} />
        <Product info={data[3]} />
        <Product info={data[4]} />
        <Product info={data[5]} />
        <Product info={data[6]} />

        </div>
    );
}

export default Catalog;
