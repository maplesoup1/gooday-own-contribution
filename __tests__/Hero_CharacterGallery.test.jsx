import { render, screen, act , fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CharacterGallery from '@/components/home/hero/CharacterGallery';

describe('CharacterGallery component', () => {
  const mockToggleCharacter = jest.fn();

  beforeEach(() => {
    render(<CharacterGallery toggleCharacter={mockToggleCharacter} />);
  });

  it('renders 7 tiny-character elements', () => {
    const tinyCharacters = screen.getAllByTestId('tiny-character');
    expect(tinyCharacters).toHaveLength(7);
  });

  it('renders all character images', () => {
    const characterNames = ['Frank', 'Olga', 'Shutima', 'Charlotte', 'Sinem', 'Raaj', 'Max'];
    characterNames.forEach((name) => {
      const characterImage = screen.getByAltText(name);
      expect(characterImage).toBeInTheDocument();
    });
  });

  it("should toggle click", async () => {
    await act(async () => {
        const Max = screen.getByTestId("Max");
        fireEvent.click(Max);
      });
    });
});

