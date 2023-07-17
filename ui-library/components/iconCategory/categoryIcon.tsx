import Image from "next/image";
import * as category from "./categoryImage";
import styled from "@emotion/styled";

interface CategoryIconProps {
    name: keyof typeof category;
    size: 'small' | 'medium';
}

const IconBackground = styled.div<CategoryIconProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => (props.size === 'small' ? '44px' : '70px')};
    height: ${props => (props.size === 'small' ? '44px' : '70px')};
    padding: 10px;
    background: #fafafa;
    border-radius: 25px;
`;

const ImageWithShadow = styled(Image)`
    filter: drop-shadow(0px 4px 10px rgba(59, 125, 21, 0.3));
`;

const sizeMap: { [key in CategoryIconProps['size']]: number } = {
    small: 24,
    medium: 40
};

const CategoryIcon = ({name, size = 'small'}: CategoryIconProps) => {
    const iconSize = sizeMap[size] || parseInt(size);

    return (
        <IconBackground size={size}>
            <ImageWithShadow
                src={category[name]}
                alt={name}
                width={iconSize}
                height={iconSize}
                quality={100}
                placeholder="blur"
            />
        </IconBackground>
    );
};

export default CategoryIcon;
