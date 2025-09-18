import React from 'react';
import HelpDesk from './tabs/HelpDesk';
import WhoWeAre from './tabs/WhoWeAre';
import WhySriLanka from './tabs/WhySriLanka';
import Guideline from './tabs/Guideline';
import OfficeMap from './tabs/OfficeMap';
import Sectors from './tabs/Sectors';
import Services from './tabs/Services';
import Contact from './tabs/Contact';



const Content = ({ activeTab }) => {
  const renderContent = () => {
    switch(activeTab) {
      case 'whoweare':
        return <WhoWeAre />;
      case 'whysrilanka':
        return <WhySriLanka />;
      case 'guideline':
        return <Guideline />;
      case 'officemap':
        return <OfficeMap />;
      case 'sectors':
        return <Sectors />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
      case 'helpdesk':
        return <HelpDesk />;

    }
  };
  
  return (
    <div className="content">
      {renderContent()}
    </div>
  );
};

export default Content;