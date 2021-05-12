import { IonFooter, IonText, IonToolbar } from '@ionic/react';

import './footer.component.css';


interface ComponentProps {}
const FooterComponent: React.FC<ComponentProps> = () => {
  return (
    <IonFooter>
        <IonToolbar>
            <div className="footer">
              <IonText>
                  Felix Ndunda Portfolio
              </IonText>
            </div>
        </IonToolbar>
    </IonFooter>
  );
};

export default FooterComponent;
