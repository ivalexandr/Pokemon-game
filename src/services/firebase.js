import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyA1QhrWIol1B56kHuOvhtyZyjO25eIm-Fg",
    authDomain: "pokemon-game-820c2.firebaseapp.com",
    databaseURL: "https://pokemon-game-820c2-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-820c2",
    storageBucket: "pokemon-game-820c2.appspot.com",
    messagingSenderId: "202135897055",
    appId: "1:202135897055:web:a40326ef1e770f8ebd3a6a"
}
firebase.initializeApp(firebaseConfig)


class Firebase {
    constructor() {
        this.fire = firebase
        this.database = this.fire.database()
    }
    getCardsDataBase = async (name) => {
        return await this.database.ref(name).once('value').then(snapshot => snapshot.val())
    }
    setCardDataBase = async (card) => {
        const newKey = this.database.ref().child('pokemons').push().key
        await this.database.ref('pokemons/' + newKey).set(card)
    }
}
export default Firebase
