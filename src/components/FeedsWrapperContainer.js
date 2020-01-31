import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fetchData from '../utils/fetchData';
import FeedsWrapper from './FeedsWrapper';

class FeedsWrapperContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            limit: this.props.step,
            error: null,
            timerID: null
        }
    }

    componentDidMount() {
        this.getFeeds();
        const timerID = setInterval(() => {
            this.getFeeds();
        }, this.props.interval * 1000);
        this.setState({timerID});
    }

    componentWillUnmount() {
        clearInterval(this.state.timerID);
    }

    async getFeeds() {
        try {
            const {data} = await fetchData(this.props.url, {limit: this.state.limit});
            this.setState({data: data.slice(-this.props.step)});
            this.setState({limit: this.state.limit + this.props.step});
        } catch (error) {
            this.setState({error});
        }
    }

    render() {
        return <FeedsWrapper posts={this.state.data} error={this.state.error}/>
    }
}

FeedsWrapperContainer.propTypes = {
    step: PropTypes.number.isRequired,
    interval: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    loop: PropTypes.bool
};

export default FeedsWrapperContainer;