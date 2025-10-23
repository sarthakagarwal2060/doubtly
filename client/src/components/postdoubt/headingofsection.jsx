import { Box, Text, TextArea } from "@radix-ui/themes";
import { forwardRef } from 'react';

const HeadingOfSection = forwardRef(({ name, placeholder, isLarge }, ref) => {
  return (
    <Box className="mb-6">
      <Text as="label" size="3" weight="bold" className="block mb-2">
        {name}
      </Text>
      <TextArea 
        placeholder={placeholder}
        ref={ref}
        className={`w-full ${isLarge ? 'h-[150px]' : 'h-[50px]'} resize-none`}
        size="3"
      />
    </Box>
  );
});

export default HeadingOfSection;
