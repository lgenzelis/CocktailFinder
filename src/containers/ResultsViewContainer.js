/* defines the behavior of the component ResultsView and connects it to the store. It arranges the data in the way
* expected by ResultsView */

import { connect } from 'react-redux';

import ResultsView from '../components/ResultsView';

const mapStateToProps = ({data}) => ({
    cocktails: data.cocktails.allIds.map(id => ({
        key: id,
        cocktail: data.cocktails.byId[id].cocktail,
        picURL: data.cocktails.byId[id].picURL,
    })),
});

export default connect(
    mapStateToProps,
    undefined
)(ResultsView);
