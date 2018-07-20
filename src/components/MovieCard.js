import React from 'react';
import {
    Card,
    CardTitle,
    CardBody
 } from 'reactstrap';
import Img from 'react-image';

export default class MovieCard extends React.Component {
    render() {
        const movie = this.props.movieProp;
        return (
            <Card className="movie-card d-inline-block">
                <Img className="card-img-top" width="100%" src={[
                    `./images/${movie["poster-image"]}`,
                    './images/placeholder_for_missing_posters.png'
                ]} />
                
                    <CardBody className="pt-2">
                    <CardTitle>{movie.name}</CardTitle>
                </CardBody>
            </Card>
        )
    }
}