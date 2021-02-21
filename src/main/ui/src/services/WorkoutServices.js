export async function getWorkouts(email) {

    var params = {userEmail: email}
    var endpoint = "/api/workouts?"
    var url = new URLSearchParams(params);

    const response = await fetch(endpoint + url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })
    return await response.json();
}

export async function getFriendsWorkouts(emails) {

  var friendsWorkouts = {}
  for(const currEmail of emails)
  {
    var params = {userEmail: currEmail}
    var endpoint = "/api/workouts?"
    var url = new URLSearchParams(params);

    const response = await fetch(endpoint + url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })
    var workouts = await response.json();
    friendsWorkouts[currEmail] = workouts
  }
  
  return friendsWorkouts;
}

export async function createWorkout(workout) {
    var endpoint = "/api/workout/create";
    
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(workout)
      })
      return response;
}


export async function deleteWorkout(workout) {
    var endpoint = "/api/workout/delete"

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(workout)
      })
    return response;
}


export async function updateWorkout(workout) {
    var endpoint = "/api/workout/update"

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(workout)
      })
    return response;
}
