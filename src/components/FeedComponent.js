import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MemoPost from './PostComponent/PostComponent';

const FeedComponent = (View) => {
    class FeedWrapperComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                limit: this.props.step,
                timerId: null
            }
            this.setStateWithFetch = this.setStateWithFetch.bind(this);
        }

        componentDidMount() {
            this.feedTimer();
        }

        componentWillUnmount() {
            clearInterval(this.state.timerID);
        }

        // shouldComponentUpdate(nextProps, nextState, nextContext) {
        //     return this.state.data.length !== nextState.limit;
        // }

        feedTimer() {
            const timerID = setInterval(async () => {
                this.fetchData(this.props.url, this.props.step, this.state.limit)
                    .then(({data}) => this.setStateWithFetch(data, this.props.step, this.state.limit))
                    .catch((err) => { console.log(err); });
            }, this.props.interval * 1000);

            this.setState({timerID});
        }

        fetchData(url, step, limit) {
            return axios.get(`${url}/?limit=${limit}`);
        }

        setStateWithFetch(data, step, limit) {
            this.setState({data: data.slice(-step)});
            this.setState({limit: limit + step});
        }

        render() {
            return (
                <div className='container'>
                    <div className='feeds-wrapper'>
                        {this.state.data.map((post) => <View key={post.id} post={post}/>)}
                    </div>
                </div>

            )
        }
    }

    FeedWrapperComponent.propTypes = {
        step: PropTypes.number.isRequired,
        interval: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        loop: PropTypes.bool
    };

    return FeedWrapperComponent;
};



export default FeedComponent(MemoPost);