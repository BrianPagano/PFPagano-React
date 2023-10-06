import { useEffect, useState } from 'react'
import  ItemDetail  from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import  Loading  from '../Loading/Loading'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemDetailContainer= () => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams ()

    useEffect (() => {
        setLoading (true)
        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const products = { id: response.id, ...data }
            setProducts(products)
        })
         .catch(error => {
            alert(error)
         })
         .finally (() => setLoading (false))
    }, [itemId]) 

    return (
        <div>
         { loading ? <Loading /> : <ItemDetail {...products}/> }
        </div>
    )
}

export default ItemDetailContainer