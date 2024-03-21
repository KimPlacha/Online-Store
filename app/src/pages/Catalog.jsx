import "./Catalog.css";
import Product from "../components/Product";

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
            image: 'apples.jpeg',
            _id: '2',
        }
        ,
        {
            title: 'Guavas',
            category: 'Fruit',
            price: 3.99,
            image: 'guava.jpeg',
            _id: '3',
        }
        ,
        {
            title: 'Pears',
            category: 'Fruit',
            price: 2.99,
            image: 'pears.jpg',
            _id: '4',
        },
        {
            title: 'Passion fruit',
            category: 'Fruit',
            price: 5.99,
            image: 'passionfruit.jpeg',
            _id: '5',
        },
        {
            title: 'Starfruit',
            category: 'Fruit',
            price: 3.99,
            image: 'starfruit.jpeg',
            _id: '6',
        },
        {
            title: 'Lychee',
            category: 'Fruit',
            price: 6.99,
            image: 'lychee.jpeg',
            _id: '7',
        },
    ];

    return (
        <div className="catalog page">
            <h1>Our amazing catalog!</h1>

            {data.map(prod => (
                <Product key={prod._id} info={prod} />
            ))}
        </div>
    );
}

export default Catalog;
