import { useMutation } from '@tanstack/react-query';
import { phoneLoginService, phoneVerificationService } from '@/services';

export const usePhoneLoginMutation = (
    handleError: (data: Error) => void,
    handleSuccess: () => void,
) => {
    return useMutation({
        mutationKey: ['phoneLogin'],
        mutationFn: async (phoneNumber: string) => {
            const data = await phoneLoginService(phoneNumber);
            return data;
        },
        onSuccess: handleSuccess,
        onError: handleError
    })
}

export const usePhoneVerifyMutation = (
    handleError: (data: Error) => void,
    handleSuccess: () => void
) => {
    return useMutation({
        mutationKey: ['phoneLogin'],
        mutationFn: async ({phoneNumber, accessCode}: {phoneNumber: string, accessCode: string}) => {
            const data = await phoneVerificationService(phoneNumber, accessCode);
            return data;
        },
        onSuccess: handleSuccess,
        onError: handleError
    })
}