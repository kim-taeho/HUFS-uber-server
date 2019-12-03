const resolvers = {
    Subscription: {
        DriverSubscription: {
            subscribe: (_, __, { pubSub }) => {
                return pubSub.asynciterator("driverUpdate");
            }
        }
    }
}

export default resolvers;