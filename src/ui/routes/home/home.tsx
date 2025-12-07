import Home from "../../components/organisms/home/home";
import Layout from "../../layout/layout";
import ViewModel from "./viewmodel";

export default function HomeRoute() {

    const {} = ViewModel();

    return (
        <Layout withHeader={true}>
            <Home />
        </Layout>
    );
}
