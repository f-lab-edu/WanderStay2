import React from "react";
import styled from "@emotion/styled";
import Icon from "@/src/ui-library/components/icons/svg";
import {theme} from "@/src/ui-library/theme";

interface StarReviewType {
    size: "sm" | "md" | "lg";
    amount: number;
    variant: "Review" | "Reviews";
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: ${(props) => (props.variant === "Review" ? "0px" : "10px")};
`;

const StarReview: React.FC<StarReviewType> = ({size, amount, variant}) => {
    const sizeToIconSize = {
        sm: 12,
        md: 20,
        lg: 30,
    };

    const iconSize = sizeToIconSize[size];

    if (variant === "Review") {
        return (
            <>
                <Wrapper>
                    <Icon
                        name={"Star"}
                        width={iconSize}
                        height={iconSize}
                        viewBox={"0 0 30 30"}
                        color={theme.color.brand.brand500}
                    />
                </Wrapper>
            </>
        );
    }

    const brand500Stars = Math.floor(amount);
    const black100Stars = 5 - brand500Stars;

    return (
        <>
            <Wrapper>
                {[...Array(brand500Stars)].map((_, index) => (
                    <Icon
                        key={index}
                        name={"Star"}
                        width={iconSize}
                        height={iconSize}
                        viewBox={"0 0 30 30"}
                        color={theme.color.brand.brand500}
                    />
                ))}

                {[...Array(black100Stars)].map((_, index) => (
                    <Icon
                        key={index + brand500Stars}
                        name={"Star"}
                        width={iconSize}
                        height={iconSize}
                        viewBox={"0 0 30 30"}
                        color={theme.color.black.black100}
                    />
                ))}
            </Wrapper>
        </>
    );
};

export default StarReview;
