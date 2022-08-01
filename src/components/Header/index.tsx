import { Box, Button, Text, Flex } from 'native-base';
import { Dimensions } from 'react-native';

const subTitleMaxWidth = Dimensions.get('window').width / 2;

export function Header() {
  return (
    <Flex flexDirection='row' justify='space-between' align='center'>
      <Box>
        <Text fontFamily='heading' fontWeight='bold' fontSize='2xl'>
          Hey there
        </Text>
        <Text
          fontWeight='normal'
          fontSize='md'
          numberOfLines={2}
          isTruncated
          maxW={subTitleMaxWidth}
          mt={2}
          color='gray.300'
        >
          What would you like to watch today?
        </Text>
      </Box>

      <Button w='100%' maxWidth='88px' mt={8} bg='secondary.500'>
        <Text color='gray.900' fontWeight='semibold'>
          Log in
        </Text>
      </Button>
    </Flex>
  );
}
