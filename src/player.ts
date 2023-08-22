export enum GeneratorType {
	points
}
class Generator {
	amount: number;
	cost: number;
	growth: number;
	type: GeneratorType;
	name: string;
	description: string;
	constructor(
		name: string,
		description: string,
		cost: number,
		growth: number,
		type: GeneratorType
	) {
		this.cost = cost;
		this.growth = growth;
		this.type = type;
		this.amount = 0;
		this.name = name;
		this.description = description;
	}
}
// const test = (a: SetGenerator_WhatToSet): null => null;
type GeneratorProperty = keyof typeof Generator.prototype;
class Player {
	points: number;
	generators: Map<string, Generator>;
	constructor() {
		this.points = 0;
		this.generators = new Map([
			[
				"TestGen",
				new Generator(
					"Test Generator",
					"Debug go brr",
					10,
					1.08,
					GeneratorType.points
				)
			]
		]);
	}
	setGenerator(gen_id: string, what_to_set: GeneratorProperty, to: any) {
		const gen = this.generators.get(gen_id);
		if (gen !== undefined) {
			//@ts-ignore
			gen[what_to_set] = to;
		} else {
			console.error("Doesn't exist.");
		}
	}
	getGenerator(gen_id: string, what_to_get?: GeneratorProperty) {
		const gen = this.generators.get(gen_id);
		if (what_to_get && gen) {
			return gen[what_to_get];
		} else {
			if (!gen) {
				console.error("Doesn't exist.");
			} else {
				return gen;
			}
		}
	}
}

const player = new Player();
export default player;
