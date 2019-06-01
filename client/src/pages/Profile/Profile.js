import React, { Component } from 'react'

import Commentedpost from '../../components/commentedpost'
import ProfileSubMenu from '../../components/ProfileSubMenu'
// Need to create a add icon

class Profile extends Component {
    
    render() {
        return (
            <div>
                <h1 className="username">User Name</h1>
                <ProfileSubMenu />
               
            </div>
        )
    }
}

export default Profile;