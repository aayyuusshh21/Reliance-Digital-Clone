import { Box, Button, Flex, Image, Text} from "@chakra-ui/react"
import { FaCartPlus } from "@chakra-ui/icons"

const Products = () => {
  return (
    <Box w="100%" h="60" bg="blue.500" rounded="xl" overflow="hidden" boxShadow="dark-lg">
          <Image w="100%" h="60" fit="cover" src="https://www.reliancedigital.in/medias/boAt-Stone-Grenade-Speaker-491893336-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MzI1MDl8aW1hZ2UvcG5nfGltYWdlcy9oMWYvaDI0Lzk3NzUyNzYwNjQ3OTgucG5nfDE1M2UxZjljY2Y2MDFmYWM4NGU1ZTUzNTdmMTQxOGIzNjExNzllY2MzODEzODBlNDMzOGMyYWE1OTMzYjFhMDg"></Image>
      </Box>
    
  )
}

export default Products