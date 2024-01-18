import Header from "../../components/Header/Header"
import Layout from "../../components/Layout/Layout"
import NavBar from "../../components/NavBar/NavBar"
import { useParams } from "react-router"
import "./ResourceItem.scss"
import Footer from "../../components/Footer/Footer"

type ResourceItemPageProps = {
    variant: "light" | "dark"
}

const { resourceId } = useParams()

const ResourceItemPage = ({variant}: ResourceItemPageProps) => {
    return (<Layout>
        <NavBar variant={variant}/>
        <main>
            <Header title={"Edit Resource"} variant={variant} buttonOption={false} buttonLabel={""} buttonVariant={"yellow"} dropdownOption={false}/>
        </main>
        <Footer variant={variant}/>

        
    </Layout>)
}

export default ResourceItemPage