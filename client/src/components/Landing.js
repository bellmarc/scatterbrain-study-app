import React, {useContext} from 'react';
import {userSessionContext} from '../Providers/UserSession/UserSession'

const Landing = (props) => {
  const user = useContext(userSessionContext)
  
  return (
      <div>
          Landing
          <button onClick={
            () => {
              user.addNewUserToServer({name:'Jonathan', interests: "dogs"}).then(
                newUser => {
                  console.log(newUser)
                }
              )
            }
          }>Add User Jonathan</button>
          <button onClick={
            () => {
              user.getUserFromServerById('5da8c7d2bf600724161ab151').then(
                user => {
                  console.log(user)
                }
              )
            }
          }>Get Users</button>
          <button onClick={
            () =>{
              console.log(user.getUserFromBrowser())
            }
          }>Get LocalStorage</button>
          <button onClick={
            () => {
              user.addUserToBrowser({user:"Randon"})
            }
          }>Set User in LocalStorage</button>
      </div>
  )
}

export default Landing