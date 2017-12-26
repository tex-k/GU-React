import React from 'react';

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