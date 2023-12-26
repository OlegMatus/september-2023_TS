// Task-1 Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
interface IUser{
    name: string;
    surname: string;
    age: number;
}
const form = document.forms['f1'] as HTMLFormElement;
form.onsubmit = function (ev: Event) {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement

    const obj: IUser = {
        name: target.username.value,
        surname: target.surname.value,
        age: parseInt(target.age.value),
    }

    const div = document.createElement('div');
    const username = document.createElement('div');
    const surname = document.createElement('div');
    const age = document.createElement('div');

    username.innerText = `Username: ${obj.name}`;
    surname.innerText = `Surname: ${obj.surname}`;
    age.innerText = `Age: ${obj.age}`;

    div.classList.add('item', 'wrapper');

    target.username.value = '';
    target.surname.value = '';
    target.age.value = '';

    div.append(username, surname, age);
    document.body.appendChild(div);

    const strObj = JSON.stringify(obj);
    div.innerText = `${strObj}`;
}
