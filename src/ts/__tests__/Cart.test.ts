import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';


test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new item should be added in the cart', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  expect(cart.items.length).toBe(1);
})

test("amount of item's prices should be 4400 and 3960 with discount", () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Avengers', 1500, 2012, ['US'], ['фантастика', 'боевик', 'приключения', 'фэнтези'], 137, 'Avengers Assemble!'));

  const amount = cart.amount();

  expect(amount).toBe(4400);

  const amountWithDiscount = cart.amountWithDiscount(10);

  expect(amountWithDiscount).toBe(3960);
})

test("item with id 1008 should be removed", () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(
    1009,
    'Avengers',
    1500,
    2012,
    ['US'], ['фантастика', 'боевик', 'приключения', 'фэнтези'],
    137,
    'Avengers Assemble!',
  ));
  cart.remove(1008);

  expect(cart.items.length).toBe(2);

  try {
    cart.remove(1010);
  }
  catch (e) {
    expect(e).toBeInstanceOf(Error);
  }
});
