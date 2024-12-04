import { useParams, useSearchParams } from "react-router-dom";

const Gameplay = ({ gameData }) => {
  const { slug } = useParams(); // For the game slug
  const [searchParams] = useSearchParams(); // To extract query strings
  const character = searchParams.get("character"); // Extract 'character' from the query string

  // State to track the password input and game data
  const [password, setPassword] = React.useState("");
  const [gameData, setGameData] = React.useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchGameInfo = async () => {
      try {
        const response = await fetch(`/api/game/${slug}`);
        if (!response.ok) throw new Error("Failed to fetch game info.");

        const data = await response.json();
        setGameInfo(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchGameInfo();
  }, [slug]);

  if (error) return <p>{error}</p>;
  if (!gameInfo) return <p>Loading game info...</p>;

  // Function to handle password submission
  const handlePasswordSubmit = async () => {
    try {
      const response = await fetch(`/api/game/${slug}/character`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ character, password }),
      });

      if (!response.ok) throw new Error("Invalid password or character.");

      const data = await response.json();
      setGameData(data);
      setError(null); // Clear errors if the fetch succeeds
    } catch (err) {
      setError(err.message);
    }
  };

  // Render a password prompt if gameData is not yet loaded
  if (!gameData) {
    return (
      <div>
        <h1>{slug.replace("-", " ")}</h1>
        <p>Character: {character}</p>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handlePasswordSubmit}>Access Game</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  }

  // Render the gameplay once authenticated
  return (
    <div>
      <h1>{gameData.game.title}</h1>
      <h2>Welcome, {gameData.character.name}!</h2>
      {/* Pass the game data to your game template */}
      <GameTemplate gameData={gameData} />
    </div>
  );
};

export default Gameplay;
