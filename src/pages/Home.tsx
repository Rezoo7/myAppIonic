import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonActionSheet,
    IonInput, IonLabel, IonItem, IonIcon
} from '@ionic/react';

import {globe, search} from 'ionicons/icons';

import React, {useState} from 'react';

const Home: React.FC = () => {

    const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic App </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonButton href={"/new"} shape={"round"} color={"success"}> Nouvelle Page </IonButton>
          <br/>
          <br/>
          <IonIcon icon={globe} size={"large"}> </IonIcon>

          <IonLabel> Ville  </IonLabel>
          <IonItem>
              <IonInput type={"text"}> </IonInput>
          </IonItem>
          <br/>

          <IonIcon icon={search} size="large"> </IonIcon>
          <IonLabel> Recherche  </IonLabel>
          <IonItem>
              <IonInput type={"text"}> </IonInput>
          </IonItem>
          <br/>

          <IonButton onClick={() => setShowActionSheet(true)} expand={"block"}> Action ? </IonButton>
          <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          buttons={[ {
              text: 'Supprimer',
              role: 'Destructive',
              icon: 'trash',
              handler: () => {
                  console.log("Supprimer ! ");
              }
          },
          {
              text: 'Partager',
              icon: 'share',
              handler: () => {
                  console.log("Partager ! ");
              }
          },
          {
              text: 'Mettre en Favoris',
              icon: 'heart',
              handler: () => {
                  console.log('Favoris !');
              }
          },

          ]}
          />
      </IonContent>
    </IonPage>
  );
};

export default Home;
