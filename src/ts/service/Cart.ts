import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  amount(): number {
    return this._items.reduce((prevAmount: number, item: Buyable): number => (
      prevAmount + item.price
    ), 0);
  }

  amountWithDiscount(discount: number): number {
    return this.amount() * (1 - discount / 100);
  }

  remove(id: number): void | never {
    const index = this._items.findIndex((item: Buyable): number | boolean => item.id === id);

    if (index === -1) {
      throw new Error("There isn't item with this id in the cart");
    }

    this._items.splice(index, 1);
  }
}
