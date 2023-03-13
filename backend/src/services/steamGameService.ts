import axios from "axios";

export const getGames = async () => {
  const gamesUnformatted = await axios.get(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAMID}&include_appinfo=true&format=json`
    //http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=<format>
  );
  return gamesUnformatted.data.response.games.map((game) => ({
    name: game.name,
    playtime: game.playtime_forever,
  }));
};
