import React from 'react';
import styled from "@emotion/styled";
import Icon from '@/src/ui-library/components/icons/svg';
import {theme} from "@/src/ui-library/theme";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 5px;
`

const DestinationTitle = styled.span`
  line-height: 25px;
  color: white;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
`

const DestinationInformation = () => {
    return (
        <Wrapper>
            <Icon
                name={"Location"}
                color={theme.color.black.black0}
            />
            <DestinationTitle>여행지명</DestinationTitle>
        </Wrapper>
    )
}

export default DestinationInformation