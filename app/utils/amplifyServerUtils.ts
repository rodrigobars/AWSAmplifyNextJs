import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import outputs from "@/amplify_outputs.json";

export const { runWithAmplifyServerContext } = createServerRunner({
    config: outputs
})

// export async function GetAuthCurrentUserServer() {
//     try{
//         const currentUser = await runWithAmplifyServerContext({
//             nextServerContext: { cookies },
//             operation: (context) => getCurrentUser(context)
//         })
//         return currentUser
//     }catch(err){
//         console.log(err)
//     }
// }