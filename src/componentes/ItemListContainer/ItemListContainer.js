import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import Category from '../Category/Category'
import { useParams } from 'react-router-dom'
import  Loading  from '../Loading/Loading'

import { collection, query, where, getDocs} from 'firebase/firestore' 
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({titulo}) => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams ()

    useEffect (() => {
        setLoading (true)
        const collectionRef = categoryId
        ? query (collection (db, 'items'), where ('categoria', '==', categoryId))
        : collection (db, 'items')
     
        getDocs (collectionRef)
         .then ((snapshots)=> {
            const products = snapshots.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProducts(products)
         })
         .catch(error => {
            alert(error)
         })
         .finally (() => setLoading (false))
    }, [categoryId])


    return (
        <div>
            
            <h1 className='TituloBienvenida'>{titulo}</h1>
            <Category/>
            { loading ? <Loading /> : <ItemList products={products}/> }
        </div>
    )
}

export default ItemListContainer