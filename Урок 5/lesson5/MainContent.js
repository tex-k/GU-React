import React from 'react';

class MainContent extends React.Component {
    render() {
        return (
            <div className="mainPage__content">{this.props.content}</div>
        );
    }
}