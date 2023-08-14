import { prisma } from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    try {
        const products = await prisma.product.findMany({
            where: {
                ...(category ? { categorySlug: category } : { isFeatured: true }),
            },
        })
        return new NextResponse(JSON.stringify(products), { status: 200 })
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: 'Something wen wrong' }), { status: 500 })

    }
}