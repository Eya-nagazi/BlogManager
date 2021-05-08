/**
 * @Date:   2021-05-06T09:56:14+01:00
 * @Last modified time: 2021-05-06T12:06:49+01:00
 */
 import BlogList from './BlogList'
import useFetch from './useFetch'
const Home = () => {
  


   const {data,isPending,Erreur}=useFetch('http://localhost:8000/blogs') ;
   return(
    <div className="Home">
    {Erreur &&<h1>{Erreur} !!!</h1>};
    {isPending&& <h1>loading....</h1>};
    {data && <BlogList  blogs={data} title="All blogs"  />}
    </div>
  )
}; 
export default Home
