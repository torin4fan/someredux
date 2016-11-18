import React from 'react';
import {Link} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import {indigoA700} from 'material-ui/styles/colors';

let style = {backgroundColor: indigoA700};

export default class NavLayout extends React.Component {

    render() {
        return (
            <div>
                <Tabs>
                    <Tab style={style} label="Home" containerElement={<Link to="/"/>}/>
                    <Tab style={style} label="Login" containerElement={<Link to="/login"/>}/>
                </Tabs>

                <main>{this.props.children}</main>
            </div>
        );
    }

}
