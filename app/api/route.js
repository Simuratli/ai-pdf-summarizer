import { NextResponse } from "next/server";
import {Client} from '@octoai/client';
const client = new Client(process.env.OCTOAI_TOKEN)

export const POST = async (req)=> {
    const body = await req.json();
    console.log("body: ", body)


    const complation = await client.chat.completions.create({
        "model":"nous-hermes-2-mistral-7b-dpo",
        "messages":[
            {
                "role": "system",
                "content": `You are a tool that Summarizes Text with 1 or 2 sentence. Keep it simple and understandable. Text is: ${body.text}`
            },
        ]
    }) 



    return NextResponse.json({
        success:true,
        message:'Hello',
        summary:complation.choices[0].message.content
    })
}