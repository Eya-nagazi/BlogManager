import { useState, useEffect } from 'react';
    const useFetch = (url) => {
      const [data, setData] = useState(null);
      const [isPending, setIsPending] = useState(true);
      const [erreur, setErreur] = useState(null);
      const abortConroller=new AbortController();
    
      useEffect(() => {
  
          fetch(url,{signal: AbortController.signal})
          .then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data from the server');
            } 
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setData(data);
            setErreur(null);
          })
          .catch(err => {
            // auto catches network / connection error
            if(err.name==='AbortError'){console.log("fetch aborted");}
            else{ setIsPending(false);
              setErreur(err.message);}
           
          })
       return ()=> abortConroller.abort();
      }, [url])
    
      return { data, isPending, erreur };
    };
     
    

export default useFetch;