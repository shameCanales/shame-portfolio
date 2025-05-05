import Subheading from "../components/ui/Subheading";
import Paragraph from "../components/ui/paragraph";
import GithubStats from "../components/GitHubStats";

export default function Github() {
  return (
    <div className="py-14">
      <Subheading>Github Contribution Activity</Subheading>
      <Paragraph>
        Learned and started using git and GitHub as my version control system
        for the projects that i am building and it is really a game changer for
        every developers. I’m consistently updating my repositories as you can
        see in my contribution calendar and
        <a href="https://github.com/shameCanales" className="underline" target="_blank">
          {" GitHub Account"}
        </a>
        .
      </Paragraph>

      <GithubStats/>
    </div>
  );
}
