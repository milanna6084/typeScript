import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: number,
    readonly prodContry: string[],
    readonly genre: string[],
    readonly timeInMin: number,
    readonly slogan: string,
  ) { }
}
