const useFetch = props => {
  const fetchHandler = async (config) => {
    const url = "https://react-http-655f1-default-rtdb.firebaseio.com"
    try {
      const response = await fetch(url, {
        method: config.method,
        body: JSON.stringify(),
      })
      
    } catch (error) {
      
    }
  } 

}

export default useFetch;
