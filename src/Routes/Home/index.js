import { React } from 'react'
import Header from '../../Components/Header/Header'
import Layout from '../../Components/Layout/Layout'
import Footer from '../../Components/Footer/Footer'
import img from './bg1.jpg'
const HomePage = () => {
    return (
        <>
            <Header
                title='This is title'
                descr='This is description'
            />
            <Layout
                id='RULES'
                title='RULES'
                urlBg={img}
            >
                <p>
                    In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
        </p>
                <p>
                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
        </p>
            </Layout>
            <Layout
                id='CARDS'
                title='CARDS'
                colorBg='#e6e6e6'
                >
            </Layout>
            <Layout
                id='contacts'
                title='this is title in Layout'
                urlBg={img}
            >
            </Layout>
            <Footer />
        </>
    );
}
export default HomePage
