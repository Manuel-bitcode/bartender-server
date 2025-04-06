import axios from 'axios';
import { CoctailRepository } from '../../domain/ports/CoctailRespository';
import { Coctail } from '../../domain/entities/Coctail';
import { CoctailResponse } from './types';
import { coctailDbToCoctail } from '../adapter';

export class ApiCoctailRepository implements CoctailRepository {

  private apiUrl = process.env.API_COCKTAIL_DB_URL as string;

  async findByName(name: string): Promise<Coctail[]> {  
    const response = await axios.get<CoctailResponse>(`${this.apiUrl}/search.php?s=${name}`);
    const coctails =response.data.drinks.map(coctaildb=>{
      const coctail = coctailDbToCoctail(coctaildb)
      return new Coctail(coctail.id,coctail.name,coctail.category,coctail.instructions,coctail.image,coctail.ingredients)
    })
    return coctails;
  }
}