import Footer from "./layout/Footer.tsx";
import Container from "./layout/Container.tsx";
import HashtagList from "./hashtag/HashtagList.tsx";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore.ts";
import { useEffect } from "react";

export default function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems,
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
}
