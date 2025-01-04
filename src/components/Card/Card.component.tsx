import { FC } from 'react';
import { Text, CardContainer, CardData} from './Card.styles';
import { token } from '../../../styled-system/tokens';
import { Color } from '../../../panda.config'

interface Props  {
	id: number;
	name: string;
	img : string;
	color: Color;
}

const Card: FC<Props> = ({ name, img, color, }) => {
	return (
		<CardContainer style={{backgroundColor: token(`colors.${color}`)}} > 
			<CardData>
				<img src={img} alt={"pokemon img"}/>
				<Text>{name}</Text>
			</CardData>
		</CardContainer>
	);
}

export type { Props }
export { Card }
