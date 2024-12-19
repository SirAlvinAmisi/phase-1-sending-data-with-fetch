// Add your code here
function submitData(name, email) {
    // 1. Prepare data
    const formData = {
      name: name,
      email: email,
    };
  
    // 2. Configuration object
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    // 3. Send the fetch request
    return fetch("http://localhost:3000/users", configObject)
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        // 4. Handle success: Append the ID to the DOM
        const body = document.querySelector("body");
        const idElement = document.createElement("p");
        idElement.textContent = `User ID: ${data.id}`;
        body.appendChild(idElement);
      })
      .catch((error) => {
        // 5. Handle error: Append error message to the DOM
        const body = document.querySelector("body");
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        body.appendChild(errorElement);
      });
  }
  