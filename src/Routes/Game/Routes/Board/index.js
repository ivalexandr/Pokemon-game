import React, { useContext, useEffect, useState } from 'react'
import PokemonCard from '../../../../Components/PokemonCard/PokemonCard'
import { PokemonContext } from '../../../../context/PokemonContext'
import { useHistory } from 'react-router-dom'
import PlayerBoard from './components/PlayerBoard/index'
import classes from './style.module.css';
const BoardPage = () => {
    const context = useContext(PokemonContext)
    const [board, setBoard] = useState([])
    const [playerOne, setPlayerOne] = useState(() => {
        return Object.values(context.pokemons).map(item => {
            return {
                ...item,
                possession: 'blue',
            }
        })
    })
    const [playerTwo, setPlayerTwo] = useState([])
    const [choiseCard, setChoisCard] = useState(null)
    const [steps, setSteps] = useState(0)
    const counterWin = (board, playerOne, playerTwo) => {
        let playerOneCounter = playerOne.length
        let playerTwoCounter = playerTwo.length
        board.forEach(item => {
            if (item.card.possession === 'red') {
                playerTwoCounter++
            }
            if (item.card.possession === 'blue') {
                playerOneCounter++
            }
        })
        return [playerOneCounter, playerTwoCounter]
    }
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
            .then(req => {
                context.getPlayerTwoPokemons(req)
                return req
            })
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
    if (Object.keys(context.pokemons).length === 0) {
        history.replace('/game')
    }
    const clickBoardPlateHandler = async (position) => {
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
            if (choiseCard.player === 1) {
                setPlayerOne((prevState) => prevState.filter(item => item.id !== choiseCard.id))
            }
            if (choiseCard.player === 2) {
                setPlayerTwo((prevState) => prevState.filter(item => item.id !== choiseCard.id))
            }
            setBoard(request.data)
            setSteps(prevState => {
                const count = prevState + 1
                return count
            })
        }
    }
    useEffect(() => {
        if (steps === 9) {
            context.getSteps(true)
            const [count1, count2] = counterWin(board, playerOne, playerTwo)
            if (count1 > count2) {
                alert('WIN')
                context.getWin(true)
                setTimeout(() => {
                    history.replace('/game/finish')
                }, 500);
            } else if (count1 < count2) {
                alert('LOSE')
                setTimeout(() => {
                    history.replace('/game/finish')
                }, 500);
            } else {
                alert('DRAW')
                setTimeout(() => {
                    history.replace('/game/finish')
                }, 500);
            }
        }
    }, [steps])
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