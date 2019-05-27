import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as generateFromUrl from '../../redux/actions/generateFromUrlActions';

class MainPage extends React.Component {
  componentDidMount() {
    const { generateFromUrlActions } = this.props;
    generateFromUrlActions.generateFromUrlAction('https://www.japan.travel/luxury/');
  }

  render() {
    const { generatedTerms } = this.props;
    return (
      <>
        <h1>Data is here</h1>
        {JSON.stringify(generatedTerms)}
      </>
    );
  }
}

const mapStateToProps = state => ({
  generatedTerms: state.generate.generatedTerms,
});

const mapDispatchToProps = dispatch => ({
  generateFromUrlActions: bindActionCreators(generateFromUrl, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
