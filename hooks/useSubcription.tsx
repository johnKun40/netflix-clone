import { useEffect, useState } from "react";
import {onCurrentUserSubscriptionUpdate, Subscription} from "@stripe/firestore-stripe-payments"
import { User } from "firebase/auth";
import payments from "../lib/stripe";


function useSubcription(user: User | null) {

    const [subcription, setSubcription] = useState<Subscription | null>(null)

    useEffect(() => {
        if(!user) return

        onCurrentUserSubscriptionUpdate(payments, (snapshot) => {
            setSubcription(snapshot.subscriptions.filter((subscription) => subscription.status === "active" || subscription.status === "trialing")[0])
        })
    }, [user])

  return subcription
}

export default useSubcription