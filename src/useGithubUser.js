import useSWR from "swr";

export function useGithubUser(param) {
  console.log(param);
  console.log(typeof param);
  if (param == "null") {
    console.log("here");
    param = null;
  }

  const { data, error, mutate } = useSWR(
    param ? `https://api.github.com/users/${param}` : null
  );

  console.log(data);
  console.log(error);
  console.log(mutate());

  function reFetchData() {
    mutate();
  }

  if (data) {
    return {
      data,
      name: data.name,
      error: error,
      loading: !data && !error,
      onFetch: reFetchData,
    };
  } else {
    return {
      data: [],
      message: "No Data!",
      error,
      loading: !data && !error,
      onFetch: reFetchData,
    };
  }
}

// import useSWR from "swr";

// export function useGithubUser(param) {
//   console.log(param);
//   console.log(typeof param);
//   if (param == "null") {
//     console.log("here");
//     param = null;
//   }
//   // "mutate", "data", "error", "isLoading", "isValidating" in mutate object
//   // const { data, error } = useSWR(`https://api.github.com/users/${param}`, fetcher);
//   // const shouldFetch = null;

//   // function shouldFetch() {
//   //   return null;
//   // }
//   const { data, error, mutate } = useSWR(
//     param ? `https://api.github.com/users/${param}` : null
//   );
//   // const { data, error, mutate } = useSWR(
//   //   `https://api.github.com/users/${param}`
//   // );
//   console.log(data);
//   console.log(error);
//   console.log(mutate);

//   // function handleMutate() {
//   //   mutate()
//   // }

//   if (data) {
//     return { data, name: data.name, error: error, loading: !data && !error };
//   } else {
//     return { data: [], message: "No Data!", error, loading: !data && !error };
//   }

//   // function fetchData() {
//   //   console.log("function called");
//   //   const { data, error } = useSWR(
//   //     `https://api.github.com/users/${param}`,
//   //     fetcher
//   //   );
//   //   console.log(data);
//   //   console.log(error);

//   //   if (data) {
//   //     return { data, name: data.name, error: error, loading: !data && !error };
//   //   } else {
//   //     return { data: [], message: "No Data!", error, loading: !data && !error };
//   //   }
//   // }

//   // if (param !== null) {
//   //   console.log("here");
//   //   fetchData();
//   // }
// }

// // import { useEffect, useState } from "react";
// // import { useSWR } from "swr";
// import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((response) => response.json());

// export function useGithubUser(param) {
//   // console.log(param);
//   // console.log(useSWR(`https://api.github.com/users`, fetcher)); // mutate, data, error, isLoading, isValidating in mutate object
//   // console.log(useSWR(`https://api.github.com/users/${param}`, fetcher)); // mutate, data, error, isLoading, isValidating in mutate object
//   const { swrData, swrError } = useSWR(
//     `https://api.github.com/users/${param}`,
//     fetcher
//   );
//   console.log(swrData);
//   console.log(swrError);

//   // return (<div>
//   //   {!swrData && !swrError && <h3>Loading... </h3>}
//   //   {swrError && <h3>An error has occured</h3>}
//   //   {swrData && !swrError && <ul>
//   //     {swrData.map(user => (<li key={user.login}>{user.login}</li>))}
//   //     </ul>}
//   // </div>)

//   if (swrData) {
//     return {
//       data: swrData,
//       name: swrData.name,
//       error: swrError,
//       loading: !swrData && !swrError,
//     };
//   } else {
//     return {
//       data: [],
//       message: "No Data!",
//       error: swrError,
//       loading: !swrError && !swrError,
//     };
//   }

//   // const [data, setData] = useState(null);
//   // const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState(null);

//   // async function fetchData(uname) {
//   //   setLoading(true);
//   //   setError(null);
//   //   try {
//   //     const response = await fetch(`https://api.github.com/users/${uname}`);
//   //     const json = await response.json();
//   //     console.log("NEW GITHUB USER NAME: ", json.name);
//   //     if (response.status !== 200) {
//   //       setError(new Error());
//   //     }

//   //     setData(json);
//   //   } catch (error) {
//   //     console.log("Error: ", error);
//   //     setError(error);
//   //     setData(null);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // }

//   // useEffect(() => {
//   //   fetchData(param);
//   // }, [param]);

//   // if (data) {
//   //   return { data, name: data.name, error: error, loading };
//   // } else {
//   //   return { data: [], message: "No Data!", error, loading };
//   // }
// }

// import { useEffect, useState } from "react";

// export function useGithubUser(param) {
//   // console.log(param);
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // function fetchData(uname) { // no problem without 'async' and 'await'
//   async function fetchData(uname) {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`https://api.github.com/users/${uname}`);
//       const json = await response.json();
//       console.log("NEW GITHUB USER NAME: ", json.name);
//       if (response.status !== 200) {
//         setError(new Error());
//       }

//       setData(json);
//       // console.log(data);
//     } catch (error) {
//       console.log("Error: ", error);
//       setError(error);
//       setData(null);
//       // throw error;
//     } finally {
//       setLoading(false);
//     }

//     // await fetch(`https://api.github.com/users/${uname}`)
//     //   .then((response) => {
//     //     return response.json();
//     //   })
//     //   .then((json) => {
//     //     console.log("NEW GITHUB USER NAME: ", json.name);

//     //     setData(json);
//     //     console.log(data);
//     //   })
//     //   .catch((err) => {
//     //     console.log("Error: ", err);
//     //     setError(err);
//     //   })
//     //   .finally(() => {
//     //     setLoading(false);
//     //   });
//   }

//   useEffect(() => {
//     fetchData(param);
//   }, [param]);

//   if (data) {
//     return { data, name: data.name, error: error, loading };
//   } else {
//     return { data: [], message: "No Data!", error, loading };
//   }

//   // if (data) {
//   //   return {
//   //     data: data,
//   //     name: data.name,
//   //     loading: loading,
//   //     error: error,
//   //   };
//   // } else {
//   //   return {
//   //     data: [],
//   //     message: "No Data!",
//   //     error: error,
//   //   };
//   // }
// }
