// pagina para visualizar o perfil
// name
// id
// bio

import { useState } from "react"


function Profile() {

    const [user, setUser] = useState({
        name: "felipe",
        bio: "Aluno de react",
        id: 1
    })

    return (
        <div>
            <h1>Profile</h1>
            <span>{user.name}</span>
            <p>{user.bio}</p>
        </div>
    )
}

export default Profile