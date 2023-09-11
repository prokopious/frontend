import { sendMail } from "../../../service/mailService";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {

        await sendMail(
            "TEST",
            "dontkillme@bunnyfiedlabs.com",
            "THI IS A TEST FOR MY MEDIUM USERS"
        )
        return new NextResponse(JSON.stringify("success"), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });

    } catch (err) {
        return new NextResponse(JSON.stringify(err), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
    }
}

