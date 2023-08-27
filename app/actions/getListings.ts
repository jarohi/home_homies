import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  rent?: number;
  brokerge?: String;
  // locationValue?: string;
}

export default async function getListings(
  params: IListingsParams
) {
  try {
    const {
      userId,
      rent, 
      brokerge, 
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (rent) {
      query.rent = {
        lte: +rent
      };
    }

    if (brokerge) {
      query.brokerge = {
        lte: +brokerge
      }
    }

    const listings = await prisma.post.findMany({
      where: query,
      // orderBy: {
      //   createdAt: 'desc'
      // }
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      // createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
