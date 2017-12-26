class Menu extends React.Component {
    render() {
        return (
            <ul className="menu">
                {
                    this.props.items.map((item) => <Item item={item}/>)
                }
            </ul>
        );
    }
}