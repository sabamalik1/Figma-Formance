
import './App.css';
import Chapters from './components/Chapters';
import FeatureReview from './components/FeatureReview';
import Footer from './components/Footer';
import Header from './components/Header';
import InformationSection from './components/InformationSection';
import MarketingStrategies from './components/MarketingStrategies';
import RelatedCourses from './components/RelatedCourses';

function App() {
  return (
    <>
    <div className='w-[1440px] h-[2645px] ml-auto mr-auto  ' >
     <div>
      <Header />
    
      <MarketingStrategies />
      <InformationSection />
      <Chapters />
      <FeatureReview />
      <RelatedCourses />
      <Footer />
      
     </div>
    </div>
    </>
    
  );
}

export default App;
