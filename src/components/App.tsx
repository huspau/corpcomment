import Footer from "./layout/Footer.tsx";
import Container from "./layout/Container.tsx";
import HashtagList from "./hashtag/HashtagList.tsx";
import { useEffect, useState } from "react";
import { TFeedbackItem } from "../lib/types.ts";

export default function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const filteredFeedbackItems = selectedCompany
    ? feedbackItems.filter((item) => item.company === selectedCompany)
    : feedbackItems;
  const companyList: string[] = Array.from(
    new Set(feedbackItems.map((item) => item.company)),
  );

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
      daysAgo: 0,
    };

    setFeedbackItems((prev) => [...prev, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchFeedbackItems = async () => {
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again later.");
      }

      setIsLoading(false);
    };
    fetchFeedbackItems();
  }, []);

  return (
    <div className="app">
      <Footer />
      <Container
        isLoading={isLoading}
        errorMessage={errorMessage}
        feedbackItems={filteredFeedbackItems}
        handleAddToList={handleAddToList}
      />
      <HashtagList
        companyList={companyList}
        handleSelectCompany={handleSelectCompany}
      />
    </div>
  );
}
