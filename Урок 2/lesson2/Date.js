module.exports = {
    write: () => {
        const div = document.createElement('div');
        div.style.width = "100px";
        div.style.height = "50px";
        div.style.backgroundColor = "green";
        div.style.borderRadius = "10px";
        div.style.boxSizing = 'border-box';
        div.style.paddingTop = "7px";
        div.style.textAlign = "center";
        div.style.color = 'blue';
        div.style.fontSize = "30px";
        div.innerText = 'Дата';
        div.addEventListener("mouseover", function () {
            div.style.cursor = "pointer";
        });
        div.addEventListener("click", function () {
            alert(new Date());
        });
        document.body.appendChild(div);
    }
};