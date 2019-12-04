import { withFilter } from "graphql-yoga";
import User from "../../../entities/User";

const resolvers = {
    Subscription: {
        RideStatusSubscription: {
            subscribe: withFilter(
                (_, __, { pubSub }) => pubSub.asyncIterator("rideUpdate"),
                (payload, _, { context }) => {
                    const user: User = context.curerntUser;
                    const {
                        RideStatusSubscription: {
                            driverId,
                            passengerId
                        }
                    } = payload;
                    return user.id === driverId || user.id === passengerId;
                }
            )
        }
    }
}

export default resolvers;