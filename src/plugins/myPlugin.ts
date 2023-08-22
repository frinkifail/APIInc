import { appendToDom, newButton, TextUIElement } from "./api";

export function myPlugin_main() {
	appendToDom(
		newButton("Testing", () => {
			alert("yo");
		})
	);
	appendToDom(new TextUIElement("Test"));
}
