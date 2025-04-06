import { CoctailRepository } from '../../domain/ports/CoctailRespository';
import { Coctail } from '../../domain/entities/Coctail';

export class CoctailService {
  constructor(private readonly coctailRepo: CoctailRepository) {}

  async getCoctails(name: string): Promise<Coctail[]> {
    return this.coctailRepo.findByName(name);
  }
}