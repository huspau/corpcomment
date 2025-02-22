import Pattern from "../Pattern.tsx";
import Logo from "../Logo.tsx";
import PageHeading from "../PageHeading.tsx";
import FeedbackForm from "../feedback/FeedbackForm.tsx";

type HeaderProps = {
  handleAddToList: (text: string) => void;
};

export default function Header({ handleAddToList }: HeaderProps) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
}
