import { Box, Text, Select } from "@radix-ui/themes";
import { forwardRef, useImperativeHandle, useState, useEffect } from 'react';

const Category = forwardRef((props, ref) => {
  const { defaultValue } = props;
  // console.log(defaultValue)
  
  const [value, setValue] = useState(defaultValue || "0");
  
  
  
  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  useImperativeHandle(ref, () => ({
    value: value
  }));

  return (
    <Box>
      {/* {console.log(defaultValue)} */}
      <Text as="label" size="3" weight="bold" className="block mb-2">
        Category
      </Text>
      <Select.Root value={value} onValueChange={setValue}>
        <Select.Trigger className="w-2/3" />
        <Select.Content>
          <Select.Group>
            {/* <Select.Label>Select Category</Select.Label> */}
            <Select.Item value="0" disabled>
              Select Category
            </Select.Item>
            <Select.Item value="maths">Maths</Select.Item>
            <Select.Item value="dsa">DSA</Select.Item>
            <Select.Item value="frontend">Frontend</Select.Item>
            <Select.Item value="backend">Backend</Select.Item>
            <Select.Item value="ai/ml">AI/ML</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Box>
  );
});

Category.displayName = 'Category';
export default Category;