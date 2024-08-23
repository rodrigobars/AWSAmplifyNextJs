import { NextRequest, NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "./app/utils/amplifyServerUtils";
import { fetchAuthSession } from "aws-amplify/auth/server";

export async function middleware(request: NextRequest) {
    const response = NextResponse.next()

    const authenticated = await runWithAmplifyServerContext({
        nextServerContext: {request, response},
        operation: async (contextSpec: any) => {
            try{
                const session = await fetchAuthSession(contextSpec);
                return(
                    session.tokens?.accessToken !== undefined &&
                    session.tokens?.idToken !== undefined
                )
            } catch(err) {
                console.log(err)
                return false
            }
        }
    })

    if (authenticated) {
        return response
    }

    return NextResponse.redirect(new URL('/signup', request.url))
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|signup).*)"]
}