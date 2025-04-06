import { Coctail } from '../entities';

export interface CoctailRepository {
  findByName(name: string): Promise<Coctail[]>;
}