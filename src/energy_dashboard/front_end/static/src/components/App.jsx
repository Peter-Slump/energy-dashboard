import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as apiActions from '../actions/api';
import * as authActions from '../actions/auth';
import * as notificationActions from '../actions/notification';
import * as powerMeterActions from '../actions/powerMeter';
import * as reportActions from '../actions/report';
import * as reportPeriodActions from '../actions/reportPeriod';
import * as userActions from '../actions/user';
import Main from './Main';

// Make sure the store values are available to all components
function mapStateToProps(state) {
    return {
        api: state.api,
        auth: state.auth,
        notification: state.notification,
        powerMeter: state.powerMeter,
        report: state.report,
        reportPeriod: state.reportPeriod,
        user: state.user
    }
}

// Make sure all actions are available to the props in the components
function mapDispatchToProps(dispatch) {
    return {
        apiActions: bindActionCreators(apiActions, dispatch),
        authActions: bindActionCreators(authActions, dispatch),
        notificationActions: bindActionCreators(notificationActions, dispatch),
        powerMeterActions: bindActionCreators(powerMeterActions, dispatch),
        reportActions: bindActionCreators(reportActions, dispatch),
        reportPeriodActions: bindActionCreators(reportPeriodActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
