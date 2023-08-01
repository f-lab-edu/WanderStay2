import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {getDestinationsAPI} from "@/src/lib/api/homepage";
import {DestinationType} from "@/src/pages/api/destinations/destinations";
import Image from 'next/image';
import DestinationInformation from "@/src/components/destinationInformation/destinationInformation";
import StarReview from "@/src/components/starReview/starReview";

const Wrapper = styled.ul`
    display: flex;
    justify-content: flex-start;
    column-gap: 20px;
    width: 100%;
    overflow: scroll;
`

const DestinationContent = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    row-gap: 5px;
    position: relative;
    width: 186px;
    height: 250px;
    padding: 0 12px 17.5px 21px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
`

const BackgroundImages = styled(Image)`
    z-index: -1;
`

const BackgroundGradient = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0.89) 0%, rgba(47, 47, 47, 0.00) 64.22%);
`

const DestinationTitle = styled.h3`
    line-height: 30px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.2px;
`

const StarReviewWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 5px;
    max-width: 97px;
    width: 100%;
`

const StarScore = styled.div`
    line-height: ${({theme}) => theme.typography.lineHeights.line700};
    color: ${({theme}) => theme.color.black.black0};
    font-size: ${({theme}) => theme.typography.fontSizes.size100};
    font-weight: ${({theme}) => theme.typography.fontWeights.regular};
    letter-spacing: ${({theme}) => theme.typography.letterSpacings.spacing100};
`

const DestinationList = () => {
    const [destinations, setDestinations] = useState<DestinationType[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getDestinationsAPI();
                setDestinations(response.data);
            } catch (error) {
                throw new Error(`${error}! 데이터를 가져오는데 실패했습니다.`);
            }
        }

        fetchData();
    }, []);

    return (
        <Wrapper>
            {destinations.map((destination) => (
                <DestinationContent key={destination.id}>
                    <BackgroundImages
                        src={destination.images}
                        alt={destination.destinationInfo}
                        quality={100}
                        fill={true}
                        objectFit='cover'
                        objectPostion="center"
                    />
                    <BackgroundGradient/>
                    <DestinationTitle>{destination.name}</DestinationTitle>
                    <DestinationInformation destinationInfo={destination.destinationInfo}/>
                    <StarReviewWrapper>
                        <StarReview
                            size={'sm'}
                            amount={destination.amount}
                            variant={'Reviews'}
                        />
                        <StarScore>{destination.amount}</StarScore>
                    </StarReviewWrapper>
                </DestinationContent>
            ))}
        </Wrapper>
    )
}

export default DestinationList;
