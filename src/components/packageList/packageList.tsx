import React from 'react';
import styled from '@emotion/styled';
import Image from "next/image";
import {theme} from "@/src/ui-library/theme";
import StarReview from "@/src/components/starReview/starReview";
import Icon from "@/src/ui-library/components/icons/svg";

const PackageListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`

const PackageListContent = styled.li`
  display: flex;
  justify-content: space-between;
  column-gap: 14px;
  max-width: 315px;
  width: 100%;
  max-height: 155px;
  height: 100%;
  background: ${({theme}) => theme.color.black0};
  padding: 16px;
  border: 1px solid ${({theme}) => theme.color.black.black100};
  border-radius: 20px;
`

const PackageListImages = styled(Image)`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
`

const PackageDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  > *:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const PackageListItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const PackListTitle = styled.h2`
  line-height: ${({theme}) => theme.typography.lineHeights.line600};
  color: ${({theme}) => theme.color.black.black900};
  font-size: ${({theme}) => theme.typography.fontSizes.size300};
  font-weight: ${({theme}) => theme.typography.fontWeights.medium};
  letter-spacing: ${({theme}) => theme.typography.letterSpacings.spacing300};
`

const WishlistIconWrapper = styled.div`
  cursor: pointer;
`;

const PackListPrice = styled.p`
  line-height: ${({theme}) => theme.typography.lineHeights.line700};
  color: ${({theme}) => theme.color.secondary};
  font-size: ${({theme}) => theme.typography.fontSizes.size200};
  font-weight: ${({theme}) > theme.typography.fontWeights.regular};
  letter-spacing: ${({theme}) => theme.typography.letterSpacings.spacing200};
`

const StarReviewWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  column-gap: 5px;
  max-width: 97px;
  width: 100%;
`

const PackageScore = styled.div`
  line-height: ${({theme}) => theme.typography.lineHeights.line700};
  color: ${({theme}) => theme.color.black.black900};
  font-size: ${({theme}) => theme.typography.fontSizes.size100};
  font-weight: ${({theme}) => theme.typography.fontWeights.semiBold};
  letter-spacing: ${({theme}) => theme.typography.letterSpacings.spacing100};
`

const TravelDescription = styled.p`
  width: 178px;
  max-height: 35px;
  line-height: ${({theme}) => theme.typography.lineHeights.line700};
  color: ${({theme}) => theme.color.black.black400};
  font-size: ${({theme}) => theme.typography.fontSizes.size100};
  font-weight: ${({theme}) => theme.typography.fontWeights.regular};
  letter-spacing: ${({theme}) => theme.typography.letterSpacings.spacing100};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;


const PackageList = () => {
    const formatCurrency = (price: number) => {
        return `￦ ${price.toLocaleString()}`;
    }

    return (
        <>
            <PackageListContainer>
                <PackageListContent>
                    <PackageL업istImages
                        src="/images/beach2.jpg"
                        alt="Beach"
                        width={86}
                        height={116}
                        quality={100}
                    />
                    <PackageDetails>
                        <PackageListItemHeader>
                            <PackListTitle>여행지명</PackListTitle>
                            <WishlistIconWrapper>
                                <Icon name={'Heart'} width={20} height={20} color={'#BABABA'}/>
                            </WishlistIconWrapper>
                        </PackageListItemHeader>
                        <PackListPrice>{formatCurrency(5000)}</PackListPrice>
                        <StarReviewWrapper>
                            <StarReview size={"small"} amount={4} variant={"Reviews"}/>
                            <PackageScore>4.8</PackageScore>
                        </StarReviewWrapper>
                        <TravelDescription>description</TravelDescription>
                    </PackageDetails>
                </PackageListContent>
            </PackageListContainer>
        </>
    )
}

export default PackageList