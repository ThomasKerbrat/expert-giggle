import { Client } from '../entities/index';
import { IRepository } from './i-repository';

export class ClientService {
    constructor(
        private clientsRepository: IRepository<Client>,
    ) { }

    createClient(
        clientName: string,
        line1: string,
        line2: string,
        line3: string,
        zip: string,
        city: string,
        state: string,
        country: string,
    ) {
        const clientExists = this.clientsRepository.values.find(client => client.name === clientName);
        if (clientExists) {
            throw new Error('Client already exists');
        }
        const client = new Client(clientName, line1, line2, line3, zip, city, state, country);
        this.clientsRepository.add(client);
    }
}
