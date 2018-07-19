import React from 'react';
import {
    Card,
    CardTitle,
    CardBody
 } from 'reactstrap';
import Img from 'react-image';

export default class MovieCard extends React.Component {
    shorten(str, separator = ' ') {
        if (str.length <= 12){
            return str;
        } else {
        return str.substr(0, str.lastIndexOf(separator, 12)) + '...';
        }
    }

    render() {
        const movie = this.props.movieProp;
        return (
            <Card className="movie-card d-inline-block">
                <Img className="card-img-top" width="100%" src={[
                    `./images/${movie["poster-image"]}`,
                    './images/placeholder_for_missing_posters.png'
                ]} />
                
                    <CardBody className="pt-2">
                    <CardTitle>{this.shorten(movie.name)}</CardTitle>
                </CardBody>
            </Card>
        )
    }
}