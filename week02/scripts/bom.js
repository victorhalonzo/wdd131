const _input = document.querySelector('input');
const _button = document.querySelector('button');
const _list = document.querySelector('ul');


_button.addEventListener("click", function () {
    if (_input.value.trim() != "") {
        const _newList = document.createElement('li');
        _newList.textContent = _input.value;
        const _deleteButton = document.createElement('button');
        _deleteButton.textContent = '❌';
        _deleteButton.addEventListener("click", function () {
            _list.removeChild(_newList);
            _input.focus();
        })
        _newList.append(_deleteButton);
        _list.append(_newList);
        _input.value = "";
    } else {
        alert("Please enter a chapter.")
        _input.focus();
    }
    _input.focus();
});

