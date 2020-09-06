import { useEffect, useState } from 'react'
import { firestore } from '../fire/config'

const useFirestore = (collection) => {
	const [docs, setDocs] = useState([])

	useEffect(() => {
		const unSubscribe = firestore
			.collection(collection)
			.orderBy('createdAt', 'desc')
			.onSnapshot((snap) => {
				let documents = []
				snap.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id })
				})
				setDocs(documents)
			})
		return () => unSubscribe()
	}, [collection])

	return { docs }
}

export default useFirestore
