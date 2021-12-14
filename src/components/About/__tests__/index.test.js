import react from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from "..";

afterEach(cleanup);
describe('About', () => {
    it('should render correctly', () => {
        render(<About />);
        
    });
    it('matches snapshot DOM node structure', () => {
       
        const { container } = render(<About />);
        expect(container).toMatchSnapshot();
    }

      
    );
    });