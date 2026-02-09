export interface Game {
    id: string;
    title: string;
    slug: string;
    price: string;
    shortDescription: string;
    description: string;
    image: string;
    boxContent: string[];
    age: string;
    players: string;
    duration: string;
    category: string;
}

export const GAMES: Game[] = [
    {
        id: '1',
        title: "Azimut: L'Odyssée",
        slug: 'azimut-odyssee',
        price: '34,90 €',
        shortDescription: 'Embarquez pour une quête fantastique au cœur d’une forêt mystique.',
        description: 'Azimut: L’Odyssée est un jeu d’aventure narratif où chaque décision influence le destin de votre équipe. Explorez des contrées oubliées, affrontez des créatures légendaires et résolvez des énigmes magiques pour sauver le royaume.',
        image: '/games/azimut-odyssey.png',
        boxContent: ['1 plateau illustré', '4 figurines de héros', '120 cartes aventure', '2 dés personnalisés', 'Guide de quête'],
        age: '10+',
        players: '1 - 4 joueurs',
        duration: '45 - 90 min',
        category: 'Aventure / Fantaisie'
    },
    {
        id: '2',
        title: 'Sommets Inexplorés',
        slug: 'sommets-inexplores',
        price: '29,90 €',
        shortDescription: 'Gravissez les plus hauts sommets dans ce jeu de survie et de stratégie.',
        description: 'Préparez votre équipement, gérez votre oxygène et tracez votre route vers le sommet. Sommets Inexplorés vous plonge dans les conditions extrêmes de l’alpinisme de haut vol. Coopérez ou jouez en solo pour atteindre les sommets légendaires.',
        image: '/games/sommets-inexplores.png',
        boxContent: ['6 plateaux de montagne', '150 cartes équipement', '4 pion alpinistes', 'Jetons météo', 'Dés de survie'],
        age: '12+',
        players: '1 - 4 joueurs',
        duration: '60 - 120 min',
        category: 'Coopératif / Survie'
    },
    {
        id: '3',
        title: "Le Trésor de l'Azimut",
        slug: 'tresor-azimut',
        price: '39,90 €',
        shortDescription: 'Utilisez votre boussole pour retrouver les cités perdues.',
        description: 'Équipé de votre boussole Azimut, parcourez des cartes mystérieuses à la recherche de trésors oubliés. Un jeu de déduction et d’exploration où chaque orientation compte. Trouverez-vous le trésor avant que la jungle ne reprenne ses droits ?',
        image: '/games/tresor-azimut.png',
        boxContent: ['1 boussole fonctionnelle', '1 set de cartes topographiques', '10 jetons trésor', '4 carnets de bord', 'Figurines d’explorateurs'],
        age: '8+',
        players: '2 - 6 joueurs',
        duration: '45 - 75 min',
        category: 'Exploration / Déduction'
    }
];

export interface Impression {
    id: string;
    author: string;
    text: string;
    mood: string; // e.g., 'Aventure', 'Détente', 'Frisson'
    avatar?: string;
}

export const IMPRESSIONS: Impression[] = [
    {
        id: '1',
        author: 'Sophie T.',
        text: "Une expérience incroyable ! J'ai adoré l'immersion dans la forêt. On s'y croirait vraiment.",
        mood: 'Aventure',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
    },
    {
        id: '2',
        author: 'Marc D.',
        text: "Le matériel est de super qualité. Les figurines sont magnifiques et le gameplay est très fluide.",
        mood: 'Stratégie',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150'
    },
    {
        id: '3',
        author: 'Lucie & Thomas',
        text: "Parfait pour une soirée en couple. On a beaucoup ri et on a hâte de tester les autres scénarios.",
        mood: 'Fun',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
    },
    {
        id: '4',
        author: 'Alexandre B.',
        text: "Un vrai défi ! Les énigmes sont corsées mais logiques. Je recommande aux amateurs de casse-tête.",
        mood: 'Challenge',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'
    }
];
