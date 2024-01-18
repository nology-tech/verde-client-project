import "./EditClient.scss"
import EditClientCard from "../../components/EditClientCard/EditClientCard";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Layout from "../../components/Layout/Layout";

type EditClientProps = {
    variant: "light" | "dark"
}
const EditClient = ({variant}:EditClientProps) => {
    return(
        <Layout>
            <NavBar variant={variant} />
            <main className={`edit-page edit-page--${variant}`}>
            <Header title={"Edit Client"} variant={variant} buttonOption={true} buttonLabel={"Save"} buttonVariant={"yellow"} dropdownOption={false}/>
            <div className="edit-page--container">
            <EditClientCard variant={variant}/>
            </div>
            </main>
        </Layout>
    )
}

export default EditClient
