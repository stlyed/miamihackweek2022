import { Wrapper, Name, Amount, ProgressBox, ProgressBar, Price } from './styles';

function CollectionItem({props}) {
    return (
        <Wrapper>
            <Name>{props.name}</Name>
            <Amount>{props.amount}</Amount>
            <ProgressBox>
                {props.percentage}%<ProgressBar variant="determinate" value={props.percentage}/>
            </ProgressBox>
            <Price>{props.price}$</Price>
        </Wrapper>
    );
}

export default CollectionItem;
