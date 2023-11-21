import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/Filters/filterSelectors';
import { changeFilter } from 'redux/Filters/filterSlice';
import { FilterContainer, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">
        Знайти контакт за іменем або прізвищем
      </FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        value={filterValue}
        placeholder="Haber Serhii"
        onChange={handleFilterChange}
      />
    </FilterContainer>
  );
};
