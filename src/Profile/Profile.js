import React from 'react'
import propTypes from 'prop-types'; 

const Profile = (props) => {
    return (
        <div>
            {props.fullName}
            <br/>
            {props.bio}
            <br/>
            {props.profession}
            <br/>
            {props.children}
        </div>
    )
}

Profile.propTypes={
    fullName: propTypes.string
}

Profile.defaultProps={
    n:"Dh"
}
export default Profile

