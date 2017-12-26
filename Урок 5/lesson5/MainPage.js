import React from 'react';
import Menu from './Menu';
import Button from './Button';
import MainContent from './MainContent';

class MainPage extends React.Component {
    render() {
        return (
            <div className="mainPage">
                <Menu items={this.props.items}/>
                <Button/>
                <MainContent content={this.props.content}/>
            </div>
        );
    }
}