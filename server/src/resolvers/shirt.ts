import { Shirt } from '../models/Shirt';

export const resolvers = {
  Query: {
    allShirts: async (): Promise<Shirt[]> => Shirt.query(),
  },
  Mutation: {
    createShirt: async (_: unknown, data: Shirt): Promise<Shirt> =>
      Shirt.query().insert(data),
    deleteShirt: async (_: unknown, { id }: Shirt): Promise<number> =>
      Shirt.query().deleteById(id),
  },
};
