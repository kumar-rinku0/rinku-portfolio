"use server";

import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../lib/dbConnect";
import Info from "../../models/Info";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        dbConnect();
        const { firstname, lastname, phoneno, email } = await req.json();
        const infos = await Info.create({
            firstname,
            lastname,
            phoneno,
            email,
        }); /* create a new model in the database */
        return NextResponse.json({ success: true, info: infos });
    } catch (error) {
        return NextResponse.json({ success: false, error: error });
    }
}
