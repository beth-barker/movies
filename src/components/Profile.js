import React from 'react';
import Nav from './Nav';

function Profile(props) {
    return (
        <div>
            <Nav/>
            <h1>Profile</h1>
            <button>Watched</button>
            <button>Want to Watch</button>
        </div>
    );
}

export default Profile;