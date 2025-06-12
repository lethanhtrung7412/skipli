const { fireStore } = require('../config/firebase');
const { doc, setDoc, collection, query, where, getDocs } = require('firebase/firestore');
const { generateCode } = require('../utils/random');
const { v4: uuidv4 } = require('uuid');

const userCreation = async (user) => {
    const userData = {
        name: user.name,
        email: user.email,
        phone: user.phone || '',
        role: user.role || 'employee',
        accessCode: user.accessCode || generateCode(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
    try {
        const document = doc(fireStore, 'users', uuidv4());
        await setDoc(document, userData);
        return document.id
    } catch (error) {
        console.error('Error creating user:', error)
    }
}

const createAccessCode = async (phoneNumber) => {
    try {
        const code = generateCode();
        const collectionRef = collection(fireStore, 'users');
        const q = query(collectionRef, where('phone', '==', phoneNumber));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            throw new Error('User not found with the provided phone number');
        }
        const userDoc = querySnapshot.docs[0];
        const userRef = doc(fireStore, 'users', userDoc.id);
        await setDoc(userRef, { accessCode: code, updatedAt: new Date().toISOString() }, { merge: true });
    } catch (error) {
        console.error('Error creating access code:', error);
        throw error;
    }
}

const validateAccessCode = async (phoneNumber, accessCode) => {
    try {
        const collectionRef = collection(fireStore, 'users');
        const q = query(collectionRef, where('phone', '==', phoneNumber));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            throw new Error('User not found with the provided phone number');
        }
        const userDoc = querySnapshot.docs[0];
        if (userDoc.data().accessCode !== accessCode) {
            return false;
        }
        return true
    } catch (error) {
        console.error('Error creating access code:', error);
        throw error;
    }
}

module.exports = {
    userCreation,
    createAccessCode,
    validateAccessCode
}