'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters"
    }),
    url: z.string().url({
        message: "URL must be valid"
    })
})

const page = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            url: ""
        }
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const modifiedData = {
            userId: 1,
            ...values
        }
        const res = await fetch('http://localhost:3000/api/add-link', {
            method: "POST", 
            body: JSON.stringify(modifiedData)
        })
        if(res.ok){
            alert('Link Created')
        }
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Card>
                <CardHeader>
                    <CardTitle>Create Link Card</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Link Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. My Facebook" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="url"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>URL</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. https://www.facebook.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default page
