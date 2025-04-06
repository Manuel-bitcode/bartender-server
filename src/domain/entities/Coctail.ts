export type Ingredients = {
  name: string,
  measure: string
}

export class Coctail {
  constructor(
    public readonly id: string,
    public name: string,
    public category: string,
    public instructions: string,
    public image: string,
    public ingredients: Ingredients[]
  ) {}
}