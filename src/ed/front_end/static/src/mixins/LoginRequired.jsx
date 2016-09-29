import { browserHistory } from 'react-router';

const LoginRequiredMixin = {
    componentWillMount: function() {
        const { auth } = this.props;
        if( auth.loggedIn === false ) {
            console.log('Redirect', auth);
            browserHistory.push('/login');
        }
    }
};

export default LoginRequiredMixin;