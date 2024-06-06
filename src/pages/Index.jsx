import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your New React App</Heading>
        <Text fontSize="xl">This is your starting point. Begin building something amazing!</Text>
        {session ? (
          <Button colorScheme="teal" size="lg" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button colorScheme="teal" size="lg" onClick={() => navigate("/login")}>
            Login
          </Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;