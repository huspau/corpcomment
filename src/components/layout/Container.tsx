import Header from "./Header.tsx";
import FeedbackList from "../feedback/FeedbackList.tsx";
import { TFeedbackItem } from "../../lib/types.ts";

type ContainerProps = {
  isLoading: boolean;
  errorMessage: string;
  feedbackItems: TFeedbackItem[];
  handleAddToList: (text: string) => void;
};

export default function Container({
  isLoading,
  errorMessage,
  feedbackItems,
  handleAddToList,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        isLoading={isLoading}
        errorMessage={errorMessage}
        feedbackItems={feedbackItems}
      />
    </main>
  );
}
