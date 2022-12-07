import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import profile from '../assets/3.png'

const Footer = () => {
  return (
      <Box
          bgColor={'blackAlpha.900'}
          color='whiteAlpha.700'
          minH='48'
          px='16'
          py={['16', '8']}
      >
          <Stack
              direction={['column', 'row']}
              h='full'
              alignItems={'center'}
          >
              <VStack
                  w='full'
                  alignItems={['center', 'flex-start']}
              >
              <Text fontWeight={'bold'}>About The Web Application</Text>    
              <Text fontSize={'sm'} letterSpacing='widest' textAlign={['center', 'left']}> Web Application to Fetch CryptoCurrency data in format of Charts using React libraries</Text>    
              </VStack>

              <VStack>
                  <Avatar
                      boxSize={'28'}
                      mt={['4', '0']}
                      />
                  <Text>Developer</Text>
          </VStack>    
       </Stack>   
    </Box>
  )
}

export default Footer
