import React, {useState} from 'react';
import styled from "@emotion/styled";
import CategoryIcon from "@/ui-library/components/iconCategory/categoryIcon";

const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
    width: 140px;
    height: 143px;
`;

const HiddenCheckbox = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

const ToggleButton = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    color: ${({theme}) => theme.color.black.black900};
    opacity: 0.7;
    border: 2px solid ${({theme}) => theme.color.black.black100};
    border-radius: 20px;
    cursor: pointer;
    transition: all 350ms cubic-bezier(0.87, 1, 0.07, 1);

    input:checked + & {
        background-color: #fff;
        border-color: ${({theme}) => theme.color.success.success600};
        opacity: 1;
    }
`;

const CheckBoxTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: ${({theme}) => theme.typography.letterSpacings.spacing300};
`;

const CategoryList = ({name}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <>
            <CheckboxWrapper>
                <HiddenCheckbox
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <ToggleButton>
                    <CategoryIcon name={name} size={"medium"}/>
                    <CheckBoxTitle>{name}</CheckBoxTitle>
                </ToggleButton>
            </CheckboxWrapper>
        </>
    );
};

export default CategoryList;
