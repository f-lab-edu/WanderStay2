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
    border-radius: ${props => (props.size === 'small' ? '15px' : '25px')};
`;

const StyledImage = styled(Image)`
    filter: drop-shadow(0px 4px 10px rgba(59, 125, 21, 0.3));
`;

const sizeMap: { [key in CategoryIconProps['size']]: number } = {
    small: 24,
    medium: 40
};

const CategoryIcon = ({name, size = 'small'}: CategoryIconProps) => {
    if (!name in category) {
        throw new Error(`이름이 잘못 되었습니다.`);
    }

    if (size !== 'small' && size !== 'medium') {
        throw new Error('입력하신 사이즈가 없습니다.');
    }

    const iconSize = sizeMap[size] || sizeMap['small'];

    return (
        <IconBackground size={size}>
            <StyledImage
                src={category[name]}
                alt={name}
                width={iconSize}
                height={iconSize}
                quality={100}
                placeholder="blur"
                onError={(e) => console.log(e.target.name)}
            />
        </IconBackground>
    );
};

export default CategoryIcon;
