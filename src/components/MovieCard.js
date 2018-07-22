import React from 'react';
import Img from 'react-image';
import TextTruncate from 'react-text-truncate';

export default class MovieCard extends React.Component {
    render() {
        const movie = this.props.movieProp;
        return (
            <div class="max-w-sm rounded overflow-hidden shadow-lg inline-block movie-card">
                <Img className="w-full" width="100%" src={[
                    `./images/${movie["poster-image"]}`,
                    './images/placeholder_for_missing_posters.png'
                ]} />

                <div class="py-2 mb-2">
                    <div class="text-sm mb-2 text-left">
                        <TextTruncate
                                line={1}
                                truncateText="…"
                                text={movie.name}
                            />
                    </div>
                </div>
        
                </div>
        
        )
    }
}