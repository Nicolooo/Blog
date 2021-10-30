import React from 'react'
import Head from 'next/head'
import { gql, GraphQLClient } from 'graphql-request'
import { Container, Heading } from '@chakra-ui/layout'
import { Image, Center,Box, Tag, useColorModeValue } from "@chakra-ui/react"
import { FacebookProvider, ShareButton } from 'react-facebook';

// import  '../../styles/Home.css'
export const getServerSideProps = async (pageContext) => {
  const url = "https://api-eu-central-1.graphcms.com/v2/ckv4b4jfm3b0w01xlbkmv5dv1/master";
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzUwMjQwODksImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrdjRiNGpmbTNiMHcwMXhsYmttdjVkdjEvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMTEyNmJhODQtNjdlMC00OThhLTkwM2ItOTBjZjE0NjJkZDg2IiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.eWXNOr2TwswHdmh7PcHOJ1iEzcsTYeACbVbD55Ra0Z5khPwNr3w0LoayRq1oI0GpnD_J1q2RO8xe-I4F8TClXd5NFJCVFbA78JlAloBAvtWP_Gfl6c5Nig9-wwGMd0GUwFvN8Cj7vlStc53hi3tu1AHiiGtE1G4VQ0yp4gCpx_8Op6H8JxHzJxKGUtqIsooVrhsSuFla0Rtp5aLvZ79TZLg3afZjfnJBeO7XTPumPcdE2JUlCjqH1poE0I0zefsIp1oN4J0M2xIn9fgtQaDm4haEP1ZWiQ__u7cJ1F1pVsEB5juFwWFe3rB5WWZuC1e9jJ64nFojkwVawxOhlirudAZA04LnquKmBhOxVSj-JetQesYhP0-0hJPMZn3Bms-JeNoUDeoE2WFNZtgLhze2tBsJtL7XPrYE3Cj9JUf-cfqb-TQ1XzZMKWN7LBImvgKnh-R4MFLPnIY9DkoL6DJJil779y8fiF3bMtzmpyHFmLG0Frg17UZ0mZSfs_wGDVoPsrs8uRvGRvHz6GFO9o1KUD34o8nuruz5YChBCXyybJKiq2g0bNmBVyqegYXOBZqZUAED4mZ0n-yXd0E5VPbm_wHTBYAEzLxYdBMijmMXlhLM8Z9iQwogSChI-8S80OyN2G5O2CYlx6wSQ0qJB_drZ7EBtJlSOuQi1Fq7cKWCfd0"
    },
  });
    const pageSlug = pageContext.query.slug

    const query = gql`
    query($pageSlug: String!) {
      post(where: {
        slug: $pageSlug
      }) {
       id,
    createdAt,
    title,
		content{
      text
    },
    slug,
    tags,
    coverImage {
          url
    },
    date,
         author {
          name
        },
      }
    }
    `

    const variables = {
        pageSlug,
    }

    const data = await graphQLClient.request(query, variables)
    const post = data.post

    return {
        props: {
            post
        }
    }
}

const Post = ({post}) => {
  return(
  <div className="post">
    <Head>
      <title>{post.title}</title>  
    </Head>
        <Box w="100%" p={4} p={20}>
          <Heading align={'center'}>{post.title}</Heading>
           <Heading fontSize={20} align={'Center'}>Date: {post.date}</Heading>
           <Center>
           <Heading fontSize={20}>Tags:{' '}</Heading>
           <Tag fontSize={20} align={'center'}>{post.tags}</Tag>
           </Center>
           <Center pt={10}> 
      <a href={`https://www.facebook.com/sharer.php?u=https://nicolo.wtf/posts/${post.slug}`}>Pepo</a>
          </Center>
          </Box>
            <Container pb={10}>
           <p>{post.content.text}</p>
            </Container>
             <Center> 
           <Image src={post.coverImage.url} alt="pepo" w={'15cm'}objectFit="cover" align={'center'} pb={10}/>
           </Center>
        </div>
    )
}

export default Post
