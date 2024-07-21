import "app/styles/index.scss";
import { Navigation } from 'widgets/navigation';
import { Content } from 'widgets/content';
import { Footer } from 'widgets/footer';
import { StateProvider } from "./providers/state-provider";

function App() {
  return (
    <>
      <StateProvider>
        <Navigation />
      </StateProvider>
      <Content />
      <Footer />
    </>
  );
}

export default App;
