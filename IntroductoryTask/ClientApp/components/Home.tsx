import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
			<div
				className='fb-login-button'
				data-max-rows='1'
				data-size='large'
				data-button-type='continue_with'
				data-show-faces='false'
				data-auto-logout-link='false'
				data-use-continue-as='false'
				data-scope='public_profile,email'>
			</div>
        </div>;
    }
}
