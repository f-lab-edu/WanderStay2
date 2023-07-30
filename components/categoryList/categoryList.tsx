import React, {useState} from 'react';
import styled from "@emotion/styled";
import CategoryIcon from "@/ui-library/components/iconCategory/categoryIcon";

interface CategoryListProps {
    layout: 'row' | 'column';
    size: 'sm' | 'md';
}

type CategoryLayout = Pick<CategoryListProps, 'layout'>;

type CategoryName = 'Beach' | 'Camping' | 'Fishing' | 'Forest' | 'Mountain' | 'Ocean';

const Wrapper = styled.ul<CategoryLayout>`
  display: grid;
  grid-template-columns: ${props => (props.layout === 'row' ? 'repeat(6, 1fr)' : 'repeat(2, 1fr)')};
  grid-template-rows: ${props => (props.layout === 'row' ? 'repeat(1, 54px)' : 'repeat(3, 143px)')};
  column-gap: ${props => (props.layout === 'row' ? '10px' : '35px')};
  row-gap: ${props => (props.layout === 'row' ? '0px' : '30px')};
  width: 315px;
`;

const CheckboxLabel = styled.label`
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

const ToggleButton = styled.button<CategoryListProps & { checked: boolean }>`
  display: flex;
  flex-direction: ${props => (props.layout === 'row' ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  color: ${({theme}) => theme.color.black.black900};
  padding: ${props => (props.layout === 'row' ? '5px 20px 5px 5px' : '0px')};
  border: 2px solid ${({theme}) => theme.color.black.black100};
  border-radius: 20px;
  cursor: pointer;
  opacity: 0.7;
  transition: all 350ms cubic-bezier(0.87, 1, 0.07, 1);

  background-color: ${({checked, theme}) => (checked ? theme.color.black.black0 : 'inherit')};
  border-color: ${({checked, theme}) =>
          checked ? theme.color.success.success600 : theme.color.black.black100};
`;

const CheckboxTitle = styled.h4`
  font-size: ${({theme}) => theme.typography.textStyles.textStyles500};
  text-transform: capitalize;
`;

const CategoryList = ({layout, size}: CategoryListProps) => {
    const [checkedItems, setCheckedItems] = useState<{ [category: string]: boolean }>({});
    const categoryList: CategoryName[] = ['Beach', 'Camping', 'Fishing', 'Forest', 'Mountain', 'Ocean'];

    const handleCheckboxChange = (category: CategoryName) => {
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [category]: !prevCheckedItems[category]
        }));
    };

    return (
        <Wrapper layout={layout}>
            {categoryList.map((category) => (
                <li key={category}>
                    <CheckboxLabel htmlFor={category}>
                        <HiddenCheckbox
                            type="checkbox"
                            id={category}
                            checked={checkedItems[category]}
                            onChange={() => handleCheckboxChange(category)}
                        />
                        <ToggleButton layout={layout} checked={checkedItems[category]}
                                      onClick={() => handleCheckboxChange(category)}>
                            <CategoryIcon name={category as CategoryName} size={size}/>
                            <CheckboxTitle>{category}</CheckboxTitle>
                        </ToggleButton>
                    </CheckboxLabel>
                </li>
            ))}
        </Wrapper>
    );
};

export default CategoryList;
