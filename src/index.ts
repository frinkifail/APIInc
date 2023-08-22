import "./style.css";
import player from "./player";
import { e, ElementNames } from "./util";
import { myPlugin_main } from "./plugins/myPlugin";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const update_interval = setInterval(() => {
	player.points += 1;
	e(ElementNames.POINTS).textContent = player.points.toLocaleString();
}, 200);

myPlugin_main();
