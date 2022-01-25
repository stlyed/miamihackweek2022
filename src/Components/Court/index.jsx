import { Wrapper, Amount } from './styles';

import Image from '../../Images/un.png'

function Court(props) {
    console.log(props)
    const {image, shadow_color, yield_value, all_yield_value } = props;
    const textShadow = shadow_color ? `1px 1px 2px ${shadow_color}` : 'none'
    return (
        <Wrapper>
            <Amount>
                <img src={image} width={50} height={50}/>
            </Amount>
            <Amount style={{textShadow}}>{yield_value?yield_value:'- -'} SOL</Amount>
            <Amount style={{textShadow}}>{all_yield_value?all_yield_value:'- -'} SOL</Amount>
        </Wrapper>
    );
}

export default Court;
