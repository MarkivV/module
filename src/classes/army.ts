import Catapults from './catapults'
import Militia from './militia'
import Wizards from './wizards'

export default class Army {
	private wizards: Wizards[] = []
	private militia: Militia[] = []
	private catapults: Catapults[] = []

	constructor(amount: number) {
		this.createArmy(amount)
	}

	private createArmy(amount: number): void {
		for (let i = 0; i < amount; i++) {
			this.wizards.push(new Wizards())
			this.militia.push(new Militia())
			this.catapults.push(new Catapults())
		}
	}

	private calculateCostAndSpeed() {
		let cost = 0
		let speed = 0
		for (let e of this.wizards) {
			cost += e.cost
			speed += e.speed
		}
		for (let e of this.militia) {
			cost += e.cost
			speed += e.speed
		}
		for (let e of this.catapults) {
			cost += e.cost
			speed += e.speed
		}
		return { cost, speed }
	}

	public show(): string {
		const { cost, speed } = this.calculateCostAndSpeed()
		return 'Вартість утримання: ' + cost + ' Швидкість війська: ' + speed
	}
}