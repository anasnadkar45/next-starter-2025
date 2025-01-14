import React from 'react'
import { auth, signOut } from '../utils/auth'
import { requireUser } from '../utils/hooks'

const dashboardRoute = async () => {
    const session = await requireUser()
    return (
        <div>
            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}
            >
                <button type="submit">Sign Out</button>
            </form>
        </div>
    )
}

export default dashboardRoute