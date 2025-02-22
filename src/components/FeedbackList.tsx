import FeedbackItem from "./FeedbackItem.tsx";
import Spinner from "./Spinner.tsx";
import ErrorMessage from "./ErrorMessage.tsx";
import { TFeedbackItem } from "../lib/types.ts";

type FeedbackListProps = {
  isLoading: boolean;
  errorMessage: string | null;
  feedbackItems: TFeedbackItem[];
};

export default function FeedbackList({
  isLoading,
  errorMessage,
  feedbackItems,
}: FeedbackListProps) {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
