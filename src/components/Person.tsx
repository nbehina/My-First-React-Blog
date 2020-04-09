import * as React from 'react';

export interface IPersonProps {
    firstName: string;
    lastName:string;
    callbackMethod: (callBackString: string) => string;
}

export default class Person extends React.Component<IPersonProps> {
    render ()
    {
        let { firstName,lastName, callbackMethod } = this.props;
        return (
            <dl>
                <dt>First Name:</dt>
                <dd>{firstName}</dd>
                <dt>Last Name:</dt>
                <dd>{lastName}</dd>
                <dt></dt>
                <dd>{callbackMethod( "A litte Bit About Me" )}</dd>
            </dl>
        );
    }
}
