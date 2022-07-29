import SamuraiJSApp from './App';
import {createRoot} from "react-dom/client";
import {act} from "react-test-renderer";

// test('renders learn react link', () => {
//   render(<SamuraiJSApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders without crashing', ()=>{
  act(() => {
    const container = document.createElement('root');
    const root = createRoot(container);
    root.render(<SamuraiJSApp />);
    root.unmount();
  });
})
