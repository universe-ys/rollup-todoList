
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';



function ___$insertStylesToHeader(css) {
  if (!css) {
    return
  }
  if (typeof window === 'undefined') {
    return
  }

  const style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css
}

/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */

___$insertStylesToHeader("* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #fdfaf6;\n  margin: 2rem 0;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  color: #064420;\n}\n\n.input-container {\n  height: 250px;\n  display: flex;\n  align-items: center;\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 0.5rem;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.input-container .input-area {\n  display: flex;\n  width: 100%;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);\n}\n.input-container .input-area .todo-input {\n  padding: 0.5rem;\n  background: white;\n  width: 100%;\n  font-size: 1.8rem;\n  color: #333;\n  border: none;\n  outline: none;\n}\n.input-container .input-area .todo-btn {\n  padding: 0.5rem;\n  font-size: 1.8rem;\n  border: none;\n  background: white;\n  color: white;\n  background: #064420;\n  cursor: pointer;\n}\n\n.todo-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.todo-container .todo-list {\n  width: 100%;\n  max-width: 600px;\n}\n.todo-container .todo-list .todo {\n  margin: 0.5rem;\n  background: white;\n  font-size: 1.5rem;\n  color: #333;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: 1s ease;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);\n}\n.todo-container .todo-list .todo .todo-item {\n  flex-grow: 1;\n  border: none;\n  font-size: 1.5rem;\n  outline: none;\n  padding: 0rem 0.5rem;\n  overflow-x: scroll;\n  white-space: nowrap;\n}\n.todo-container .todo-list .todo.delete {\n  transform: translateX(10rem);\n  opacity: 0;\n}\n.todo-container .todo-list .todo.done {\n  text-decoration: line-through;\n  opacity: 0.5;\n}\n.todo-container .todo-list .todo .todo-item::-webkit-scrollbar {\n  display: none;\n}\n.todo-container .todo-list .todo .delete-btn {\n  background: #cdd0cb;\n  color: white;\n  border: none;\n  padding: 1rem;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.todo-container .todo-list .todo .complete-btn {\n  background: #7c9473;\n  color: white;\n  border: none;\n  padding: 1rem;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.todo-container .todo-list .todo .edit-btn {\n  background: #064420;\n  color: white;\n  border: none;\n  padding: 1rem;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.todo-container .todo-list .todo .save-btn {\n  background: #7c9473;\n  color: white;\n  border: none;\n  padding: 1rem;\n  cursor: pointer;\n  font-size: 1rem;\n  color: white;\n  border: none;\n  padding: 1rem;\n  cursor: pointer;\n  font-size: 1rem;\n  display: none;\n}\n.todo-container .todo-list .todo.edit .complete-btn,\n.todo-container .todo-list .todo.edit .edit-btn,\n.todo-container .todo-list .todo.edit .delete-btn {\n  display: none;\n}\n.todo-container .todo-list .todo.edit .save-btn {\n  display: block;\n}\n\n.input-container .radio-area {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.input-container .radio-area input[type=radio] {\n  width: 0;\n  height: 0;\n  position: absolute;\n  left: -9999px;\n}\n.input-container .radio-area input[type=radio] + label {\n  padding: 0.8em 1.6em;\n  background-color: #fff;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  color: black;\n  transition: 0.2s;\n}\n.input-container .radio-area input[type=radio]:checked + label {\n  background-color: #064420;\n  color: #fff;\n}\n\n@media (max-width: 768px) {\n  body {\n    margin: 2rem 5%;\n  }\n  .input-container {\n    width: 100%;\n  }\n  .input-container .input-area,\n.input-container .radio-area {\n    width: 100%;\n  }\n  .todo-container .todo-list {\n    width: 100%;\n  }\n}");

class TodoList {
  constructor() {
    this.assignElement();
    this.addEvent();
  }
  assignElement() {
    this.inputContainerEl = document.getElementById('input-container');
    this.inputAreaEl = this.inputContainerEl.querySelector('#input-area');
    this.todoInputEl = this.inputAreaEl.querySelector('#todo-input');
    this.addBtnEl = this.inputAreaEl.querySelector('#add-btn');
    this.todoContainerEl = document.getElementById('todo-container');
    this.todoListEl = this.todoContainerEl.querySelector('#todo-list');
    this.radioAreaEl = this.inputContainerEl.querySelector('#radio-area');
    this.filterRadioBtnEls = this.radioAreaEl.querySelectorAll(
      'input[name="filter"]',
    );
  }
  addEvent() {
    this.addBtnEl.addEventListener('click', this.onClickAddBtn.bind(this));
    this.todoListEl.addEventListener('click', this.onClickTodoList.bind(this));
    this.addRadioBtnEvent();
  }

  addRadioBtnEvent() {
    for (const filterRadioBtnEl of this.filterRadioBtnEls) {
      filterRadioBtnEl.addEventListener(
        'click',
        this.onClickRadioBtn.bind(this),
      );
    }
  }

  onClickRadioBtn(event) {
    const { value } = event.target;
    this.filterTodo(value);
  }

  filterTodo(status) {
    const todoDivEls = this.todoListEl.querySelectorAll('div.todo');
    for (const todoDivEl of todoDivEls) {
      switch (status) {
        case 'ALL':
          todoDivEl.style.display = 'flex';
          break;
        case 'DONE':
          todoDivEl.style.display = todoDivEl.classList.contains('done')
            ? 'flex'
            : 'none';
          break;
        case 'TODO':
          todoDivEl.style.display = todoDivEl.classList.contains('done')
            ? 'none'
            : 'flex';
          break;
      }
    }
  }

  onClickTodoList(event) {
    const { target } = event;
    const btn = target.closest('button');
    if (!btn) return;
    if (btn.matches('#delete-btn')) {
      this.deleteTodo(target);
    } else if (btn.matches('#edit-btn')) {
      this.edtitTodo(target);
    } else if (btn.matches('#save-btn')) {
      this.saveTodo(target);
    } else if (btn.matches('#complete-btn')) {
      this.completeTodo(target);
    }
  }

  completeTodo(target) {
    const todoDiv = target.closest('.todo');
    todoDiv.classList.toggle('done');
  }

  saveTodo(target) {
    const todoDiv = target.closest('.todo');
    todoDiv.classList.remove('edit');
    const todoInputEl = todoDiv.querySelector('input');
    todoInputEl.readOnly = true;
  }

  edtitTodo(target) {
    const todoDiv = target.closest('.todo');
    const todoInputEl = todoDiv.querySelector('input');
    todoInputEl.readOnly = false;
    todoInputEl.focus();
    todoDiv.classList.add('edit');
  }

  deleteTodo(target) {
    const todoDiv = target.closest('.todo');
    todoDiv.addEventListener('transitioned', () => {
      todoDiv.remove();
    });
    todoDiv.classList.add('delete');
  }

  onClickAddBtn() {
    if (this.todoInputEl.value.length === 0) {
      alert('내용을 입력해주세요.');
      return;
    }
    this.createTodoElement(this.todoInputEl.value);
  }

  createTodoElement(value) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const todoContent = document.createElement('input');
    todoContent.value = value;
    todoContent.readOnly = true;
    todoContent.classList.add('todo-item');

    const fragment = new DocumentFragment();
    fragment.appendChild(todoContent);
    fragment.appendChild(
      this.createButton('complete-btn', 'complete-btn', ['fa', 'fa-check']),
    );
    fragment.appendChild(
      this.createButton('edit-btn', 'edit-btn', ['fas', 'fa-edit']),
    );
    fragment.appendChild(
      this.createButton('delete-btn', 'delete-btn', ['fas', 'fa-trash']),
    );
    fragment.appendChild(
      this.createButton('save-btn', 'save-btn', ['fas', 'fa-save']),
    );
    todoDiv.appendChild(fragment);
    this.todoListEl.appendChild(todoDiv);
    this.todoInputEl.value = '';
  }

  createButton(btnId, btnClassName, iconClassName) {
    const btn = document.createElement('button');
    const icon = document.createElement('i');
    icon.classList.add(...iconClassName);
    btn.appendChild(icon);
    btn.id = btnId;
    btn.classList.add(btnClassName);
    return btn;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-unused-vars
  new TodoList();
});
//# sourceMappingURL=bundle.js.map