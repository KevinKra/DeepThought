//we declared it as a const so it prevents naming collisions in scope.
//if it was just left inside the updateUser function it wouldnt be able to prevent scoping collisions.
export const UPDATE_USER = "users:updateUser";

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
}
