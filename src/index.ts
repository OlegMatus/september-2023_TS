interface ICar{
    id?: number;
    brand: string;
    price: number;
    year: number;
}
const baseUrl = 'http://owu.linkpc.net/carsAPI/v1'
const carService = {
    getAll: (): Promise<ICar[]> => fetch(baseUrl+'/cars').then(resp => resp.json()),
    create: (car: ICar): Promise<ICar> => fetch(baseUrl + '/cars', {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json',
        }
    }).then(resp => resp.json()),
    deleteById: (id:number): Promise<Response> => fetch(baseUrl + `/cars/${id}`, {
        method: 'DELETE',
    })
}
class RenderCar{
    static run(): void{
        this._carShow();
        this._initForm();
    };

    private static async _carShow(): Promise<void>{
        const carsDiv = document.querySelector('#carsDiv')as HTMLDivElement;
        carsDiv.innerText = '';
        const cars = await carService.getAll();
        cars.forEach(car => {
            const {id, brand, year, price} = car;
            const itemDiv = document.createElement('div');
            const btn = document.createElement('button');

            itemDiv.innerText = `id:${id}/ Brand: ${brand} price= ${price} year-- ${year}`;
            btn.innerText = 'delete';

            btn.onclick = async (): Promise<void> => {
               await carService.deleteById(id);
               await this._carShow();
            }

            itemDiv.appendChild(btn);
            carsDiv.appendChild(itemDiv);

        })
    }
    private static _initForm(): void{
        const form = document.forms.namedItem('carForm');
        // const {brand, price, year} = form;
        const brand = form.brand as HTMLInputElement;
        const price = form.price as HTMLInputElement;
        const year = form.year as HTMLInputElement;

        form.onsubmit = async (ev: SubmitEvent): Promise<void> => {
            ev.preventDefault();
           await carService.create({brand: brand.value, price: +price.value, year: +year.value});
           form.reset();
           await this._carShow();
        }
    }
}
RenderCar.run()
// carService.getAll().then(resp => console.log(resp))
// carService.create({brand: 'Ford', price: 23000, year: 2022}).then(resp => console.log(resp))
// carService.deleteById(10079).then(resp => console.log(resp))