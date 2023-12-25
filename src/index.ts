interface ITodo {
    id: number;
    title: string;
}
class NoteBook{
    private _todos: ITodo[];

    constructor(private name: string) {
        this._initMain();
        this._initTodos();
    }
    private _getTodosFromLs(): void {
        this._todos = JSON.parse(localStorage.getItem(this.name)) || [];  /*Поверне масив todos або undefined*/
    }

    private _setTodosToLs(): void {
        localStorage.setItem(this.name, JSON.stringify(this._todos));
        this._initTodos();
    }

    private _deleteTodoById(id: number): void {
        this._todos = this._todos.filter((todo) => todo.id !== id);
        this._setTodosToLs();
    }

 private _initMain(): void {
        this._initForm();
        this._initTodos();
 }

 private _initTodos(): void {
this._getTodosFromLs();
let todosDiv = document.querySelector('#todo') as HTMLDivElement;
todosDiv.innerHTML = '';
this._todos.forEach((todo ) => {
    let div = document.createElement('div');
    const delButton = document.createElement('button') as HTMLButtonElement;
    delButton.innerText = 'delete';
    // delButton.addEventListener('click',() => {
    //     this._deleteTodoById(todo.id);
    // this._initTodos();
    // })
    delButton.onclick = (e) => {
        e.preventDefault();
        this._deleteTodoById(todo.id);
        this._initTodos();
    }
    div.innerText = `${todo.id})${todo.title}`;
    div.appendChild(delButton);
    todosDiv.appendChild(div);
})
 }

 private _initForm(): void {
        let form = document.forms['form'] as HTMLFormElement;
        form.onsubmit = (e) => {
            e.preventDefault();
        const input = e.target['title'] as HTMLInputElement;
        const id = this._todos.slice(-1)[0]?.id +1 || 1;
        this._todos.push({id, title: input.value});
        this._setTodosToLs();
        form.reset();
        };
    }
}

new NoteBook('noteBok1');