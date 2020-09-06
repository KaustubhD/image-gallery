import { useState, useEffect } from 'react'
import { storage, firestore, timestamp } from '../fire/config'

const useStorage = (file) => {
	const [progress, setProgress] = useState(0)
	const [error, setError] = useState(null)
	const [url, setUrl] = useState(null)

	useEffect(() => {
		const ref = storage.ref(file.name)
		const collectionRef = firestore.collection('images')

		ref.put(file).on(
			'state_changed',
			(snap) => {
				let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
				setProgress(percentage)
			},
			(err) => {
				setError(err)
			},
			async () => {
				const url = await ref.getDownloadURL()
				const createdAt = timestamp()
				console.log('In here', collectionRef)
				collectionRef.add({ url, createdAt })
				setUrl(url)
			}
		)
	}, [file])
	return { progress, error, url }
}

export default useStorage
