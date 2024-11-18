"use client";
import { Message } from "ai";
import { useChat } from "ai/react";
// import f1GPTLogo from "./assets/f1GPTLogo.jpg";
import Bubble from "./components/Bubble";
import LoadingBubble from "./components/LoadingBubble";
import PromptSuggestionRow from "./components/PromptSuggestionsRow";

const Home = () => {
  const {
    append,
    isLoading,
    messages,
    input,
    handleInputChange,
    handleSubmit,
  } = useChat();

  const noMessages = !messages || messages.length === 0;
  const handlePrompt = (promptText) => {
    const msg: Message = {
      id: crypto.randomUUID(),
      content: promptText,
      role: "user",
    };
    append(msg);
  };
  return (
    <main>
      <section className={noMessages ? "" : "populated"}>
        {noMessages ? (
          <>
            <p className="starter-text">
              Welcome to NBA GPT! Ask me anything about NBA and I'll do my
              best to help you.
            </p>
            <p>The LLM is fed with the data below</p>
            <small className="nba-data">
              "https://www.nba.com/stats",
              "https://pt.wikipedia.org/wiki/National_Basketball_Association",
              "https://pt.wikipedia.org/wiki/Lista_de_recordes_da_NBA",
            </small>
            <br />
            <PromptSuggestionRow onPromptClick={handlePrompt} />
          </>
        ) : (
          <>
            {messages.map((message, index) => (
              <Bubble key={`message-${index}`} message={message} />
            ))}
            {isLoading && <LoadingBubble />}
          </>
        )}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          className="question-box "
          onChange={handleInputChange}
          value={input}
          placeholder="Ask me ..."
        />
        <input type="submit" />
      </form>
    </main>
  );
};

export default Home;