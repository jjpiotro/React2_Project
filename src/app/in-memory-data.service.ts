import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'The Shawshank Redemption' },
      { id: 12, name: 'The Green Mile' },
      { id: 13, name: 'Forrest Gump' },
      { id: 14, name: 'Pulp Fiction' },
      { id: 15, name: 'Fight Club' },
      { id: 16, name: 'Django' },
      { id: 17, name: 'Inglourious Basterds' },
      { id: 18, name: 'Snatch' },
      { id: 19, name: 'The Shining' },
      { id: 20, name: 'Alien' }
    ];
    return {movies};
  }
}