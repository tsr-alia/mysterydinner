const Stage = ({ stage }) => {
  switch (stage.type) {
    case "text":
      return <TextStage content={stage.content} />;
    case "riddle":
      return <RiddleStage riddle={stage.riddle} />;
    default:
      return null;
  }
};

const TextStage = ({ content }) => <p>{content}</p>;

const RiddleStage = ({ riddle }) => (
  <div>
    <p>{riddle.question}</p>
    <input type="text" placeholder="Your answer" />
    {/* Add logic for submitting/validating the answer */}
  </div>
);
