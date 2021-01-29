export async function getWeightExercises(email) { //Call this function with simply an email as a string

    var params = {userEmail: email}
    var endpoint = "/api/weights?"
    var url = new URLSearchParams(params);

    const response = await fetch(endpoint + url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })
    return await response.json();
}

export async function getRunExercises(email) { //Call this function with simply an email as a string

    var params = {userEmail: email}
    var endpoint = "/api/runs?"
    var url = new URLSearchParams(params);

    const response = await fetch(endpoint + url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })
    return await response.json();
}

export async function createExercise(exercise) { //Call this function with a json of an exercise (see UML diagram for model classes *exclude id - which is autogenerated*)
    var endpoint;
    if(exercise.exerciseType === "Run")
    {
        endpoint = "/api/run/create"
    }
    else
    {
        endpoint = "/api/weight/create"
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(exercise)
      })
    return await response.json();
}


export async function deleteExercise(exercise) {
    var endpoint;
    if(exercise.exerciseType === "Run")
    {
        endpoint = "/api/run/delete"
    }
    else
    {
        endpoint = "/api/weight/delete"
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(exercise)
      })
    return await response.json();
}


export async function updateExercise(exercise) {
    var endpoint;
    if(exercise.exerciseType === "Run")
    {
        endpoint = "/api/run/update"
    }
    else
    {
        endpoint = "/api/weight/update"
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(exercise)
      })
    return await response.json();
}
