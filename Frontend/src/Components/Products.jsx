import { Select, Flex, Heading, Box, Image, Button, Spacer } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filterData, getData, sortData } from "../Redux/actions";
import { Navbar } from "./Navbar";

export default function Products() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts);
  // console.log(posts)
  useEffect(() => {

    apiCall();
  }, []);

  async function apiCall() {
    
    let data = fetch("http://localhost:8080/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
      .then((data) => {
        dispatch(getData(data));
      })
   
  }

 
  return (
    
    
    <Flex w={"100vw"} flexDirection={"column"}>
 <div style={{marginTop:"20px", border:"1px solid black"}}>
      <Flex>
  <Box  bg='red.400'>
    <Heading>AcmeFresh</Heading>
  
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'>
  <Link  onClick={() => navigate("/posts")}> HOME</Link>
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'>
    SERVICES
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'>
    PRODUCTS
  </Box>
  <Spacer />
</Flex>
    </div>






      <Flex justifyContent={"space-evenly"} flexWrap={"wrap"}>
        {posts&&posts.map((el, index) => {
          return (
            <Box
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              p={"1rem"}
              m={"1rem"}
              key={index}
            >
              <Image
                src={el.image}
                alt="posts"
                w={"400px"}
                h={"250px"}
              ></Image>
              <Box>
                
                <p>Type of Product : {el.title}</p>
              
                <Button variant="solid" colorScheme={"teal"} m={"1rem 0"}>
                  Buy Now
                </Button>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
}
