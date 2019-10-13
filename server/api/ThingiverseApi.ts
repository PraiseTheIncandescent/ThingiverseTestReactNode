import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export default class ThingiverseAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.thingiverse.com/';
    }

    getNewest = async () => await this.get('newest');
    getPopular = async () => await this.get('popular');
    getFeatured = async () => await this.get('featured');
    getVerified = async () => await this.get('verified');
    getThing = async (id: number) => await this.get(`things/${id}`);
    willSendRequest = (request: RequestOptions) => request.headers.set('Authorization', this.context.token);
}