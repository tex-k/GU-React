import ReactDOM from 'react-dom';

let items = [
    ['Главная', 'main'],
    ['Блог', 'blog'],
    ['Комментарии', 'comments'],
    ['Пользователи', 'users']
];
let content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid distinctio excepturi itaque laudantium numquam quos suscipit? Alias commodi corporis, dignissimos esse fugiat molestiae placeat tempora? At corporis error esse ipsam!';

ReactDOM.render(
    <MainPage items={items} content={content}/>,
    document.getElementById('mainPage')
);