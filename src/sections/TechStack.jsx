import Subheading from "../ui/Subheading";
import Paragraph from "../ui/Paragraph";
import RunningLogosComponent from "../components/RunningLogosComponent";

export default function TechStack() {
  return (
    <>
      <div className="px-5">
        <Subheading>My TechStack</Subheading>
        <Paragraph>
          These are the technologies that i'm currently using on software
          engineering. and I'm planning to add more technologies under my belt
          that would make me a better software engineer and would potentially
          make me stand out to the rest.
        </Paragraph>
      </div>
      <RunningLogosComponent />
    </>
  );
}
