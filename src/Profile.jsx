 function Profile(props) {

    return (
        <div className="flex border border-1 rounded p-2 flex-col">
            <h2>Student profile</h2>
            <div>
                {/* <div style={{backgroundImage:`url(${profileImage})`}}> */}
                <img src = {props.imgAdd} alt="" />
                <h3>Name: {props.name}</h3>
                <p>age: {props.age}</p>
                <p>Email: {props.emailAdd}</p>
            </div>
        </div>

    )
}

export default Profile