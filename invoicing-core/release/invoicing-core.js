(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global['invoicing-core'] = global['invoicing-core'] || {})));
}(this, (function (exports) { 'use strict';

class Client {
    constructor(name, line1, line2, line3, zip, city, state, country) {
        this.name = name;
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
        this.zip = zip;
        this.city = city;
        this.state = state;
        this.country = country;
    }
}

class ClientService {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository;
    }
    createClient(clientName, line1, line2, line3, zip, city, state, country) {
        const clientExists = this.clientsRepository.values.find(client => client.name === clientName);
        if (clientExists) {
            throw new Error('Client already exists');
        }
        const client = new Client(clientName, line1, line2, line3, zip, city, state, country);
        this.clientsRepository.add(client);
    }
}

class SetRepository {
    constructor() {
        this.entities = new Set();
    }
    get values() {
        return [...this.entities.values()];
    }
    has(entity) {
        return this.entities.has(entity);
    }
    add(entity) {
        if (this.entities.has(entity)) {
            return;
        }
        this.entities.add(entity);
    }
    get(entity) {
        return this.values.filter(e => e === entity)[0];
    }
    delete(entity) {
        this.entities.delete(entity);
    }
}

exports.Client = Client;
exports.ClientService = ClientService;
exports.SetRepository = SetRepository;

Object.defineProperty(exports, '__esModule', { value: true });

})));
