import axios from 'axios';
import X2JS from 'x2js';
import BggEntitiesMapperService from './bgg-entities-mapper.service';

export default class BggApiService {

     api = 'https://boardgamegeek.com/xmlapi2';  

     x2js = new X2JS({
       attributePrefix: '',
     });

     entitiesMapper = new BggEntitiesMapperService();

     getGame(gameId) {
       return axios.get(`${this.api}/thing?id=${gameId}&stats=1`).then(xml => this.x2js.xml2js(xml.data).items.item).then(json => this.entitiesMapper.parseToGameDetail(json));
     }

     getCollection(userName) {
       const self = this;

       return axios.get(`${this.api}/collection?username=${userName}&stats=1`, { responseType: 'text' }).then((xml) => {         
         return self.x2js.xml2js(xml.data).items.item;
       }).then(json => json.map(x => self.entitiesMapper.parseToCollectionItem(x)));
     }
}
