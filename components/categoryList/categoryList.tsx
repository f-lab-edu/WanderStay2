import React, {useState} from 'react';
import styled from "@emotion/styled";
import CategoryIcon from "@/ui-library/components/iconCategory/categoryIcon";

interface CategoryType {
    type: 'row' | 'column';
    size: 'small' | 'medium';
}

const CategoryContainer = styled.ul<CategoryType>`
    display: grid;
    grid-template-columns: ${props => (props.type === 'row' ? 'repeat(6, 1fr)' : 'repeat(2, 1fr)')};
    grid-template-rows: ${props => (props.type === 'row' ? 'repeat(1, 54px)' : 'repeat(3, 143px)')};
    column-gap: ${props => (props.type === 'row' ? '10px' : '35px')};
    row-gap: ${props => (props.type === 'row' ? 'unset' : '30px')};
    width: 315px;
`;

const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
    height: 100%;
`;

const HiddenCheckbox = styled.input`
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
`;

const ToggleButton = styled.span<CategoryType>`
    display: flex;
    flex-direction: ${props => (props.type === 'row' ? 'row' : 'column')};
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    color: ${({theme}) => theme.color.black.black900};
    padding: ${props => (props.type === 'row' ? '5px 20px 5px 5px' : 'unset')};
    border: 2px solid ${({theme}) => theme.color.black.black100};
    border-radius: 20px;
    cursor: pointer;
    opacity: 0.7;
    transition: all 350ms cubic-bezier(0.87, 1, 0.07, 1);

    input:checked + & {
        background-color: ${({theme}) => theme.color.black.black0};
        border-color: ${({theme}) => theme.color.success.success600};
        opacity: 1;
    }
`;

const CheckBoxTitle = styled.span`
    font-size: ${({theme}) => theme.typography.fontSizes.size300};
    font-weight: ${({theme}) => theme.typography.fontWeights.semiBold};
    text-transform: capitalize;
    letter-spacing: ${({theme}) => theme.typography.letterSpacings.spacing300};
`;

const CategoryList = ({type, size}: CategoryType) => {
    const [checkedItems, setCheckedItems] = useState<{ [category: string]: boolean }>({});
    const categoryList = ['Beach', 'Camping', 'Fishing', 'Forest', 'Mountain', 'Ocean'];

    const handleCheckboxChange = (category) => {
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [category]: !prevCheckedItems[category]
        }));
    };

    return (
        <>
            <CategoryContainer type={type}>
                {categoryList.map((category) => (
                    <li key={category}>
                        <CheckboxWrapper>
                            <HiddenCheckbox
                                type="checkbox"
                                checked={checkedItems[category]}
                                onChange={handleCheckboxChange}
                            />
                            <ToggleButton type={type}>
                                <CategoryIcon name={category} size={size}/>
                                <CheckBoxTitle>{category}</CheckBoxTitle>
                            </ToggleButton>
                        </CheckboxWrapper>
                    </li>
                ))}
            </CategoryContainer>
        </>
    );
};

export default CategoryList;
