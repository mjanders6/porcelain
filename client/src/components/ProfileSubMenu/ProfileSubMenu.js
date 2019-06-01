import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom'
import ProfileComments from '../../pages/Profile/ProfileLevel2/ProfileComments'
import ProfileLikes from '../../pages/Profile/ProfileLevel2/ProfileLikes'

class ProfileSubMenu extends React.Component {

    render(){

        return (
            <>
            <BrowserRouter>  
                      <nav>
                    <Link to='/Profile/ProfileLevel2/ProfileComments'>Comments</Link>
                    &nbsp; &nbsp;
                    <Link to='/Profile/ProfileLevel2/ProfileLikes'>Likes</Link>   
                  </nav> 
                <Route exact path="/Profile/ProfileLevel2/ProfileComments" component={ProfileComments} />
                <Route exact path="/Profile/ProfileLevel2/ProfileLikes" component={ProfileLikes} />
                </BrowserRouter>   
              
              </>
              
              );
    }
   
    }


export default ProfileSubMenu;