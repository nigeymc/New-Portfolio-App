import React from "react";
import profileImage from '../assets/images/profile-pic.jpg';

const ProfilePic = () => (
    <div>
        <span className="d-block d-lg-none"><img src="/images/nmk.svg" width="50" /></span>
        <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImage} alt="Niall McKenna" />
        </span>
    </div>
)




export { ProfilePic as default };