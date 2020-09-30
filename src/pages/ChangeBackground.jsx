// Une couleur de fond et un bouton qui change la couleur de fond de la page à chaque fois que l'on clique dessus
import React, { useState, useEffect } from 'react'

const ChangeBackground = () => {
  const arrayOfColors = ["lightskyblue", "grey", "white", "lightyellow"]

  const [index, setIndex] = useState(0)
  // tab[0] -> state actuel
  // tab[1] -> fonction qui me permet de mettre à jour le state actuel (setState)

  const [info, setInfo] = useState({ creator: "Emmanuel", completed: false })
  console.log("Equivalent du render")
  const [init, setinit] = useState(true)

  useEffect(() => {
    console.log("Equivalent de componentDidMount")
    setinit(false)
    return () => {
      console.log("Equivalent de componentWillUnmount")
    }
  }, []) // Observe les dépendances dans le tableau : si une des variables de ce tableau change, useEffect a lieu

  useEffect(() => {
    console.log("Equivalent de componentDidUpdate - Pour la variable info")
  }, [info])

  return (
    <div style={{ height: "100vh", backgroundColor: arrayOfColors[index] }}>
      <button onClick={() => setIndex(currentIndex => (currentIndex + 1) % arrayOfColors.length)}>ChangeBackground</button>
      <p>Créateur de la page : {info.creator}</p>
      <button onClick={() => setInfo(currentInfo => ({ ...currentInfo, completed: !currentInfo.completed }))}>Page terminée : {info.completed.toString()}</button>
    </div>
  )
}

export default ChangeBackground