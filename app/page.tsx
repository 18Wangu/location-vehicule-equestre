import Card from './components/Card';
import SearchBar from './components/SearchBar';

export default function Home() {
  return (
    <div className='bg-gray-100 h-screen flex flex-col justify-center items-center'>
      <SearchBar />
      <div className="p-4 flex justify-center gap-5">
        <Card 
          image="/vehicule1.jpg"
          title="Van cheval - 2 places"
          location="Ecurie Antonniere"
          price={70}
          startDate="4 janv."
          endDate="11 janv."
        />
        <Card 
          image="/vehicule2.jpg"
          title="Van cheval - 1 places"
          location="Ecurie Antonniere"
          price={65}
          startDate="15 mars."
          endDate="28 mars."
        />
        <Card 
          image="/vehicule3.jpg"
          title="Van chevaux"
          location="Ecurie Antonniere"
          price={55}
          startDate="4 fev."
          endDate="19 dec."
        />
      </div>
    </div>
  );
};

/*

ou est ce que david peut voir les reservations ?
Faire une page admin avec identifiant et mot de passe pour qu'il puisse voir les reservations (recuperer de la base de donnée)

Ajouter un bouton retour en haut a gauche

*/