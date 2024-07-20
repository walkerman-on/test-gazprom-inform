import "./index.scss";
import { Navigation } from 'widgets/navigation';
import { Content } from 'widgets/content/Content';
import { Footer } from 'widgets/footer';

function App() {
  return (
    <>
      <Navigation />
      <Content />
      <Footer />
    </>
  );
}

export default App;
