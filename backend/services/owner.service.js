const {db} = require('../config/firebase');
const {collection, addDoc} = require('firebase/firestore');

const userCreation = async (user) => {
    try {
        const docRef = await addDoc(collection(db, 'users'), {
            name: user.name,
            email: user.email,
            role: user.role || 'employee',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        })

        return docRef.id
    } catch (error) {
        console.error('Error creating user:', error)
    }
}