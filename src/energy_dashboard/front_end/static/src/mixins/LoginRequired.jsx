import { browserHistory } from 'react-router';

const LoginRequiredMixin = {
    componentWillMount: function() {
        const { auth } = this.props;
        if( !auth.loggedIn ) {
            browserHistory.push('/login');
        }
    }
};

export default LoginRequiredMixin;