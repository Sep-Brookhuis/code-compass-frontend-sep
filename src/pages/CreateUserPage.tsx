import CreateUserPageComponent from "../components//CreateUserPageComponent.tsx";
import LogoutComponent from "../components/LogoutComponent.tsx";

function CreateUserPage() {
    return (
        <div>
            <LogoutComponent></LogoutComponent>
            <CreateUserPageComponent></CreateUserPageComponent>
        </div>
    )
}

export default CreateUserPage;