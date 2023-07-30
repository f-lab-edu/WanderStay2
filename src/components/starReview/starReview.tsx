import React from "react";
import styled from "@emotion/styled";
import Icon from "@/src/ui-library/components/icons/svg";
import {theme} from "@/src/ui-library/theme";

interface StarOption {
    size: "sm" | "md" | "lg";
    amount: 1 | 2 | 3 | 4 | 5;
    variant: "Review" | "Reviews";
}

const StarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  column-gap: ${(props) => (props.variant === "Review" ? "0px" : "10px")};
`;

const StarReview: React.FC<StarOption> = ({size, amount, variant}) => {
    const sizeToIconSize = {
        sm: 12,
        md: 20,
        lg: 30,
    };

    const iconSize = sizeToIconSize[size];

    if (variant === "Review") {
        return (
            <>
                <StarContainer>
                    <Icon
                        name={"Star"}
                        width={iconSize}
                        height={iconSize}
                        viewBox={"0 0 30 30"}
                        color={theme.color.brand.brand500}
                    />
                </StarContainer>
            </>
        );
    }

    const brand500Stars = Math.min(amount, 5);
    const black100Stars = 5 - brand500Stars;

    return (
        <>
            <StarContainer>
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
            </StarContainer>
        </>
    );
};

export default StarReview;
