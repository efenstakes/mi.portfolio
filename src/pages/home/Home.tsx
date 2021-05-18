import React from 'react'
import { useHistory } from 'react-router';
import { 
  IonContent, IonHeader, IonPage, 
  IonTitle, IonToolbar,
  IonFab, IonFabButton, IonIcon,
  IonButton,
} from '@ionic/react';
import { mailOutline } from 'ionicons/icons';

import AppBarComponent from '../../components/appbar/appbar.component'
import FooterComponent from '../../components/footer/footer.component';
import SkillsComponent from '../../components/skills/skills.component';
import VSpacerComponent from '../../components/v_spacer/v_spacer.component';
import WelcomeComponent from '../../components/welcome/welcome.component';
import WorkedWithComponent from './worked_with.component';
import ProjectsComponent from './projects.component';
import ContactsComponent from './contacts.component';


import './Home.scss';


const Home: React.FC = () => {
  const history = useHistory()

  const goToContact =()=> history.push('/contact')


  const ux =  [
    'UI/UX Design', 'Adobe XD', 'Figma', 'Adobe Illustrator',
    'Adobe PhotoShop'
  ]
  const frontend = [
    'HTML', 'CSS3', 'JS', 'TypeScript', 'React', 'Ionic', 'Angular'
  ]
  const backend = [
    'NodeJS', 'Flask', 'FastAPI', 'PHP', 'Erlang',
  ]
  const mobile = [
    'React Native', 'Flutter', 'Ionic'
  ]
  const hobbies = [
    'Designing', 'Travelling', 'Exploring'
  ]

  return (
    <IonPage>
      
      <AppBarComponent />

      <IonContent fullscreen forceOverscroll={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        

        {/* welcome */}
        <WelcomeComponent />

        <VSpacerComponent space={8} />

        {/* worked with */}
        <WorkedWithComponent />
        <VSpacerComponent space={8} />

        {/* projects */}
        <ProjectsComponent />
        <VSpacerComponent space={8} />

        {/* skills */}
        {/* ux/ui */}
        <SkillsComponent 
          title="UI/UX DESIGN"
          skills={ux}
          isAlt={false}
        />
        
        <VSpacerComponent space={5} />

        {/* frontend */}
        <SkillsComponent 
          title="Frontend"
          skills={frontend}
          isAlt={true}
        />
        
        <VSpacerComponent space={5} />


        {/* backend */}
        <SkillsComponent 
          title="Backend"
          skills={backend}
          isAlt={false} 
        />
        
        <VSpacerComponent space={5} />

        {/* mobile */}
        <SkillsComponent 
          title="Mobile"
          skills={mobile}
          isAlt={true} 
        />
        
        <VSpacerComponent space={5} />

        {/* hobbies */}
        <SkillsComponent  
          title="Hobbies"
          skills={hobbies}
          isAlt={false}
        />
        
        <VSpacerComponent space={8} />

        {/* contacts */}
        <ContactsComponent />
        <VSpacerComponent space={8} />

        {/* footer */}
        <FooterComponent />

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton size="small" onClick={goToContact}>
            <IonIcon size="small" icon={mailOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
