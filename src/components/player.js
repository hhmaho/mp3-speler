import React from 'react';


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentsong: 0, playing: true, paused: false }
    }
    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.currentsong}
                <button onClick={() => {
                    if (this.state.currentsong === 0) {
                        return
                    }
                    this.setState({
                        currentsong: this.state.currentsong - 1
                    })
                }
                }>&lt;&lt;</button>
                <button><b>&gt;</b></button>
                <button onClick={() => {
                    if (this.state.currentsong > this.props.songs.length - 1) {
                        return
                    }
                    this.setState({ currentsong: this.state.currentsong + 1 })
                }}>&gt;&gt;</button>
                <button>stop</button>
                <ul>{this.props.songs.map((currentsong, index) => <li>{currentsong}{index === this.state.currentsong ? "*" : ""}</li>)}
                </ul>
            </div >
        )
    }
}

export default Player