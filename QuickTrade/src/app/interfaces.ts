export interface IProduct {
    "id" : number,
    "name": string,
    "description": string,
    "price": number
}

export interface IMotor extends IProduct {
    "km": number,
    "type": string
}

export interface IInmobiliaria extends IProduct {
    "size": number,
    "bathrooms": number,
    "rooms": number,
    "locality": string
}

export interface ITecnologia extends IProduct {
    "state": string,
}