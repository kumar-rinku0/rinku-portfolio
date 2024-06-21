"use server";

import { NextRequest, NextResponse } from 'next/server'

const GET = async (req: NextRequest, res: NextResponse) => {
    return NextResponse.json({hello: ""});
}

module.exports = {
    GET
}