import Header from "../components/Header/Header";
import { PageContainer } from "./PageElements";
import Timer from "../components/Timer/Timer";
import Footer from "../components/Footer/Footer";
const Page = () => {
  return (
    <PageContainer>
      <Header />
      <Timer />
      <Footer />
    </PageContainer>
  );
};

export default Page;
