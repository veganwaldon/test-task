import {Flex, Select} from '@chakra-ui/react'



const ConverterCalc = ({
  symbol, currency, currencyList, onCurrencyChange
}) => {
  return (
    <Flex gap="1rem" shadow="md" padding="1rem" borderRadius="lg">
   
        <Select 
        variant='unstyled' 
        size='md' 
        defaultValue={currency} 
        onChange={(e) => onCurrencyChange(e.target.value)}>
            {currencyList.map((currency) => (
                <option key={currency} value={currency}> 
                {currency} - {symbol[currency]}
                </option>
            ))}
        </Select>

    </Flex>
  );
};

export default ConverterCalc;