import { e } from "../util";

type ButtonOnclickedEventHandler = typeof HTMLButtonElement.prototype.onclick;
class UIElement {
	id: string | undefined;
	className: string | undefined;
	el: HTMLElement;
	constructor(id?: string, className?: string) {
		this.id = id;
		this.className = className;
		this.el = document.createElement("a");
	}
}
class Button extends UIElement {
	el: HTMLButtonElement;
	onclick: ButtonOnclickedEventHandler;
	text: string;
	constructor(
		text: string,
		onclick: ButtonOnclickedEventHandler,
		id?: string
	) {
		super(id);
		this.className = "button";
		this.el = document.createElement("button");
		this.el.classList.add(this.className);
		this.onclick = onclick;
		this.text = text;
		this.el.textContent = this.text;
		this.el.onclick = onclick;
	}
}
export class TextUIElement extends UIElement {
	text: string;
	constructor(text: string, id?: string, className?: string) {
		super(id, className);
		this.text = text;
		this.el = document.createElement("p");
		this.el.textContent = this.text;
	}
}
export function newButton(
	text: string,
	clicked?: ButtonOnclickedEventHandler,
	id?: string
) {
	const self = new Button(text, clicked ? clicked : (_) => _, id);
	return self;
}
export function appendToDom(el: UIElement) {
	e("plugin-dom-target").appendChild(el.el);
}
