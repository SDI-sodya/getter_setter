class Employer {
	#name;
	#last;
	#hourlyWages;
	constructor(name, last, gender, hourlyWages, hoursCount) {
		this.#name = name;
		this.#last = last;
		this.gender = gender;
		this.#hourlyWages = hourlyWages;
		this.hoursCount = hoursCount;
	}

	paySalary() {
		return this.#hourlyWages * this.hoursCount;
	}

	setName(newName) {
		if (typeof newName !== "string") {
			throw new TypeError("Wrong type of data");
		}
		this.#name = newName;
	}

	setLast(newLast) {
		if (typeof newLast !== "string") {
			throw new TypeError("Wrong type of data. Must be 'string'");
		}
		this.#last = newLast;
	}

	setGender(newGender) {
		if (typeof newGender !== "integer" || isNaN(newGender)) {
			throw new TypeError("Wrong type of data. Must be 'integer'");
		}
		this.gender = newGender;
	}

	setHourlyWages(newHourlyWages) {
		if (typeof newHourlyWages !== "integer" || isNaN(newHourlyWages)) {
			throw new TypeError("Wrong type of data. Must be 'integer'");
		}
		this.#hourlyWages = newHourlyWages6;
	}

	setHoursCount(newHoursCount) {
		if (typeof newHoursCount !== "integer" || isNaN(newHoursCount)) {
			throw new TypeError("Wrong type of data. Must be 'integer'");
		}
	}

	getFullName() {
		return `${this.#name} ${this.#last}`;
	}

	getName() {
		return this.#name;
	}
	getLast() {
		return this.#last;
	}
	getGender() {
		return this.gender;
	}
	getHourlyWages() {
		return this.#hourlyWages;
	}
	getHoursCount() {
		return this.hoursCount;
	}
}

const employer1 = new Employer("Sam", "Piterson", "male", 100, 10);
