import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";
import { Between } from "typeorm";
import Ride from "../../../entities/Ride";
import { GetNearbyRidesResponse } from "../../../types/graph";

const resolvers: Resolvers = {
    Query: {
        GetNearbyRides: privateResolver(
            async (_, __, { req }): Promise<GetNearbyRidesResponse> => {
                const user: User = req.user;
                if (user.isDriving) {
                    const { lastLat, lastLng } = user;
                    try {
                        const ride = await Ride.findOne({
                            status: "REQUESTING",
                            pickUpLat: Between(lastLat - 0.05, lastLat + 0.05),
                            pickUpLng: Between(lastLng - 0.05, lastLng + 0.05)
                        }, { relations: ["passenger"] });
                        if (ride) {
                            return {
                                ok: true,
                                error: null,
                                ride
                            }
                        } else {
                            return {
                                ok: true,
                                error: null,
                                ride: null
                            }
                        }
                    } catch (error) {
                        return {
                            ok: false,
                            error: error.message,
                            ride: null
                        }
                    }
                } else {
                    return {
                        ok: false,
                        error: "You are not driver",
                        ride: null
                    }
                }
            }
        )
    }
}

export default resolvers;