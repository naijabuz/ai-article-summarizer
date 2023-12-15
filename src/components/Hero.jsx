import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="app-logo" className="object-contain w-28" />

        <button
          type="button"
          className="black_btn"
          onClick={() =>
            window.open("https://github.com/naijabuz/ai-article-summarizer")
          }
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize articles with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">OpenAi GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading by summarizing your lengthy articles into clear
        and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
