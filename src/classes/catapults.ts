import ICharacteristics from './characteristics.interface'

export default class Catapults implements ICharacteristics {
	cost: number
	speed: number

	constructor() {
		this.cost = 0
		this.speed = 3
	}
}