import { PrismaClient } from '@prisma/client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';

const prisma = new PrismaClient();
const page = async ({ params }: { params: Promise<{ username: string }> }) => {
    const username = await (await params).username
    const links = await prisma.link.findMany({
        where: {
            user: {
                username: username
            }
        }
    })
    console.log(links, "server side")
    return (
        <div className='flex flex-col justify-center items-center w-full min-h-screen gap-5'>
            {links.map((link, index) => {
                return <Link key={index} className=" underline" href={link.url} ><Card>
                    <CardHeader>
                        <CardTitle>{link.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {link.url}
                    </CardContent>
                </Card>
                </Link>
            })}
        </div>
    )
}

export default page
