const fetchData = async(route, method, data) =>  {
  try {
     const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if(method === "POST") {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`http://localhost:3002/api${route}`, options );

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

module.exports = {fetchData};