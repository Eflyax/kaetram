import Skill from '../skill';

import { Modules } from '@kaetram/common/network';

export default class Magic extends Skill {
	public override combat = true;

	public constructor() {
		super(Modules.Skills.Magic);
	}
}
