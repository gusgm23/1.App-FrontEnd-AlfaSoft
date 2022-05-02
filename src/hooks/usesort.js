import React, { useState, useEffect } from 'react'

export const useSortTable = (listToSort, originalKey) => {
    // definimos un estado
    const [list, setList] = useState(listToSort)
  
    // definimos la función anterior pero sin especificar la lista ya que será la principal
    const sort_lists = (key, inverse) =>
      inverse
        ? [...list].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
        : [...list].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
  
    // ordenamos la lista con el useEffect
    useEffect(() => {
      setList(sort_lists(originalKey))
    }, [])
  
    // devolvemos el estado que contiene la lista
    // ..el método para actualizar el estado
    // ..y el método para ordenarla
    return [list, setList, sort_lists]
  }
