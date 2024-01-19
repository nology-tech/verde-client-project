import Header from "../../components/Header/Header"
import Layout from "../../components/Layout/Layout"
import NavBar from "../../components/NavBar/NavBar"
import { useParams } from "react-router"
import "./ResourceItem.scss"
import Footer from "../../components/Footer/Footer"
import { ResourceCardList1 } from "../../data/ResourceCardLists"
import ItemRequestCard from "../../components/ItemRequestCard/ItemRequestCard"

type ResourceItemPageProps = {
    variant: "light" | "dark"
}



const ResourceItemPage = ({variant}: ResourceItemPageProps) => {

    const { resourceId } = useParams()

const filteredResources = ResourceCardList1.filter(resource => 
    resource.id === Number(resourceId))

    return (<Layout>
        <NavBar variant={variant}/>
        <main className="resource-page">
            <Header title={"Edit Resource"} variant={variant} buttonOption={false} buttonLabel={""} buttonVariant={"yellow"} dropdownOption={false}/>
            <ItemRequestCard isRequestCard={true} id={0} variant={variant} resource={filteredResources[0]}/>
        </main>
        <Footer variant={variant}/>

        
    </Layout>)
}

export default ResourceItemPage