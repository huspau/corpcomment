import HashtagItem from "./HashtagItem.tsx";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore.ts";

export default function HashtagList() {
  const { companyList, selectCompany } = useFeedbackItemsStore((state) => ({
    companyList: state.getCompanyList(),
    selectCompany: state.selectCompany,
  }));
  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return (
          <HashtagItem
            key={company}
            company={company}
            onSelectCompany={selectCompany}
          />
        );
      })}
    </ul>
  );
}
