import { NextResponse } from "next/server";
import Configuration from 'openai'
import OpenAIApi from 'openai'



const configuration:any = new Configuration({
    organization: "org-DmerK93fWLoOJTYgsNyPrYIK",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
async function main() {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: "Say this is a test.",
      max_tokens: 7,
      temperature: 0,
    });
  
    console.log(response.choices[0].text);
  } 
  main();
export async function GET(request: Request,res:Request) {
    try {
        
        return NextResponse.json({message:"ok"},{status:200});
        
    } catch (error) {
        return NextResponse.json({message:"Error",error},{status:500})
    }
}
