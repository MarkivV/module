import { ArmourType } from './armourType.enum'
import ICharacteristics from './characteristics.interface'
import ILightArmour from './lightArmour.interface'

export default class Wizards implements ICharacteristics, ILightArmour {
	cost: number
	speed: number
	armour: ArmourType.LIGHT_ARMOUR

	constructor() {
		this.cost = 5
		this.speed = 5
		this.armour = ArmourType.LIGHT_ARMOUR
	}
}