import { render, screen } from '@testing-library/react';
import Book from './Book';

test('it should build the table row from strings passed as props', () => {
    const input = {
        title: 'Title 1',
        author: 'Author 1',
        bookId: 1
      };
  render(<table><tbody><Book author={input.author} title={input.title} bookId={input.bookId}/></tbody></table>);
  const title = screen.getByText(input.title);
  expect(title).toBeInTheDocument();
   
  expect(screen.getByText(input.author)).toBeInTheDocument();
});
