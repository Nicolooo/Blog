import Head from 'next/head'
import { gql, GraphQLClient } from "graphql-request";
import Card from '/comp/Posts/Card'
import { Heading,SimpleGrid } from '@chakra-ui/layout';
export const getStaticProps = async () => {
  const url = "https://api-eu-central-1.graphcms.com/v2/ckv4b4jfm3b0w01xlbkmv5dv1/master";
  const graphQlClient = new GraphQLClient(url, {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzUwMjQwODksImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrdjRiNGpmbTNiMHcwMXhsYmttdjVkdjEvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMTEyNmJhODQtNjdlMC00OThhLTkwM2ItOTBjZjE0NjJkZDg2IiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.eWXNOr2TwswHdmh7PcHOJ1iEzcsTYeACbVbD55Ra0Z5khPwNr3w0LoayRq1oI0GpnD_J1q2RO8xe-I4F8TClXd5NFJCVFbA78JlAloBAvtWP_Gfl6c5Nig9-wwGMd0GUwFvN8Cj7vlStc53hi3tu1AHiiGtE1G4VQ0yp4gCpx_8Op6H8JxHzJxKGUtqIsooVrhsSuFla0Rtp5aLvZ79TZLg3afZjfnJBeO7XTPumPcdE2JUlCjqH1poE0I0zefsIp1oN4J0M2xIn9fgtQaDm4haEP1ZWiQ__u7cJ1F1pVsEB5juFwWFe3rB5WWZuC1e9jJ64nFojkwVawxOhlirudAZA04LnquKmBhOxVSj-JetQesYhP0-0hJPMZn3Bms-JeNoUDeoE2WFNZtgLhze2tBsJtL7XPrYE3Cj9JUf-cfqb-TQ1XzZMKWN7LBImvgKnh-R4MFLPnIY9DkoL6DJJil779y8fiF3bMtzmpyHFmLG0Frg17UZ0mZSfs_wGDVoPsrs8uRvGRvHz6GFO9o1KUD34o8nuruz5YChBCXyybJKiq2g0bNmBVyqegYXOBZqZUAED4mZ0n-yXd0E5VPbm_wHTBYAEzLxYdBMijmMXlhLM8Z9iQwogSChI-8S80OyN2G5O2CYlx6wSQ0qJB_drZ7EBtJlSOuQi1Fq7cKWCfd0"
    },
  });
  console.log()
   const query = gql`
    query {
      posts {
        id,
        createdAt,
        title,
        content{
          text,
        },
        date,
        slug,
        tags,
        excerpt,
        coverImage {
          url,
      
        }
        author {
          name
        }
      }
    }


  `;
  const data = await graphQlClient.request(query);
  console.log(query)
   const posts = data.posts;
   console.log(data)
  return {
    props: {
      posts,
    },
  };
}
export default function Home({posts}) {
  return (
    <div>
    <Head>
      <title>Posts</title>  
    </Head>
     <Heading align={'center'} pt={10} fontSize={50}>Posts</Heading>
      <Heading as="h6" size="xs" align={'center'}>
        Posts about development and everyday life!
      </Heading>
    <SimpleGrid columns={[1, null, 3]} spacing="20px">
      {posts.map((post) => (
            <a key={post.id} href={`/posts/${post.slug}`}>
                  <Card title={post.title} tags={post.tags} date={post.date} cover={post.coverImage.url}/>
            </a>
        ))}
        </SimpleGrid>
    </div>
  )
}
