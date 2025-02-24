import HashtagItem from "./HashtagItem.tsx";
import { useFeedbackItemsContext } from "../../lib/hooks.ts";

export default function HashtagList() {
  const { companyList, handleSelectCompany } = useFeedbackItemsContext();
  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return (
          <HashtagItem
            key={company}
            company={company}
            onSelectCompany={handleSelectCompany}
          />
        );
      })}
    </ul>
  );
}
