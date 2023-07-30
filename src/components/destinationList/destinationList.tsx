import React from 'react';
import styled from '@emotion/styled';
import DestinationInformation from "@/src/components/destinationInformation/destinationInformation";
import StarReview from "@/src/components/starReview/starReview";

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  width: 100%;
  overflow: scroll;
`

const DestinationContent = styled.li`
  position: relative;
  width: 186px;
  height: 250px;
  border-radius: 20px;
`

const DestinationTitle = styled.h3`
  line-height: 30px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.2px;
`

const DestinationList = () => {
    return (
        <Wrapper>
            <DestinationContent>
                <DestinationTitle>타이틀입니다.</DestinationTitle>
                <DestinationInformation/>
                <StarReview size={'sm'} amount={3} variant={'Review'}/>
            </DestinationContent>
        </Wrapper>
    )
}

export default DestinationList