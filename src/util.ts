export function e<T extends HTMLElement>(name: string): T {
	const el = document.getElementById(name);
	//@ts-ignore
	if (el) return el;
	//@ts-ignore
	else return document.createElement("a");
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ElementNames {
	export const POINTS = "d^points";
}
