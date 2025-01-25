"use server"

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server"

export async function createNewDocument() {
    // Get the session claims from Clerk
    const { sessionClaims } = await auth();


    // Check if the session claims exist (i.e., if the user is authenticated)
    if (!sessionClaims) {
        return { status: 401, message: 'Unauthorized' };
    }

    const docCollectionRef = adminDb.collection('document');
    const docRef = await docCollectionRef.add({
        title: "New Doc"
    });

    await adminDb.collection('user').doc(sessionClaims?.email!).collection('rooms').doc(docRef.id).set({
        userId: sessionClaims?.email!,
        role: 'owner',
        createdAt: new Date(),
        roomId: docRef.id
    })

    return { status: 200, message: 'Document created successfully', docId: docRef.id };
}