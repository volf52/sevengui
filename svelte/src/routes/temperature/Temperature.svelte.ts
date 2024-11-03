export class Temperature {
	#c = $state(0);
	#f = $state(0);

	get c() {
		return this.#c;
	}

	get f() {
		return this.#f;
	}

	set c(c: number) {
		this.#c = c;
		this.#f = (9 / 5) * c + 32;
	}

	set f(f: number) {
		this.#f = f;
		this.#c = (f - 32) * (5 / 9);
	}
}
