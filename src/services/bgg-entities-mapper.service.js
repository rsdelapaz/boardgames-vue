import CollectionItem from '../entities/collection-item';
import GameDetail from '../entities/game-detail';

export default class BggEntitiesMapperService {

  parseToCollectionItem(xmlData) {

    const item = new CollectionItem();
    item.gameId = xmlData.objectid;
    item.image = xmlData.image;
    item.thumbnail = xmlData.thumbnail;
    item.yearPublished = xmlData.yearpublished;
    item.name = xmlData.name.__text || '';
    item.description = xmlData.description;
    item.numPlays = xmlData.numplays;
    item.maxPlayers = xmlData.stats.maxplayers;
    item.minPlayers = xmlData.stats.minplayers;

    if (xmlData.stats.rating) {
      item.bggRating = xmlData.stats.rating.bayesaverage
        ? parseFloat(xmlData.stats.rating.bayesaverage.value)
        : null;
      item.averageRating = xmlData.stats.rating.average ? parseFloat(xmlData.stats.rating.average.value) : null;
      item.rank = xmlData.stats.rating.ranks.rank ? xmlData.stats.rating.ranks.rank.value : '';
      item.userRating = xmlData.stats.rating.value != 'N/A' ? xmlData.stats.rating.value : '';
    }

    return item;
  }

  parseToGameDetail(xmlData) {
  
    if (xmlData == null) { return null; }

    const item = new GameDetail();

    item.gameId = xmlData.id;
    item.image = xmlData.image;
    item.thumbnail = xmlData.thumbnail;
    item.yearPublished = xmlData.yearpublished ? xmlData.yearpublished.value : '';
    item.name = this.getName(xmlData.name);
    item.description = xmlData.description;
    // item.numPlays = xmlData.numplays;
    item.maxPlayers = xmlData.maxplayers.value;
    item.minPlayers = xmlData.minplayers.value;
    item.bggRating = xmlData.statistics.ratings.bayesaverage ? xmlData.statistics.ratings.bayesaverage.value : '';
    item.averageRating = xmlData.statistics.ratings.average.value;
    item.rank = this.getRanks(xmlData.statistics.ratings);
    console.log(item.rank);
    item.categories = this.getGameCategories(xmlData.link);
    item.mechanics = this.getGameMechanics(xmlData.link);
    item.designers = this.getGameDesigners(xmlData.link);
    item.artists = this.getGameArtists(xmlData.link);
    item.publishers = this.getGamePublishers(xmlData.link);
    item.userRating = xmlData.statistics.ratings.value;

    return item;
  }

  parseToGamePlay(xmlData) {

    // if (xmlData){
    //     xmlData.map
    // }

    return [];
  }

  getName(data) {
    if (Array.isArray(data)) {
      return data[0] ? data[0].value : '';
    }
    return data.value ? data.value : '';

  }

  getGameCategories(links) {
    return links.filter(x => x.type === 'boardgamecategory').map(x => x.value);
  }

  getGameMechanics(links) {
    return links.filter(x => x.type === 'boardgamemechanic').map(x => x.value);
  }

  getGameDesigners(links) {
    return links.filter(x => x.type === 'boardgamedesigner').map(x => x.value);
  }

  getGamePublishers(links) {
    return links.filter(x => x.type === 'boardgamepublisher').map(x => x.value);
  }

  getGameArtists(links) {
    return links.filter(x => x.type === 'boardgameartist').map(x => x.value);
  }

  getRanks(rating) {
    if (Array.isArray(rating.ranks.rank)) {
      return rating.ranks.rank.map(x => ({
        value: x.value,
        name: x.name,
        friendlyname: x.friendlyname,
        bayesaverage: x.bayesaverage,
      }));
    }
    const x = rating.ranks.rank;

    return [
      {
        value: x.value,
        name: x.name,
        friendlyname: x.friendlyname,
        bayesaverage: x.bayesaverage,
      },
    ];

  }
}