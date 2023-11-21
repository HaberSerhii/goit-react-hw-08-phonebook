import { useDispatch, useSelector } from 'react-redux';
import { ChangeFilter } from 'redux/filterSlice';
import { Box, Input } from '@chakra-ui/react';

export const SearchFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  return (
    <Box textAlign="center">
      <Input
        type="text"
        w={300}
        bg="rgba(0, 0, 0, 0.55)"
        border={'transparent'}
        color={'white'}
        _placeholder={{ color: 'white' }}
        marginBottom={'30px'}
        value={filter}
        onChange={evt => dispatch(ChangeFilter(evt.target.value))}
        placeholder="Пошук за ім'ям"
      />
    </Box>
  );
};
