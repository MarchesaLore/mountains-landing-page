import { SliderMultipleItems } from '../components/Slider/SliderMultipleItems';
import { Tabs } from '../components/TabComponent/Tabs';
import React from 'react';
import ContentText from '../components/ContentText/ContentText';
import 'react-tabs/style/react-tabs.css';
import './Homepage.scss';

function Homepage() {
  return (
    <div className="Homepage">
        <div className="section hero">
        </div>
        <div className="section">
            <div id="HISTORY" className="history">
                
            <ContentText numbertoprint={"01."} title={"HISTORY"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue."}/>

                <div className="carousel-container">
                    <div className="carousel">
                        <SliderMultipleItems />
                    </div>
                </div>
    
            </div>
        </div>
        <div className="section team" id="TEAM">
                
            <ContentText numbertoprint={"02."} title={"TEAM"} content={"Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue."}/>

            <Tabs />
                
        </div>
    </div>
  );
}

export default Homepage;
