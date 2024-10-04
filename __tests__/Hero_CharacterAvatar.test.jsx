import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CharacterAvatar from '@/components/home/hero/CharacterAvatar';

describe('CharacterAvatar component', () => {
    it('renders correctly when character prop is provided', () => {
        const characterName = 'test-character';
        render(<CharacterAvatar character={characterName} />);
      
        const characterImage = screen.getByAltText(characterName);
        expect(characterImage).toBeInTheDocument();
      });

    it('does not render the image when character prop is not provided', () => {
      render(<CharacterAvatar character="" />);
      
      // Ensure the image is not rendered when character prop is empty
      const characterImage = screen.queryByRole('img');
      expect(characterImage).not.toBeInTheDocument();
    });
  
    it('renders motion div when character is provided', () => {
      const characterName = 'test-character';
      render(<CharacterAvatar character={characterName} />);
      
      // Check if the motion div is in the document
      const motionDiv = screen.getByTestId('motion-div');
      expect(motionDiv).toBeInTheDocument();
    });
  });

