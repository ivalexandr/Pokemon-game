import React, { useContext, useEffect, useState } from 'react'
import PokemonCard from '../../../../Components/PokemonCard/PokemonCard'
import { PokemonContext } from '../../../../context/PokemonContext'
import { useHistory } from 'react-router-dom'
import PlayerBoard from './components/PlayerBoard/index'
import classes from './style.module.css';
const BoardPage = () => {
    const { pokemons } = useContext(PokemonContext)
    const [board, setBoard] = useState([])
    const [playerOne, setPlayerOne] = useState(() => {
        return Object.values(pokemons).map(item => {
            return {
                ...item,
                possession: 'blue',
            }
        })
    })
    const [playerTwo, setPlayerTwo] = useState([])
    const [choiseCard, setChoisCard] = useState(null)
    useEffect(() => {
        (async function getBoard() {
            return await fetch('https://reactmarathon-api.netlify.app/api/board')
        }())
            .then(res => res.json())
            .then(req => setBoard(req.data))
            .catch(e => console.log('error', e));
        (async function playerTwoResponse() {
            return await fetch('https://reactmarathon-api.netlify.app/api/create-player')
        }())
            .then(res => res.json())
            .then(req => setPlayerTwo(() => {
                return req.data.map(item => {
                    return {
                        ...item,
                        possession: 'red',
                    }
                })
            }))
            .catch(e => console.log('error', e));
    }, [])
    const history = useHistory()
    // if(Object.keys(pokemons).length === 0){
    //     history.replace('/game')
    // }
    const clickBoardPlateHandler = async (position) => {
        // console.log(position)
        console.log(choiseCard)
        if (choiseCard) {
            const params = {
                position,
                card: choiseCard,
                board,
            }
            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });
            const request = await res.json();
            setBoard(request.data)
        }

    }
    console.log(playerOne)
    console.log(playerTwo)
    return (
        <div className={classes.root}>
            <div className={classes.playerOne}>
                <PlayerBoard
                    player={1}
                    cards={playerOne}
                    onClickCard={(card) => setChoisCard(card)}
                />
            </div>
            <div className={classes.board}>
                {
                    board.map((item) => (
                        <div
                            key={item.position}
                            className={classes.boardPlate}
                            onClick={() => !item.card && clickBoardPlateHandler(item.position)}
                        >
                            {
                                item.card && <PokemonCard {...item.card} minimize isActive />
                            }
                        </div>
                    ))
                }
            </div>
            <div className={classes.playerTwo} >
                <PlayerBoard
                    player={2}
                    cards={playerTwo}
                    onClickCard={(card) => setChoisCard(card)}
                />
            </div>
        </div>
    )
}
export default BoardPage