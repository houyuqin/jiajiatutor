import React, { Component } from 'react'
import { Player } from 'video-react';

export default class Player0 extends Component {
    render() {
        let src0 = this.props.location.history.split('+')[1];
        return (
            <div>
                <Player ref="player" videoId="video-1">
                    <source src={src0}/>
                </Player>
            </div>
        )
    }
}
