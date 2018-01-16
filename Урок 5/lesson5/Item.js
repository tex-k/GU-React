import React from 'react';

class Item extends React.Component {
    link = this.props.item[1] + '.html';
    render() {
        return (
            <li className="menu__item"><a className="menu__link" href={this.link}>{this.props.item[0]}</a></li>
        );
    }
}