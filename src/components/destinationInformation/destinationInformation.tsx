import React from 'react';
import styled from "@emotion/styled";
import Icon from '@/src/ui-library/components/icons/svg';
import {theme} from "@/src/ui-library/theme";

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 5px;
`

const DestinationTitle = styled.span`
    line-height: 25px;
    color: white;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.12px;
`

const DestinationInformation = (props) => {
    return (
        <Wrapper>
            <Icon
                name={"Location"}
                width={16}
                height={16}
                viewBox={'0 0 16 16'}
                color={theme.color.black.black0}
            />
            <DestinationTitle>{props.destinationInfo}</DestinationTitle>
        </Wrapper>
    )
}

export default DestinationInformation