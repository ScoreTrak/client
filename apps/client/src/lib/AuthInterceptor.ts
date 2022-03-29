import { getToken } from "./token"

export default class AuthInterceptor {
    private token: string;

    constructor(token: string) {
        this.token = token
    }

    public intercept = (request: any, invoker: any) => {
        if (this.token.length > 0) {
            const metadata = request.getMetadata()
            metadata.authorization = this.token
        }
        return invoker(request)
    }
}