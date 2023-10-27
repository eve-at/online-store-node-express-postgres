import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Fridges'},
            {id: 2, name: 'TVs'},
            {id: 3, name: 'Smartphones'}
        ]
        this._brands = [
            {id: 1, name: 'Sony'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: '12 pro', 'price': 20000, 'rating': 0, 'typeId': 3, 'brandId': 3, 'img': "6f34f488-55ca-4483-a819-ea31e1dd3372.jpg"},
            {id: 2, name: 'a51', 'price': 15000, 'rating': 0, 'typeId': 3, 'brandId': 2, 'img': "88458511-8d00-4d5e-a29a-49e7b04c413f.jpg"},
            {id: 3, name: 'Samsung 4 door fridge', 'price': 12000, 'rating': 0, 'typeId': 1, 'brandId': 2, 'img': "a7f5664e-42b3-470d-921b-b203dcbe78fe.jpg"}
        ]
        makeAutoObservable(this)
    }    

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}