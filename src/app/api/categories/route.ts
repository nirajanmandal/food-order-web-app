import { prisma } from "@/utils/connect"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        const category = await prisma.category.findMany()
        return new NextResponse(JSON.stringify(category), { status: 200 })
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: 'Something wen wrong' }), { status: 500 })

    }
}