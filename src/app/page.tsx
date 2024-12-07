'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div>
      <Button onClick={()=>{console.log("hello world")}}>CLick me</Button>
    </div>
  )
}

export default page
