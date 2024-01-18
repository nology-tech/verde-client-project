import "./EditClient.scss"
import EditClientCard from "../../components/EditClientCard/editClientCard";

type EditClientProps = {
    variant: "light" | "dark"
}
const EditClient = ({variant}:EditClientProps) => {
    return(
        <EditClientCard variant="light"/>
    )
}

export default EditClient
