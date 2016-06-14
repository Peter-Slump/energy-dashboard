import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as powerMeterActions from '../actions/powerMeter';
import * as reportActions from '../actions/report';
import * as reportPeriodActions from '../actions/reportPeriod';
import Main from './Main';

// Make sure the store values are available to all components
function mapStateToProps(state) {
    return {
        powerMeter: state.powerMeter,
        report: state.report,
        reportPeriod: state.reportPeriod
    }
}

// Make sure all actions are available to the props in the components
function mapDispatchToProps(dispatch) {
    return {
        powerMeterActions: bindActionCreators(powerMeterActions, dispatch),
        reportActions: bindActionCreators(reportActions, dispatch),
        reportPeriodActions: bindActionCreators(reportPeriodActions, dispatch),
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
