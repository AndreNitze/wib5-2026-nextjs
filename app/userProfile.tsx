import {useState} from "react";

export function UserProfile() {
    const [user, setUser] = useState(
        {
            firstName: "André",
            lastName: "Nitze",
            email: "nitze@th-brandenburg.de"
        }
    )
    return <div>
        <h1>Hallo, {user.firstName}!</h1>
        <p>{user.email}</p>
        <input type="text" value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} />
    </div>
}