import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll() {
    return this.movies;
  }

  getOne(id: string) {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }

  deleteOne(id: string): boolean {
    this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }

  create(movieData) {
    return this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
