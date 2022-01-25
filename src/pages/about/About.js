import { Carousel, Container } from "react-bootstrap";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function About() {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const quoteAPI = async () => {
        let arrayOfQuotes = [];
        try {
            const data = await axios.get("https://api.quotable.io/random")
            arrayOfQuotes = data.data
        } catch (error) {
            console.log(error)
        }

        try {
            setQuote(arrayOfQuotes.content);
            setAuthor(arrayOfQuotes.author);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        quoteAPI();
    }, []);

    return (
        <div>
            <div className="justify-content-center">
                <h1 className="text-success text-center">EasySave - the most efficient way to manage your expenses!</h1>
                <div className="d-flex align-items-center justify-content-center">
                    <Carousel className="mt-4">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded"
                                style={{ height: 500 }}
                                src="https://mlgioddjvvfz.i.optimole.com/nBBap1U.KZHt~68c84/w:785/h:450/q:auto/https://blog.remax.ca/wp-content/uploads/2020/01/hidden-expenses.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className="text-light">
                                    <h3>Analyze!</h3>
                                    <p>Start with writing down and analyzing your expenses.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded"
                                style={{ height: 500 }}
                                src="https://images.financebuzz.com/1455x768/filters:quality(70)/images/2019/07/23/why-saving-is-important.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <div className="text-light">
                                    <h3>Save!</h3>
                                    <p>Slowly start saving your money.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded"
                                style={{ height: 500 }}
                                src="https://cdn.aarp.net/content/dam/aarp/home-and-family/family-and-friends/2017/04/1140-cashless.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <div className="text-light">
                                    <h3>Spend wisely!</h3>
                                    <p>Make sure you have valid expenses.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='quoteBox'>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-6">
                            <Container className="mt-4 border border-success pb-4 rounded shadow-lg p-3">
                                <div className='quote text-center'>"{quote}" ~ {author}</div>
                                <div className='button text-center'><button className="btn btn-outline-success" onClick={quoteAPI}>Quote of the day</button></div>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
