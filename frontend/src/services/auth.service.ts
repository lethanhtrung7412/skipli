export const phoneLoginService = async (phoneNumber: string): Promise<string> => {
    const response = await fetch("http://localhost:3000/owner/access-code", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber})
    })
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to Login")
    }
    const data = await response.json();
    return data;
}

export const phoneVerificationService = async (phoneNumber: string, accessCode: string): Promise<string> => {
    const response = await fetch("http://localhost:3000/owner/validate-access-code", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, accessCode })
    })
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to verify code")
    }
    const data = await response.json();
    return data;
}