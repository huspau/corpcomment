import Footer from "./layout/Footer.tsx";
import Container from "./layout/Container.tsx";
import HashtagList from "./hashtag/HashtagList.tsx";
import FeedbackItemsContextProvider from "../contexts/FeedbackItemsContextProvider.tsx";

export default function App() {
  return (
    <div className="app">
      <Footer />
      <FeedbackItemsContextProvider>
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}
